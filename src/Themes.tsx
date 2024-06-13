import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const lightTheme = createTheme({
    palette: {
        primary: { main: '#ffffff', contrastText: '#171717' },
        secondary: { main: '#6030b0' },
    },
    typography: {
        fontFamily: '"Inter"',
    },
    components: {
        MuiCard: {
            defaultProps: {
                elevation: 10,
                sx: { border: '1px solid #ffffff' },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 10,
                sx: { border: '1px solid #ffffff' },
            }
        },
        MuiIconButton: {
            defaultProps: { 
                sx: { '> *': { color: '#171717' }}
            }
        }
    }
});

const darkTheme = createTheme({
    palette: {
        primary: { main: '#171717', contrastText: '#ffffff' },
        secondary: { main: '#a793cc' },
        error: { main: '#e57373' },
        background: {
            default: '#101010',
            paper: '#171717',
        },
        text: { primary: '#fdfdfd' },
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
                sx: { '> *': { color: '#ffffff' }}
            }
        },
        
    },
})


const getThemeByName = (theme : string) => {
    return ThemeMap[theme];
}

const ThemeMap: { [key : string] : any } = { 
    lightTheme, darkTheme
}

export const ThemeContext = React.createContext(getThemeByName('darkTheme'));

export const ThemeHandler = (props : any) => {
    const [themeName, setThemeName] = React.useState('darkTheme');
    const theme = getThemeByName(themeName);

    return (
        <ThemeContext.Provider value={setThemeName}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}