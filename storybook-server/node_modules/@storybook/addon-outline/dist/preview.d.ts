import { Addon_DecoratorFunction } from 'storybook/internal/types';

declare const decorators: Addon_DecoratorFunction[];
declare const initialGlobals: {
    outline: boolean;
};

export { decorators, initialGlobals };
