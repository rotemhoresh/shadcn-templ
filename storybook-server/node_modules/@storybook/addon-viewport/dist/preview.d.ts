type GlobalState = {
    value: string | undefined;
    isRotated: boolean;
};

declare const initialGlobals: Record<string, GlobalState> | {
    viewport: string;
    viewportRotated: boolean;
};

export { initialGlobals };
