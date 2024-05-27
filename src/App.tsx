import { Container, Stack } from "@mui/material"
import Header from "./layouts/Header"
import {
    Introduction,
    Projects,
    Work
} from "./sections"

const App = () => {
  return (
    <Container disableGutters maxWidth={false}>
        <Header />
        <Stack alignItems='center'>
            <Introduction />
            <Projects />
            <Work />
        </Stack>
    </Container>
  )
}

export default App
