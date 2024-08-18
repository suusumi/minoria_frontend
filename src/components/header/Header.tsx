import {AppBar, Box, Button, Container, Icon, Toolbar} from "@mui/material";

const pages = ['О нас', 'Продукты', 'Тутуту'];

const AppBarStyles =  {
    background: "white",
    shadows: '0'
};

export const Header = () => {
    // TODO: add adaptive
    // TODO: use theme (not sx)
    return (
            <AppBar sx={AppBarStyles}>
                {/*TODO: set container sizes*/}

                <Container>
                    <Toolbar disableGutters>
                        <Box>
                            <Icon sx={{width:'100px', height:'100%'}}>
                                <img src="/minoria_full_logo.svg" alt="minoria-logo" style={{display:'flex', width: '100%'}}/>
                            </Icon>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}

                                    sx={{ my: 2, color: 'white', display: 'block' }}
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
