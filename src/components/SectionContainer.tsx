import { Box, Container, Typography } from "@mui/material"
import backgroundImage from '../assets/background/backgroundShape.png';

type Props = {
    children : React.ReactNode,
    disableTopMargin ?: boolean,
    headerTitle ?: string,
    height ?: string | any,
    maxHeight ?: string | any,
    backgroundShape ?: boolean
}

const SectionContainer = ({children, disableTopMargin, headerTitle, height, maxHeight, backgroundShape } : Props) => {
    return (
        <Box position='relative' sx={{ width: '100%' }}>

            {/* 
            {backgroundShape &&
                <Box position='absolute' sx={{ height: '100%', width: '100%', zIndex: '-1', backgroundImage: 'linear-gradient(180deg, rgb(0,0,0,0) 12%, #22313F 12% 95%, rgb(0,0,0,0) 95%)' }} />
            } */}


            {/* Content of Section */}
            <Container disableGutters maxWidth={false} sx={{ mt: disableTopMargin?'0':'5vh', mb: '10vh', maxWidth: '75%', height: 'auto' }}>
                {headerTitle && <Typography variant='h4' sx={{ mb: '16px', textDecoration: 'underline' }}> {headerTitle} </Typography>}
                <Box sx={{ height, maxHeight }}>
                    {children}
                </Box>
            </Container>
        </Box>
    )
}

export default SectionContainer;