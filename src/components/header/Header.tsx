import {AppBar, Box, Button, Container, Icon, Toolbar} from "@mui/material";

const pages = ['О нас', 'Продукты', 'Тутуту'];

const AppBarStyles =  {
    background: "white",
    boxShadow: '0',
    display: 'flex',
    alignItems: 'center',
};

export const Header = () => {
    // TODO: add adaptive
    // TODO: use theme (not sx)
    return (
            <AppBar sx={AppBarStyles}>
                {/*TODO: set container sizes*/}

                <Container>
                    <Toolbar disableGutters>
                        <Box sx={{display:'flex', alignItems: 'center'}}>
                            <Icon sx={{width:'100px', height:'auto'}}>
                                <img src="/minoria_full_logo.svg" alt="minoria-logo" style={{display:'flex', width: '100%'}}/>
                            </Icon>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            {pages.map((page) => (
                                <Button variant="contained"
                                    key={page}
                                    sx={{

                                        margin: '0 10px',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

    );
};
