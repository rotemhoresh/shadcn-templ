import { getProjectRoot } from "@storybook/core-common";
import type { Options } from "@storybook/types";
import type { Options as SwcOptions } from "@swc/core";
import type { Configuration } from "webpack";

const virtualModuleFiles = [
  /storybook-config-entry\.js$/,
  /storybook-stories\.js$/,
];

export const webpackFinal = async (config: Configuration, options: Options) => {
  const swcOptions = await options.presets.apply("swc", {}, options);
  const typescriptOptions = await options.presets.apply(
    "typescript",
    {},
    options,
  );

  const swcFinalOptions: SwcOptions = {
    ...swcOptions,
    env: {
      ...(swcOptions?.env ?? {}),
      // Transpiles the broken syntax to the closest non-broken modern syntax.
      // E.g. it won't transpile parameter destructuring in Safari
      // which would break how we detect if the mount context property is used in the play function.
      bugfixes: swcOptions?.env?.bugfixes ?? true,
    },
    jsc: {
      ...(swcOptions.jsc ?? {}),
      parser: swcOptions.jsc?.parser ?? {
        syntax: "typescript",
        tsx: true,
        dynamicImport: true,
      },
    },
  };

  config.module = {
    ...(config.module || {}),
    rules: [
      ...(config.module?.rules || []),
      {
        test: typescriptOptions.skipCompiler
          ? /\.((c|m)?jsx?)$/
          : /\.((c|m)?(j|t)sx?)$/,
        use: [
          {
            loader: require.resolve("swc-loader"),
            options: swcFinalOptions,
          },
        ],
        include: [getProjectRoot()],
        exclude: [/node_modules/, ...virtualModuleFiles],
      },
    ],
  };

  return config;
};
