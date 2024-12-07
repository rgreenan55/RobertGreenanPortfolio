import React from 'react';
import CustomChip from "./CustomChip";
import { Box, Button, Card, CardActions, CardHeader, CardMedia, IconButton, MobileStepper, useTheme } from "@mui/material"
import { GitHub, KeyboardArrowLeft, KeyboardArrowRight, OpenInNew, OpenInNewOff } from '@mui/icons-material';

type ProjectCardProps = {
    title : string,
    date : string,
    imageDir : string
    images : string[],
    chips : string[],
    github : string,
    link : string
}


const ProjectCard = ({ title, date, imageDir, images = [], chips = [], github, link } : ProjectCardProps) => {
    const theme = useTheme();
    const [imageIndex, setImageIndex] = React.useState<number>(0);

    return (
        <Card>
            {/* Title Section */}
            <CardHeader
                title={title}
                titleTypographyProps={{ align: 'center', variant: 'h5' }}
                subheader={date}
                subheaderTypographyProps={{ align: 'center', variant: 'body1' }}
                sx={{ paddingX: 0, paddingY: 1.5 }}
            />

            {/* Image Display + Stepper */}
            <CardMedia
                height='200'
                component="img"
                image={"src/assets/projects/" + imageDir + "/" + images[imageIndex]}
                alt="Paella dish"
                sx={{ objectFit: 'fill' }}
            />
            <MobileStepper
                variant="dots"
                activeStep={imageIndex}
                steps={images.length}
                position="static"
                backButton={<Button onClick={() => setImageIndex(imageIndex-1)} disabled={imageIndex === 0}> <KeyboardArrowLeft fontSize='large' sx={{ color: 'dimgrey' }} /> </Button>}
                nextButton={<Button onClick={() => setImageIndex(imageIndex+1)} disabled={imageIndex === images.length-1}> <KeyboardArrowRight fontSize='large' sx={{ color: 'dimgrey' }} /> </Button>}
                sx={{
                    padding: 0,
                    borderWidth: '1px 0px 1px 0px',
                    backgroundColor: theme.palette.background.paper,
                    "& .MuiMobileStepper-dot": { flexGrow: 1, backgroundColor: 'dimgrey' },
                    "& .MuiMobileStepper-dotActive": { backgroundColor: theme.palette.secondary.main },
                  }}
            />

            {/* Icon Section */}
            <CardActions>
                {chips.map(chip => <CustomChip label={chip} />)}
                <Box display='flex' flexGrow={1} justifyContent='flex-end'>
                    {github ? <IconButton onClick={() => window.open(github, '_blank')}> <GitHub /> </IconButton> : null}
                    <IconButton onClick={() => window.open(link, '_blank')}> {link ? <OpenInNew /> : <OpenInNewOff />} </IconButton>
                </Box>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;