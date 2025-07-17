import { Button, Box } from '@mui/material';
import SectionIntro from '../../components/SectionIntro';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectGrid from './ServiceGrid';

function ServicesIntro() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

    return (
        <>
            <SectionIntro
                title="WHAT WE CAN DO FOR YOU"
                descriptionLines={[
                    "Providing engineering",
                    "consulting solutions"
                ]}
                bgcolor="#AF6118"
            >
                <ProjectGrid />
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

export default ServicesIntro;
