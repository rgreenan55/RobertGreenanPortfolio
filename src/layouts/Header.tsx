import React from 'react';
import { motion } from 'framer-motion';
import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { GitHub, LightMode, LinkedIn, NightsStay as DarkMode } from "@mui/icons-material";
import logo from '../assets/images/logo.png';
import { ThemeContext } from '../Themes';

const Header = () => {
    const theme = useTheme();
    const setThemeName = React.useContext(ThemeContext);
    const [animation, setAnimation] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(true);
    

    // Handles Light/Dark Mode Switching
    const handleLightDarkModeToggle = () => {
        setAnimation(!animation);
        
        setTimeout(() => {
            setDarkMode(!darkMode);
            setThemeName(darkMode ? 'lightTheme' : 'darkTheme');
        }, 500);
    };

    return (
        <Box flexGrow={1} sx={{ mb: '80px' }}>
            <AppBar position='fixed'>
                <Container disableGutters maxWidth={false} sx={{ maxWidth: '75%' }}>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    
                    {/* Icon + Name */}
                    <Box display='flex'>
                        <Avatar src={logo} sx={{ mr: '16px', boxShadow: '0px 0px 15px' }}/>
                        <Typography variant='h5' lineHeight={1.65}> Robert Greenan </Typography>
                    </Box>

                    {/* Links - Icon Button */}
                    <Box display='flex'>
                        <IconButton onClick={() => window.open('https://github.com/rgreenan55', '_blank')} sx={{ borderRadius: '0' }}>
                            <GitHub sx={{ color: darkMode ? 'white' : '#171717' }} />
                        </IconButton>

                        <IconButton onClick={() => window.open('https://www.linkedin.com/in/robert-greenan/', '_blank')} sx={{ borderRadius: '0' }}>
                            <LinkedIn sx={{ color: darkMode ? 'white' : '#171717' }} />
                        </IconButton>

                        <Box sx={{ backgroundColor: 'black' }}>
                            <Box
                                component={motion.div}
                                animate={animation ? { rotateY: 360 } : {}}
                                transition={{ duration: 1 }}
                                onClick={handleLightDarkModeToggle}
                                sx={{ backgroundColor: theme.palette.primary.main }}
                            >
                            <IconButton sx={{ borderRadius: '0' }}>
                                {darkMode ?
                                    <DarkMode sx={{ color: darkMode ? 'white' : '#171717' }} />
                                    : 
                                    <LightMode sx={{ color: darkMode ? 'white' : '#171717' }} />
                                }
                            </IconButton>
                            </Box>
                        </Box>
                    </Box>

                </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header;