import { Container, Grid } from "@mui/material"
import Header from "./layouts/Header"
import Introduction from "./sections/Introduction"

const App = () => {
  return (
    <>
        <Header />
        <Container maxWidth='xl'>
        <Grid container mt={'80px'}>
            <Introduction />
        </Grid>
        </Container>
    </>
  )
}

export default App
