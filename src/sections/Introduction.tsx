import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import image from '../assets/images/profile_photo.jpg';

const Introduction = () => {
    return (
        <Card elevation={10} sx={{ display: 'flex', justifyContent: 'space-between', minWidth: '100%', height: '80vh', maxHeight: '740px' }}>

            <CardContent sx={{ alignContent: 'center', p: '32px', width: '50%'}}>
                <Typography variant='h4' fontWeight='bold'> Hey, I'm Robert. </Typography>
                <Typography fontSize='18px'>
                    I am a Software Engineer originally from Prince Edward Island, Canada.
                    I have a passion for learning and a deep desire to take on new challenges with the goal of obtaining new skills and knowledge along the way.
                    <br/><br/>                            
                </Typography>
            </CardContent>

            <CardMedia image={image} sx={{ width: '40%', height: '100%' }} />
            
        </Card>
    )
}

export default Introduction;