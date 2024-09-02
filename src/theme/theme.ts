import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#28368e',
        },
        background: {
            paper: "#f2f2f2",
        },
        text: {
            primary: "#ffffff",
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                }
            }
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            paper: "#393939",
        },
        text: {
            primary: "#fff",
        },

    },
    components: {
        MuiAppBar: {
          styleOverrides: {
              root: {
                  boxShadow: "none",
              }
          }
        },
    },
});