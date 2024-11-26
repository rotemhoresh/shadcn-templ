interface PresetOptions {
    /**
     * Allow to use @storybook/addon-actions
     *
     * @default true
     * @see https://storybook.js.org/addons/@storybook/addon-actions
     */
    actions?: boolean;
    /**
     * Allow to use @storybook/addon-backgrounds
     *
     * @default true
     * @see https://storybook.js.org/addons/@storybook/addon-backgrounds
     */
    backgrounds?: boolean;
    configDir: string;
    /**
     * Allow to use @storybook/addon-controls
     *
     * @default true
     * @see https://storybook.js.org/addons/@storybook/addon-controls
     */
    controls?: boolean;
    /**
     * Allow to use @storybook/addon-docs
     *
     * @default true
     * @see https://storybook.js.org/addons/@storybook/addon-docs
     */
    docs?: boolean;
    /**
     * Allow to use @storybook/addon-measure
     *
     * @default true
     * @see https://storybook.js.org/addons/@storybook/addon-measure
     */
    measure?: boolean;
    /**
     * Allow to use @storybook/addon-outline
     *
     * @default true
     * @see https://storybook.js.org/addons/@storybook/addon-outline
     */
    outline?: boolean;
    themes?: boolean;
    /**
     * Allow to use @storybook/addon-toolbars
     *
     * @default true
     * @see https://storybook.js.org/addons/@storybook/addon-toolbars
     */
    toolbars?: boolean;
    /**
     * Allow to use @storybook/addon-viewport
     *
     * @default true
     * @see https://storybook.js.org/addons/@storybook/addon-viewport
     */
    viewport?: boolean;
}
declare function addons(options: PresetOptions): string[];

export { addons };
