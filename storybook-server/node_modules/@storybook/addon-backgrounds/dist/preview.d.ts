import { Addon_DecoratorFunction } from 'storybook/internal/types';

interface Background {
    name: string;
    value: string;
}
type GlobalState = {
    value: string | undefined;
    grid: boolean;
};

declare const decorators: Addon_DecoratorFunction[];
declare const parameters: {
    backgrounds: {
        values?: Background[] | undefined;
        grid: {
            cellSize: number;
            opacity: number;
            cellAmount: number;
        };
        disable: false;
    };
};
declare const initialGlobals: Record<string, GlobalState> | {
    backgrounds: null;
};

export { decorators, initialGlobals, parameters };
