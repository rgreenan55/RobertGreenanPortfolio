import { Box, Container, Typography } from "@mui/material"

type Props = {
    children: React.ReactNode,
    disableTopMargin?: boolean,
    headerTitle?: string,
    height?: string | any,
    maxHeight?: string | any,
}

const SectionContainer = ({children, disableTopMargin, headerTitle, height, maxHeight } : Props) => {
    return (
        <Box position='relative' sx={{ width: '100%' }}>

            {/* Background for Section */}
            <Box position='absolute' sx={{ height: '100%', width: '100%', zIndex: '-1' }}>
                {/* ... */}
            </Box>


            {/* Content of Section */}
            <Container disableGutters maxWidth={false} sx={{ mt: disableTopMargin?'0':'5vh', mb: '5vh', maxWidth: '80%', height: 'auto' }}>
                {headerTitle && <Typography variant='h4' sx={{ mb: '16px', textDecoration: 'underline' }}> {headerTitle} </Typography>}
                <Box sx={{ height, maxHeight }}>
                    {children}
                </Box>
            </Container>
        </Box>
    )
}

export default SectionContainer;