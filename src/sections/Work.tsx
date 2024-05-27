import { Stack } from "@mui/material"
import SectionContainer from "../components/SectionContainer";
import WorkCard from "../components/WorkCard";

const Work = () => {
    return (
        <SectionContainer headerTitle='Work Experience' height={{ xs: '180vh', lg: '60vh' }}>
            <Stack spacing="2vw" direction={{ xs: 'column', lg: 'row' }} sx={{ height: '100%' }}>
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </Stack>
        </SectionContainer>
    )
}

export default Work;