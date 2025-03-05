import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const lightTheme = createTheme({
    palette: {
        primary: { main: '#ffffff', contrastText: '#171717' },
        secondary: { main: '#171717'},
        divider: '#000000',
    },
    typography: {
        fontFamily: '"Inter"',
    },
    components: {
        MuiCard: {
            defaultProps: {
                elevation: 10,
                sx: { border: '1px solid lightgrey' },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 10,
                sx: { border: '1px solid lightgrey' },
            }
        },
        MuiIconButton: {
            defaultProps: { 
                sx: { '> *': { color: '#171717' }, '&:hover': { backgroundColor: 'rgba(120, 120, 120, 0.25)' } }
            }
        },
    }
});

const darkTheme = createTheme({
    palette: {
        primary: { main: '#171717', contrastText: '#ffffff' },
        secondary: { main: '#ffffff' },
        error: { main: '#e57373' },
        background: {
            default: '#101010',
            paper: '#171717',
        },
        text: { primary: '#fdfdfd', secondary: '#bdbdbd' },
        divider: '#ffffff',
    },
    typography: {
        fontFamily: '"Inter"',
    },
    components: {
        MuiCard: {
            defaultProps: {
                elevation: 10,
                sx: { border: '1px solid #383838' },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 10,
                sx: { border: '1px solid #383838' },
            }
        },
        MuiIconButton: {
            defaultProps: { 
                sx: { '> *': { color: '#ffffff' }, '&:hover': { backgroundColor: 'rgba(180, 180, 180, 0.25)' }}
            }
        },
    },
})


// Theme Stuff
const getThemeByName = (theme : string) => ThemeMap[theme];
const ThemeMap: { [key : string] : any } = { lightTheme, darkTheme }
export const ThemeContext = React.createContext(getThemeByName('darkTheme'));

type ThemeProps = { children : React.ReactNode }
export const ThemeHandler = ({ children } : ThemeProps) => {
    const [themeName, setThemeName] = React.useState('darkTheme');
    const theme = getThemeByName(themeName);

    return (
        <ThemeContext.Provider value={setThemeName}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}