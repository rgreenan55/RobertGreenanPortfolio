import { Chip } from "@mui/material"

type Props = {
    label : string,
}



const CustomChip = ({ label } : Props) => {
    return (
        <Chip
            variant='outlined'
            color="secondary"
            label={label}
            sx={{
                fontSize: '16px',
                cursor: 'default',
                paddingX: '4px',
                paddingY: '20px',
                marginRight: '8px',
                marginTop: '8px',
                borderRadius: 1.5,
                transition: 'transform 0.25s',
                "&:hover": { transform: 'scale(1.1)' },
            }}
        />
    )
}

export default CustomChip;