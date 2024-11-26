declare const globalsNameReferenceMap: {
    readonly '@storybook/global': "__STORYBOOK_MODULE_GLOBAL__";
    readonly 'storybook/internal/channels': "__STORYBOOK_MODULE_CHANNELS__";
    readonly '@storybook/channels': "__STORYBOOK_MODULE_CHANNELS__";
    readonly '@storybook/core/channels': "__STORYBOOK_MODULE_CHANNELS__";
    readonly 'storybook/internal/client-logger': "__STORYBOOK_MODULE_CLIENT_LOGGER__";
    readonly '@storybook/client-logger': "__STORYBOOK_MODULE_CLIENT_LOGGER__";
    readonly '@storybook/core/client-logger': "__STORYBOOK_MODULE_CLIENT_LOGGER__";
    readonly 'storybook/internal/core-events': "__STORYBOOK_MODULE_CORE_EVENTS__";
    readonly '@storybook/core-events': "__STORYBOOK_MODULE_CORE_EVENTS__";
    readonly '@storybook/core/core-events': "__STORYBOOK_MODULE_CORE_EVENTS__";
    readonly 'storybook/internal/preview-errors': "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__";
    readonly '@storybook/core-events/preview-errors': "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__";
    readonly '@storybook/core/preview-errors': "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__";
    readonly 'storybook/internal/preview-api': "__STORYBOOK_MODULE_PREVIEW_API__";
    readonly '@storybook/preview-api': "__STORYBOOK_MODULE_PREVIEW_API__";
    readonly '@storybook/core/preview-api': "__STORYBOOK_MODULE_PREVIEW_API__";
    readonly 'storybook/internal/types': "__STORYBOOK_MODULE_TYPES__";
    readonly '@storybook/types': "__STORYBOOK_MODULE_TYPES__";
    readonly '@storybook/core/types': "__STORYBOOK_MODULE_TYPES__";
};
declare const globalPackages: ("@storybook/global" | "storybook/internal/channels" | "@storybook/channels" | "@storybook/core/channels" | "storybook/internal/client-logger" | "@storybook/client-logger" | "@storybook/core/client-logger" | "storybook/internal/core-events" | "@storybook/core-events" | "@storybook/core/core-events" | "storybook/internal/preview-errors" | "@storybook/core-events/preview-errors" | "@storybook/core/preview-errors" | "storybook/internal/preview-api" | "@storybook/preview-api" | "@storybook/core/preview-api" | "storybook/internal/types" | "@storybook/types" | "@storybook/core/types")[];

export { globalPackages, globalsNameReferenceMap };
