import './App.css'
import {Header} from "./components/header/Header.tsx";
// import {BrowserRouter, Routes} from "react-router-dom";

import {QueryClient, QueryClientProvider} from "react-query";
import {RegistrationForm2} from "./components/registration/RegistrationForm2.tsx";
import {Box, CssBaseline, FormControlLabel, FormGroup, Switch, ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "./theme/theme.ts";
import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "./redux/theme/themeSlice.ts";
import {RootState} from "./redux/store.ts";


const queryClient = new QueryClient();

function App() {
    // Получить тему из стора
    const theme = useSelector((state:RootState) => state.theme)

    // Диспатч для переключателя
    const dispatch = useDispatch();

    const ToggleSwitch = () => {
        return (
            <div
                style={{

                    top: "10px",
                    right: "10px",
                }}
            >
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={theme.darkTheme}
                                onChange={() => dispatch(toggleTheme())}
                            />
                        }
                        label="Toggle Theme"
                    />
                </FormGroup>
            </div>
        );
    };

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
                <CssBaseline />
                <Header/>
                <Box sx={{marginTop:'200px'}}>
                    <ToggleSwitch />
                </Box>
                <RegistrationForm2/>
                {/*<BrowserRouter>*/}
                {/*    <Routes>*/}

                {/*    </Routes>*/}
                {/*</BrowserRouter>*/}
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
