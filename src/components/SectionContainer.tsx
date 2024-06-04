import { Box, Button, Container, Typography } from "@mui/material"
import { FileOpen } from "@mui/icons-material"
import ResumePDF from '../assets/documents/Robert_Greenan_Resume.pdf';

type Props = {
    children : React.ReactNode,
    disableTopMargin ?: boolean,
    headerTitle ?: string,
    height ?: string | any,
    maxHeight ?: string | any,
    backgroundShape ?: boolean
}

const SectionContainer = ({children, disableTopMargin, headerTitle, height, maxHeight } : Props) => {
    return (
        <Box position='relative' sx={{ width: '100%' }}>

            {/* 
            {backgroundShape &&
                <Box position='absolute' sx={{ height: '100%', width: '100%', zIndex: '-1', backgroundImage: 'linear-gradient(180deg, rgb(0,0,0,0) 12%, #22313F 12% 95%, rgb(0,0,0,0) 95%)' }} />
            } */}


            {/* Content of Section */}
            <Container disableGutters maxWidth={false} sx={{ mt: disableTopMargin?'0':'5vh', mb: '10vh', maxWidth: '75%', height: 'auto' }}>
                {headerTitle && (
                    <Box display='flex' sx={{ mb: '16px', justifyContent: 'space-between' }}>
                        <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
                            {headerTitle}
                        </Typography>

                        <Button variant='contained' size='large' startIcon={<FileOpen />} sx={{ boxShadow: 3 }} onClick={() => window.open(ResumePDF, '_blank')}>
                            View Full Resume
                        </Button>
                    </Box>
                )}

                <Box sx={{ height, maxHeight }}>
                    {children}
                </Box>
            </Container>
        </Box>
    )
}

export default SectionContainer;