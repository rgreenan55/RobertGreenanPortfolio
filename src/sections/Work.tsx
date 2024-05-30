import { Stack } from "@mui/material"
import SectionContainer from "../components/SectionContainer";
import WorkCard from "../components/WorkCard";
import { work_data } from "../config/work_data";

const Work = () => {
    return (
        <SectionContainer headerTitle='Work Experience' backgroundShape height={{ xs: '180vh', xl: '60vh' }}>
            <Stack spacing="2vw" direction={{ xs: 'column', xl: 'row' }} sx={{ height: 'auto', maxHeight: '100%' }}>
                {work_data.map(work => (
                    <WorkCard key={work.companyName} {...work} />
                ))}
            </Stack>
        </SectionContainer>
    )
}

export default Work;