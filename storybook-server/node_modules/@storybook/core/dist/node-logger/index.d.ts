/// <reference types="node" />
import { EventEmitter } from 'events';

/**
Levels:
- `0` - All colors disabled.
- `1` - Basic 16 colors support.
- `2` - ANSI 256 colors support.
- `3` - Truecolor 16 million colors support.
*/
type ColorSupportLevel = 0 | 1 | 2 | 3;

// TODO: Make it this when TS suports that.
// import {ModifierName, ForegroundColor, BackgroundColor, ColorName} from '#ansi-styles';
// import {ColorInfo, ColorSupportLevel} from '#supports-color';
 // eslint-disable-line @typescript-eslint/naming-convention

interface ChalkInstance {
	(...text: unknown[]): string;

	/**
	The color support for Chalk.

	By default, color support is automatically detected based on the environment.

	Levels:
	- `0` - All colors disabled.
	- `1` - Basic 16 colors support.
	- `2` - ANSI 256 colors support.
	- `3` - Truecolor 16 million colors support.
	*/
	level: ColorSupportLevel;

	/**
	Use RGB values to set text color.

	@example
	```
	import chalk from 'chalk';

	chalk.rgb(222, 173, 237);
	```
	*/
	rgb: (red: number, green: number, blue: number) => this;

	/**
	Use HEX value to set text color.

	@param color - Hexadecimal value representing the desired color.

	@example
	```
	import chalk from 'chalk';

	chalk.hex('#DEADED');
	```
	*/
	hex: (color: string) => this;

	/**
	Use an [8-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) to set text color.

	@example
	```
	import chalk from 'chalk';

	chalk.ansi256(201);
	```
	*/
	ansi256: (index: number) => this;

	/**
	Use RGB values to set background color.

	@example
	```
	import chalk from 'chalk';

	chalk.bgRgb(222, 173, 237);
	```
	*/
	bgRgb: (red: number, green: number, blue: number) => this;

	/**
	Use HEX value to set background color.

	@param color - Hexadecimal value representing the desired color.

	@example
	```
	import chalk from 'chalk';

	chalk.bgHex('#DEADED');
	```
	*/
	bgHex: (color: string) => this;

	/**
	Use a [8-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) to set background color.

	@example
	```
	import chalk from 'chalk';

	chalk.bgAnsi256(201);
	```
	*/
	bgAnsi256: (index: number) => this;

	/**
	Modifier: Reset the current style.
	*/
	readonly reset: this;

	/**
	Modifier: Make the text bold.
	*/
	readonly bold: this;

	/**
	Modifier: Make the text have lower opacity.
	*/
	readonly dim: this;

	/**
	Modifier: Make the text italic. *(Not widely supported)*
	*/
	readonly italic: this;

	/**
	Modifier: Put a horizontal line below the text. *(Not widely supported)*
	*/
	readonly underline: this;

	/**
	Modifier: Put a horizontal line above the text. *(Not widely supported)*
	*/
	readonly overline: this;

	/**
	Modifier: Invert background and foreground colors.
	*/
	readonly inverse: this;

	/**
	Modifier: Print the text but make it invisible.
	*/
	readonly hidden: this;

	/**
	Modifier: Puts a horizontal line through the center of the text. *(Not widely supported)*
	*/
	readonly strikethrough: this;

	/**
	Modifier: Print the text only when Chalk has a color level above zero.

	Can be useful for things that are purely cosmetic.
	*/
	readonly visible: this;

	readonly black: this;
	readonly red: this;
	readonly green: this;
	readonly yellow: this;
	readonly blue: this;
	readonly magenta: this;
	readonly cyan: this;
	readonly white: this;

	/*
	Alias for `blackBright`.
	*/
	readonly gray: this;

	/*
	Alias for `blackBright`.
	*/
	readonly grey: this;

	readonly blackBright: this;
	readonly redBright: this;
	readonly greenBright: this;
	readonly yellowBright: this;
	readonly blueBright: this;
	readonly magentaBright: this;
	readonly cyanBright: this;
	readonly whiteBright: this;

