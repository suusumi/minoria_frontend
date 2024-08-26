import {createTheme} from "@mui/material";
import {purple, red} from "@mui/material/colors";

// const theme = createTheme({
//     status: {
//         danger: red[500],
//     },
//     palette: {
//         primary: {
//             main: purple[500],
//         }
//     }
// })

// export default theme;

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            paper: "#f2f2f2",
        },
        text: {
            primary: "#11111",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            paper: "#222",
        },
        text: {
            primary: "#fff",
        },
    },
});