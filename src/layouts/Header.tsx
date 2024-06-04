import { GitHub, LinkedIn } from "@mui/icons-material";
import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <Box flexGrow={1} sx={{ mb: '80px' }}>
            <AppBar position='fixed'>
                <Container disableGutters maxWidth={false} sx={{ maxWidth: '75%' }}>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    
                    {/* Icon + Name */}
                    <Box display='flex'>
                        <Avatar src={logo} sx={{ mr: '16px' }}/>
                        <Typography variant='h5' lineHeight={1.65}> Robert Greenan </Typography>
                    </Box>

                    {/* Links - Icon Button */}
                    <Box>
                        <IconButton onClick={() => window.open('https://github.com/rgreenan55', '_blank')}>
                            <GitHub sx={{ color: 'black', opacity: 0.8 }} />
                        </IconButton>

                        <IconButton onClick={() => window.open('https://www.linkedin.com/in/robert-greenan/', '_blank')}>
                            <LinkedIn sx={{ color: 'black',  opacity: 0.8 }} />
                        </IconButton>
                    </Box>

                </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header;