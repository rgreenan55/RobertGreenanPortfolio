import { Container, CssBaseline, Stack } from "@mui/material"
import { ThemeHandler } from './Themes';

import Header from "./layouts/Header"
import {
    Introduction,
    //Personal,
    //Projects,
    Work
} from "./sections"
import Skills from "./sections/Skills";


const App = () => {
    return (
        <ThemeHandler>
            <CssBaseline />
            <Container disableGutters maxWidth={false}>
                <Header />
                <Stack alignItems='center'>
                    <Introduction />
                    <Work />
                    <Skills />
                </Stack>
                {/* Footer? */}
            </Container>
        </ThemeHandler>
    )
}

export default App
