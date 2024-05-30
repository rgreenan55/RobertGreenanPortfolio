import { Container, Stack } from "@mui/material"
import Header from "./layouts/Header"
import {
    Introduction,
    Personal,
    Projects,
    Work
} from "./sections"

const App = () => {
  return (
    <Container disableGutters maxWidth={false}>
        <Header />
        <Stack alignItems='center'>
            <Introduction />
            <Work />
        </Stack>
        {/* Footer? */}
    </Container>
  )
}

export default App
