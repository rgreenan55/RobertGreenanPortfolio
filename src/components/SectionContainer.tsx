import { Box, Container } from "@mui/material"

type Props = {
    children : React.ReactNode,
    disableTopMargin ?: boolean,
    sectionHeader ?: React.ReactNode,
    height ?: string | any,
    maxHeight ?: string | any,
    backgroundShape ?: boolean
}

const SectionContainer = ({children, disableTopMargin, sectionHeader, height, maxHeight } : Props) => {
    return (
        <Box position='relative' sx={{ width: '100%' }}>

            {/* Content of Section */}
            <Container disableGutters maxWidth={false} sx={{ mt: disableTopMargin?'0':'5vh', mb: '10vh', maxWidth: { xs: '90%', 'md': '75%' } , height: 'auto' }}>
                {sectionHeader}
                <Box sx={{ height, maxHeight }}>
                    {children}
                </Box>
            </Container>
        </Box>
    )
}

export default SectionContainer;