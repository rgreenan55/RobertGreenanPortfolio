import { Box, Typography } from "@mui/material"

type Props = {
    headerTitle : string,
    children ?: React.ReactNode
}

const SectionHeader = ({ headerTitle, children } : Props) => {
    return (
        <Box display='flex' sx={{ mb: '16px', justifyContent: 'space-between' }}>
            <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
                {headerTitle}
            </Typography>
            <Box>
                {children}
            </Box>

        </Box>
    )
}

export default SectionHeader;