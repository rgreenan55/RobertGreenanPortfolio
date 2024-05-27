import { Link } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";


const WorkCard = () => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', p: '16px 16px 0 16px' }}>
            <CardContent>
                <Typography variant='h5' fontWeight='bold'> Job Location </Typography>
                <Typography variant='subtitle1'> Job Title </Typography>
            </CardContent>
            <CardContent sx={{ pt: 0, flexGrow: 1, overflowY: 'auto' }}>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                </Typography>
            </CardContent>
            <CardContent>
                <Button variant='outlined' color="secondary" startIcon={<Link />} sx={{ width: '100%', p: '16px' }}>
                    Check out the Company
                </Button>
            </CardContent>
        </Card>

    )
}

export default WorkCard;