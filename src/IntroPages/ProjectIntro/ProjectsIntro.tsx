import { Box, Button } from '@mui/material';
import MotionLine from '../../components/MotionLine';
import RoadmapFlow from './RoadmapFlow';
import SectionIntro from '../../components/SectionIntro';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
    onNavChange: (item: string) => void;
}

function ProjectsIntro(props: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
        props.onNavChange('Projects')
    };

    return (
        <>
            <SectionIntro
                title="FEATURED PROJECTS"
                descriptionLines={[
                    "Every project has its",
                    "unique DNA"
                ]}
                bgcolor="black"
            >
                <MotionLine color='white' />
                <style>
                    {`.react-flow__attribution { display: none !important; }`}
                </style>
                <RoadmapFlow />
                <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 6 } }}>
                    <Box mt={5} textAlign="center" ref={ref}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    px: 4,
                                    py: 1.5,
                                    fontWeight: 500,
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderColor: 'white',
                                    },
                                }}
                                onClick={handleButtonClick}
                            >
                                Read More
                            </Button>
                        </motion.div>
                    </Box>
                </Box>
            </SectionIntro>
        </>
    );
}

export default ProjectsIntro;
