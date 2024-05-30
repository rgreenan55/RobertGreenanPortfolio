import React from "react";
import { Link, LinkOff } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Divider, Tooltip, Typography } from "@mui/material";

type Props = {
    companyName : string,
    jobTitle : string,
    workPeriod : string,
    description : string,
    companyLink? : string,
}

const WorkCard = ({ companyName, jobTitle, workPeriod, description, companyLink } : Props) => {
    const companyNameRef = React.useRef<HTMLSpanElement>(null);
    const [isOverflowed, setIsOverflowed] = React.useState(false);

    const checkTextSize = () => {
        if (companyNameRef.current) {
            setIsOverflowed(companyNameRef.current.scrollWidth > companyNameRef.current.clientWidth);
        }
    }

    React.useEffect(() => {
        checkTextSize();
        window.addEventListener('resize', checkTextSize);
        return () => window.removeEventListener('resize', checkTextSize);
    }, []);

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', p: '8px', width: '100%' }}>
            <CardContent>
                <Tooltip title={companyName} placement='top' arrow disableHoverListener={!isOverflowed}>
                    <Typography variant='h5' fontWeight='bold' noWrap ref={companyNameRef}> {companyName} </Typography>
                </Tooltip>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='subtitle1'> {jobTitle} </Typography>
                    <Typography variant='subtitle1'> {workPeriod} </Typography>
                </Box>
                <Divider sx={{ borderColor: 'black' }} />
            </CardContent>
            <CardContent sx={{ pt: 0, flexGrow: 1, overflowY: 'auto' }}>
                <Typography whiteSpace='preserve-breaks' fontSize='16px' align='justify'>
                    {description.trim()}
                </Typography>
            </CardContent>
            <CardContent>
                <Button
                    variant='outlined'
                    sx={{ width: '100%', p: '16px', textTransform: 'capitalize' }}
                    color={companyLink ? "secondary" : "error"}
                    startIcon={companyLink ? <Link /> : <LinkOff />}
                    onClick={companyLink ? () =>  window.open(companyLink, '_blank') : () => null}
                >
                    {companyLink ? "Company Webpage" : "No Link" }
                </Button>
            </CardContent>
        </Card>

    )
}

export default WorkCard;