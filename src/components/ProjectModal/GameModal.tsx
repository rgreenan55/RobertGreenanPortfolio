import { Box, Typography, useTheme } from "@mui/material";

type Props = { gameDetails : any }

const GameModal = ({ gameDetails } : Props) => {
    const theme = useTheme();

    const createLink = (defaultUrl : string) => {
        return defaultUrl + '?&bg_color=' + theme.palette.background.paper.replace('#', '') + '&fg_color=' + theme.palette.primary.contrastText.replace('#', '') + '&border_color=' + theme.palette.primary.contrastText.replace('#', '')
    }

    return (
        <Box>
            <Typography> {gameDetails.gameName} </Typography>
            <Typography> {gameDetails.details.description} </Typography>
            <iframe
                frameBorder={0}
                src={createLink(gameDetails.details.itchLink)}
                width="100%"
                height="165"
            >
                <a href="https://boebi-g.itch.io/pong"> Pong by Boebi_G </a>
            </iframe>
        </Box>
    )
}

export default GameModal;