import React from 'react';
import CustomChip from "./CustomChip";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material"
import { BrowserNotSupported, GitHub, OpenInBrowser } from '@mui/icons-material';

type ProjectCardProps = {
    title : string,
    date : string,
    icon ?: React.ReactNode,
    description : string
    chips : string[],
    link ?: string,
    github : string,
}


const ProjectCard = ({ title, date, icon, description, chips = [], link, github } : ProjectCardProps) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', p: '8px', width: '100%', height: '30vw' }}>
            <CardHeader
                avatar={icon || null}
                title={title}
                subheader={date}
                titleTypographyProps={{ variant: 'h5' }}
                subheaderTypographyProps={{ variant: 'body1' }}
                sx={{ paddingX: 1.5, paddingY: 1.5 }}
            />
            <Divider />
            <CardContent sx={{ paddingX : 4, paddingY: 4, height: '100%' }}>
                <Stack justifyContent='space-between' sx={{ height: '100%'}}>
                    <Typography fontSize="large">
                        {description}
                    </Typography>
                    <Box>
                        {chips.map(chip_text => <CustomChip label={chip_text} />)}
                    </Box>
                </Stack>
            </CardContent>
            <Divider />
            <CardActions disableSpacing sx={{ padding: 0}}>
                <Stack direction={{ xs: 'column', xl: 'row' }} sx={{ width: '100%' }}>
                    <Button
                        onClick={() => link ? window.open(link, '_blank') : null}
                        variant='text' color='secondary' sx={{ width: '100%', height: '100%', paddingY: '16px' }}
                    >
                        {link ? <OpenInBrowser fontSize='small' sx={{ marginRight: '8px', marginBottom: '3px' }} /> : <BrowserNotSupported  fontSize='small' sx={{ marginRight: '8px', marginBottom: '3px' }} />}
                        {link ? "Preview" : "No Preview"}
                    </Button>
                    <Button
                        onClick={() => github ? window.open(github, '_blank') : null}
                        variant='text' color='secondary' sx={{ width: '100%', height: '100%', paddingY: '16px' }}
                    >
                        <GitHub fontSize='small' sx={{ marginRight: '8px', marginBottom: '3px' }} /> Github
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;