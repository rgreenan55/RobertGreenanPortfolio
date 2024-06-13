import React from 'react';
import { Box, Paper, Tab, useTheme } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import ProjectsTable from "../components/ProjectsTable";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import { project_tabs } from '../config/projects_data';

const Projects = () => {
    const theme = useTheme();
    const textColor = theme.palette.primary.contrastText;
    const [tab, setTab] = React.useState('1');

    return (
        <SectionContainer sectionHeader={<SectionHeader headerTitle="Projects" />} height='80vh' maxHeight='740px'>
            <Paper sx={{ p: '16px', height: '100%' }}>
                <TabContext value={tab}>
                    
                    <Box sx={{ borderBottom: 1, borderColor: textColor, height: '48px' }}>
                        <TabList onChange={(_, newTab) => setTab(newTab)} TabIndicatorProps={{ style: { backgroundColor: textColor }}}>
                            {project_tabs.map((tab,i) => (<Tab label={tab.title} value={`${i+1}`} sx={{ color: textColor + ' !important' }} />))}
                        </TabList>
                    </Box>

                    {project_tabs.map((tab,i) => (<ProjectsTable value={`${i+1}`} rows={tab.rows} />))}
                </TabContext>
            </Paper>
        </SectionContainer>
    )
}

export default Projects;