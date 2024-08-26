import {createTheme} from "@mui/material";
import {purple, red} from "@mui/material/colors";

const theme = createTheme({
    status: {
        danger: red[500],
    },
    palette: {
        primary: {
            main: purple[500],
        }
    }
})

export default theme;