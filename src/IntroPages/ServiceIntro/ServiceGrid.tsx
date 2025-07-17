import { Grid, Typography, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
    { title: 'MANAGEMENT AND SUPERVISION' },
    { title: 'STRUCTURAL ENGINEERING' },
    { title: 'TRANSPORT AND HIGHWAY ENGINEERING' },
    { title: 'WATER SUPPLY ENGINEERING' },
    { title: 'PROJECT SCHEDULING' },
    { title: 'QUALITY ASSURANCE' },
];

const ServiceCard = ({ title }: { title: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

    return (
        <Grid size={{xs: 12, sm: 1, md: 1}}>
            <Box
                ref={ref}
                sx={{
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #fff',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            px: 2,
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                        }}
                    >
                        {title}
                    </Typography>
                </motion.div>
            </Box>
        </Grid>
    );
};

const ProjectGrid = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} columns={3}>
                {services.map((service, idx) => (
                    <ServiceCard key={idx} title={service.title} />
                ))}
            </Grid>
        </Box>
    );
};

export default ProjectGrid;
