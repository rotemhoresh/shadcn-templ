import { Addon_DecoratorFunction } from 'storybook/internal/types';

declare const decorators: Addon_DecoratorFunction[];
declare const initialGlobals: {
    measureEnabled: boolean;
};

export { decorators, initialGlobals };
