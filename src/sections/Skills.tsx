import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import { skill_data } from "../config/skill_data";
import HoverAudio from '../assets/audio/pop.mp3';
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <SectionContainer backgroundShape sectionHeader={<SectionHeader headerTitle='Skills & Tools' />}>
            <Stack spacing="2vw" sx={{ height: 'auto', maxHeight: '100%' }}>
                <Paper sx={{ p: '16px' }}>
                    <Stack spacing={2}>
                        {skill_data.map(data => (
                            <Box key={data.title}>
                                <Typography variant='h6' sx={{ mx: '8px' }}> {data.title} </Typography>
                                <Box>
                                    {data.skills.map(skill => {
                                        const HoverPlayer = new Audio(HoverAudio);
                                        HoverPlayer.volume = 0.25;

                                        return (
                                            <Button
                                                key={skill}
                                                component={motion.div}
                                                whileHover={{
                                                    scale: 1.2
                                                }}
                                                size='large'
                                                variant='contained'
                                                color='secondary'
                                                disableRipple
                                                onMouseEnter={() => HoverPlayer.play()}
                                                sx={{ m: '8px', textTransform: 'none' }}
                                            >
                                                {skill}
                                            </Button>
                                        )
                                    })}
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Paper>

            </Stack>
        </SectionContainer>
    )
}

export default Skills;