import { Container, CssBaseline, Stack } from "@mui/material"
import { ThemeHandler } from './Themes';
import Header from "./layouts/Header"
import {
    Introduction,
    Work,
    Skills,
    //Projects,
    //Personal,
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
                    <Skills />
                </Stack>
                {/* Footer? */}
            </Container>
        </ThemeHandler>
    )
}

export default App
