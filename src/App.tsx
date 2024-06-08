import { Container, CssBaseline, Stack } from "@mui/material"
import { ThemeHandler } from './Themes';

import Header from "./layouts/Header"
import {
    Introduction,
    //Personal,
    //Projects,
    Work
} from "./sections"


const App = () => {


    return (
        <ThemeHandler>
            <CssBaseline />
            <Container disableGutters maxWidth={false}>
                <Header />
                <Stack alignItems='center'>
                    <Introduction />
                    <Work />
                </Stack>
                {/* Footer? */}
            </Container>
        </ThemeHandler>
    )
}

export default App
