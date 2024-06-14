import { Box, Typography } from "@mui/material";

type Props = {
    appDetails ?: any
}

const WebModal = ({ appDetails } : Props) => {
    return (
        <Box>
            <Typography> {appDetails.title} </Typography>
            <Typography> {appDetails.details.description} </Typography>
        </Box>
    )
}

export default WebModal;