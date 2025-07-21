import { Button, Box } from '@mui/material';
import SectionIntro from '../../components/SectionIntro';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Color } from '../../colors';
import MotionLine from '../../components/MotionLine';
import WhatWeCanDo from './WhatWeCanDo';

interface Props {
    onNavChange: (item: string) => void;
}

function ServicesIntro(props: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
        props.onNavChange('Services')
    };

    return (
        <>
            <SectionIntro
                title="WHAT WE CAN DO FOR YOU"
                descriptionLines={[
                    "Providing engineering",
                    "consulting solutions"
                ]}
                bgcolor={Color.orange}
            >
                <MotionLine color='white' />
                <WhatWeCanDo />
                <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 6 } }}>
                    <Box mt={5} textAlign="center" ref={ref}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
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

export default ServicesIntro;
