import { Button, Stack } from "@mui/material"
import { FileOpen } from "@mui/icons-material";

import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import WorkCard from "../components/WorkCard";

import { work_data } from "../config/work_data";
import ResumePDF from '../assets/documents/Robert_Greenan_Resume.pdf';
const ResumeURL = new URL(ResumePDF, import.meta.url).href

const WorkSectionHeader = () => {
    return (
        <SectionHeader headerTitle='Work Experience'>
            <Button variant='contained' size='large' startIcon={<FileOpen />} sx={{ boxShadow: 3 }} onClick={() => window.open(ResumeURL, '_blank')}>
                View Full Resume
            </Button>
        </SectionHeader>
    )
}

const Work = () => {
    return (
        <SectionContainer backgroundShape sectionHeader={<WorkSectionHeader />}>
            <Stack spacing="2vw" direction={{ xs: 'column', xl: 'row' }} sx={{ height: 'auto', maxHeight: '100%' }}>
                {work_data.map(work => (
                    <WorkCard key={work.companyName} {...work} />
                ))}
            </Stack>
        </SectionContainer>
    )
}

export default Work;