	readonly bgBlack: this;
	readonly bgRed: this;
	readonly bgGreen: this;
	readonly bgYellow: this;
	readonly bgBlue: this;
	readonly bgMagenta: this;
	readonly bgCyan: this;
	readonly bgWhite: this;

	/*
	Alias for `bgBlackBright`.
	*/
	readonly bgGray: this;

	/*
	Alias for `bgBlackBright`.
	*/
	readonly bgGrey: this;

	readonly bgBlackBright: this;
	readonly bgRedBright: this;
	readonly bgGreenBright: this;
	readonly bgYellowBright: this;
	readonly bgBlueBright: this;
	readonly bgMagentaBright: this;
	readonly bgCyanBright: this;
	readonly bgWhiteBright: this;
}

declare namespace npmlog {
    // TODO: newStream, newGroup, setGaugeTemplate and setGaugeTemplateSet need to be added
    interface Logger extends EventEmitter {
        (): any;

        level: string;
        record: MessageObject[];
        maxRecordSize: number;
        prefixStyle: StyleObject;
        headingStyle: StyleObject;
        heading: string;
        stream: any; // Defaults to process.stderr

        /**
         * Creates a log message
         * @param level
         * @param prefix
         * @param message message of the log which will be formatted using utils.format()
         * @param args additional arguments appended to the log message also formatted using utils.format()
         */
        log(level: LogLevels | string, prefix: string, message: any, ...args: any[]): void;

        /**
         * @param prefix
         * @param message message of the log which will be formatted using utils.format()
         * @param args additional arguments appended to the log message also formatted using utils.format()
         */
        silly(prefix: string, message: any, ...args: any[]): void;
        verbose(prefix: string, message: any, ...args: any[]): void;
        info(prefix: string, message: any, ...args: any[]): void;
        timing(prefix: string, message: any, ...args: any[]): void;
        http(prefix: string, message: any, ...args: any[]): void;
        notice(prefix: string, message: any, ...args: any[]): void;
        warn(prefix: string, message: any, ...args: any[]): void;
        error(prefix: string, message: any, ...args: any[]): void;
        silent(prefix: string, message: any, ...args: any[]): void;

        enableColor(): void;
        disableColor(): void;

        enableProgress(): void;
        disableProgress(): void;
        progressEnabled(): boolean;

        enableUnicode(): void;
        disableUnicode(): void;

        pause(): void;
        resume(): void;

        addLevel(level: string, n: number, style?: StyleObject, disp?: string): void;

        // Allows for custom log levels
        // npmlog.addLevel("custom", level)
        // npmlog.custom(prefix, message)
        [key: string]: any;
    }

    type LogLevels = "silly" | "verbose" | "info" | "timing" | "http" | "notice" | "warn" | "error" | "silent";

    interface StyleObject {
        fg?: string | undefined;
        bg?: string | undefined;
        bold?: boolean | undefined;
        inverse?: boolean | undefined;
        underline?: boolean | undefined;
        bell?: boolean | undefined;
    }

    interface MessageObject {
        id: number;
        level: string;
        prefix: string;
        message: string;
        messageRaw: string;
    }
}

declare var npmlog: npmlog.Logger;

declare const colors: {
    pink: ChalkInstance;
    purple: ChalkInstance;
    orange: ChalkInstance;
    green: ChalkInstance;
    blue: ChalkInstance;
    red: ChalkInstance;
    gray: ChalkInstance;
};
declare const logger: {
    verbose: (message: string) => void;
    info: (message: string) => void;
    plain: (message: string) => void;
    line: (count?: number) => void;
    warn: (message: string) => void;
    trace: ({ message, time }: {
        message: string;
        time: [
            number,
            number
        ];
    }) => void;
    setLevel: (level?: string) => void;
    error: (message: Error | string) => void;
};

declare const once: {
    (type: 'verbose' | 'info' | 'warn' | 'error'): (message: string) => void;
    clear(): void;
    verbose: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
};
declare const deprecate: (message: string) => void;

export { colors, deprecate, npmlog as instance, logger, once };
