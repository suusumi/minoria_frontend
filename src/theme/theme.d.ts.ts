import {Theme, ThemeOptions} from "@mui/material";

declare module '@mui/material/styles' {

    interface MinoriaTheme extends Theme {
        status: {
            danger: string;
        };
    }

    interface MinioriaCustomOptions extends ThemeOptions {
        status?: {
            danger?: string;
        };
    }
    export function createTheme(options?: MinioriaCustomOptions): MinoriaTheme;
}