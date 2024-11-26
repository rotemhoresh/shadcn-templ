import { PresetProperty, Options } from 'storybook/internal/types';
import * as webpack$1 from 'webpack';
import { Configuration } from 'webpack';

declare const swc: PresetProperty<'swc'>;
declare function webpack(config: Configuration, options: Options): Promise<any>;
declare const webpackInstance: () => Promise<typeof webpack$1>;
declare const webpackVersion: () => Promise<string>;

export { swc, webpack, webpackInstance, webpackVersion };
