import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import MotionLine from '../../components/MotionLine';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { motion } from 'framer-motion';
import Contact from '../Contact';
import { ServiceCard } from './ServiceCard';
import { services } from './ServicesConfig';
import ServiceImageComponent from './ServiceImageComponent';

export default function Services() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    minHeight: '100vh',
                    padding: '2rem',
                }}
            >
                <div
                    style={{
                        marginTop: 70,
                    }}
                >
                    <MotionLine color='white' />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                >
                    <Typography variant="h4">OUR SERVICES</Typography>
                    <h1 className="responsive-heading">
                        Our diverse areas of <br />
                        expertise are designed to <br />
                        fit the changing needs of <br />
                        your project
                    </h1>
                    <SouthEastIcon className="responsive-icon" />

                    <style>
                        {`
    .responsive-heading {
        font-size: 70px;
        line-height: 1.4em;
    }

    .responsive-icon {
        font-size: 10rem;
        stroke: #ccc;
        stroke-width: 0.5;
        fill: none;
    }

    @media (max-width: 768px) {
        .responsive-heading {
            font-size: 40px;
        }
        .responsive-icon {
            font-size: 5rem;
        }
    }

    @media (max-width: 480px) {
        .responsive-heading {
            font-size: 28px;
        }
        .responsive-icon {
            font-size: 3rem;
        }
    }
`}
                    </style>

                </motion.div>
                <Box
                    sx={{
                        backgroundColor: 'black',
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            {services.map((service) => (
                                <ServiceCard key={service.number} service={service} />
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
            {!isMobile && <ServiceImageComponent />}
            <Contact />
        </>
    );
}