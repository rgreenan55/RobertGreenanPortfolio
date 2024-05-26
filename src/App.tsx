import { Container, Grid, Stack } from "@mui/material"
import Header from "./layouts/Header"
import Introduction from "./sections/Introduction"

const App = () => {
  return (
    <>
        <Header />
        <Container maxWidth={false} sx={{ maxWidth: '75%' }}>
        <Grid mt={'80px'}>
            <Stack spacing='10vh'>
                <Introduction />
            </Stack>
        </Grid>
        </Container>
    </>
  )
}

export default App
