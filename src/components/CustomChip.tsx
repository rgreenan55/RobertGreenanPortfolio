import { Chip } from "@mui/material"

type Props = {
    label? : string,
}



const CustomChip = ({ label } : Props) => {
    return (
        <Chip
            variant="outlined"
            color="secondary"
            size='small'
            label={label || "label!"}
            sx={{ "&:hover": { filter: "brightness(150%)" } }}
        />
    )
}

export default CustomChip;