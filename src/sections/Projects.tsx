import React from "react";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import { Box, ImageList, Tab, Tabs, useTheme } from "@mui/material";
import { ProjectData } from '../config/projects_data';
import ProjectCard from "../components/ProjectCard";


const Projects = () => {
    const theme = useTheme();
    const textColor = theme.palette.primary.contrastText;
    const [tab, setTab] = React.useState<number>(0);


    return (
        <SectionContainer sectionHeader={<SectionHeader headerTitle="Projects" />} height='80vh' maxHeight='740px'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tab} onChange={(_, newTab) => setTab(newTab)} TabIndicatorProps={{ style: { backgroundColor: textColor }}}>
                    <Tab value={0} label="Web Development" sx={{ color: textColor + ' !important' }} />
                    <Tab value={1} label="Game Development" sx={{ color: textColor + ' !important' }} />
                    {/* <Tab value={2} label="Other" sx={{ color: textColor + ' !important' }} /> */}
                </Tabs>
            </Box>
            {Object.values(ProjectData).map((projects, i) => {
                return (
                    <div role="tabpanel" hidden={tab !== i}>
                        <ImageList  cols={3} gap={64}>
                            {projects.map(project_data => <ProjectCard {...project_data} />)}
                        </ImageList>
                    </div>
                )
            })}
        </SectionContainer>
    )
}

export default Projects;