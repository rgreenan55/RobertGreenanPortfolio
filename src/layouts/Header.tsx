import { GitHub, LinkedIn } from "@mui/icons-material";
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box flexGrow={1}>
            <AppBar position='fixed'>
                <Container maxWidth='xl'>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Icon? */}
                    <Typography variant='h5'> Robert Greenan </Typography>


                    {/* Icons */}
                    <Box>
                        <IconButton> <GitHub sx={{ color: 'black', opacity: 0.75 }} /> </IconButton>
                        <IconButton> <LinkedIn sx={{ color: 'black', opacity: 0.75 }} /> </IconButton>
                    </Box>
                </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header;