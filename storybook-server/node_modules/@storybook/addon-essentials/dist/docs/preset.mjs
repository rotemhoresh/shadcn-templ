import ESM_COMPAT_Module from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { __require } from '../chunk-7RUYHJJB.mjs';
export * from '@storybook/addon-docs/dist/preset';

const __filename = fileURLToPath(import.meta.url);
dirname(__filename);
ESM_COMPAT_Module.createRequire(import.meta.url);
var mdxLoaderOptions=async config=>(config.mdxCompileOptions.providerImportSource=join(dirname(__require.resolve("@storybook/addon-docs/package.json")),"/dist/shims/mdx-react-shim.mjs"),config);

export { mdxLoaderOptions };
