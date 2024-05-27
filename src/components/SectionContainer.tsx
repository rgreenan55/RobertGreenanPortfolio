import { Box, Container } from "@mui/material"

type Props = {
    children: React.ReactNode,
    disableTopMargin?: boolean
    height?: string
    maxHeight?: string
}

const SectionContainer = ({children, disableTopMargin, height, maxHeight } : Props) => {
    return (
        <Box position='relative' sx={{ width: '100%', }}>

            {/* Background for Section */}
            <Box position='absolute' sx={{ height: '100%', width: '100%', zIndex: '-1' }}>
                {/* ... */}
            </Box>

            {/* Content of Section */}
            <Container disableGutters sx={{ mt: disableTopMargin?'0':'5vh', mb: '5vh' }}>
                <Box sx={{ height, maxHeight }}>
                    {children}
                </Box>
            </Container>
        </Box>
    )
}

export default SectionContainer;