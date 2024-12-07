import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Tooltip, Typography, useTheme } from "@mui/material";
import { GitHub, LightMode, LinkedIn, NightsStay as DarkMode, SentimentVerySatisfied, SentimentSatisfied, SentimentNeutral, SentimentDissatisfied, SentimentVeryDissatisfied } from "@mui/icons-material";
import { ThemeContext } from '../Themes';
import Logo from '../assets/images/logo.png';

const moodIcons = [
    { text: '', icon: <SentimentVerySatisfied /> },
    { text: 'Hey there!', icon: <SentimentVerySatisfied /> },
    { text: 'Hey, again!', icon: <SentimentVerySatisfied /> },
    { text: 'Ouch!', icon: <SentimentSatisfied /> },
    { text: 'That kinda hurts you know.', icon: <SentimentNeutral /> },
    { text: 'Knock it off would you?', icon: <SentimentDissatisfied /> },
    { text: 'Seriously, stop it...', icon: <SentimentDissatisfied /> },
    { text: '...', icon: <SentimentVeryDissatisfied /> }
]

const Header = () => {
    const theme = useTheme();
    const setThemeName = React.useContext(ThemeContext);
    const [animation, setAnimation] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(true);
    const [moodIndex, setMoodIndex] = React.useState(0);
    const [showMood, setShowMood] = React.useState(false);

    // Handles Light/Dark Mode Switching
    const handleLightDarkModeToggle = () => {
        setAnimation(!animation);
        
        setTimeout(() => {
            setDarkMode(!darkMode);
            setThemeName(darkMode ? 'lightTheme' : 'darkTheme');
            if (moodIndex >= moodIcons.length) {
                setMoodIndex(moodIcons.length-1);
            }
        }, 500);
    };

    const handleMoodTooltip = () => {
        setMoodIndex(moodIndex+1);
        setShowMood(true);

        setTimeout(() => {
            setShowMood(false);
        }, 1000);
    }

    return (
        <Box flexGrow={1} sx={{ mb: '80px' }}>
            <AppBar position='fixed'>
                <Container disableGutters maxWidth={false} sx={{ maxWidth: { xs: '90%', 'md': '75%' }}}>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    
                    {/* Icon + Name */}
                    <Box display='flex'>
                        <Avatar src={Logo} sx={{ mr: '16px', boxShadow: '0px 0px 15px' }}/>
                        <Typography variant='h5' lineHeight={1.65}> Robert Greenan </Typography>
                    </Box>

                    {/* Links - Icon Button */}
                    <Box display='flex'>
                        
                        {/* Playful Mood Button */}
                        <AnimatePresence>
                            {moodIndex < moodIcons.length &&
                                <Box sx={{ backgroundColor: darkMode ? 'white' : '#171717' }}>
                                    <Box
                                        component={motion.div}
                                        transition={{ duration: 0.5 }}
                                        exit={{ rotateY: 180 }}
                                        sx={{ backgroundColor: theme.palette.primary.main }}
                                    >
                                        <IconButton
                                            component={motion.div}
                                            transition={{ duration: 0, delay: 0.15 }}
                                            exit={{ opacity: 0 }}
                                            disabled={showMood}
                                            onClick={handleMoodTooltip}
                                            style={{ borderRadius: '0' }}
                                        >
                                            <Tooltip open={showMood} title={moodIcons[moodIndex].text} arrow>
                                                {moodIcons[moodIndex].icon}
                                            </Tooltip>
                                        </IconButton>
                                    </Box>
                                </Box>
                            }
                        </AnimatePresence>

                        {/* Links */}
                        <IconButton onClick={() => window.open('https://github.com/rgreenan55', '_blank')} style={{ borderRadius: '0' }}>
                            <GitHub />
                        </IconButton>

                        <IconButton onClick={() => window.open('https://www.linkedin.com/in/robert-greenan/', '_blank')} style={{ borderRadius: '0' }}>
                            <LinkedIn />
                        </IconButton>

                        {/* Theme Mode Button */}
                        <Box sx={{ backgroundColor: darkMode ? 'white' : '#171717' }}>
                            <Box
                                component={motion.div}
                                animate={animation ? { rotateY: 360 } : {}}
                                transition={{ duration: 1 }}
                                onClick={handleLightDarkModeToggle}
                                sx={{ backgroundColor: theme.palette.primary.main }}
                            >
                            <IconButton style={{ borderRadius: '0' }}>
                                {darkMode ? <DarkMode /> : <LightMode />}
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