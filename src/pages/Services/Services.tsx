import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    Grid,
} from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from "@mui/lab";
import MotionLine from "../../components/MotionLine";
import { motion } from "framer-motion";
import Contact from "../Contact/Contact";
import { services } from "./ServicesConfig";
import { ServiceCard } from "./ServiceCard";
import ParallaxImage from "../../components/ParallaxImage";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

export default function Services() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Box
                sx={{
                    backgroundColor: "black",
                    color: "white",
                    minHeight: "100vh",
                    p: "2rem",
                }}
            >
                <Box sx={{ mt: 8 }}>
                    <MotionLine color="white" />
                </Box>

                {/* Intro copy */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    style={{ marginTop: '2rem' }}
                >
                    <Typography variant="h4">At Optimax Advisory</Typography>
                    <h1 className="responsive-heading">
                        We help manufacturing <br />
                        businesses unlock <br />
                        performance across every <br />
                        stage of operations
                    </h1>
                    <KeyboardDoubleArrowDown className="responsive-icon" />
                </motion.div>

                {/* Services timeline */}
                <Timeline
                    position={'alternate'}
                >
                    {services.map((service) => (
                        isMobile ? (
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={0} columns={3}>
                                    <ServiceCard service={service} />
                                </Grid>
                            </Box>
                        ) :
                            (<TimelineItem>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot style={{ background: '#AF6118' }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ServiceCard service={service} />
                                </TimelineContent>
                            </TimelineItem>)
                    ))}
                </Timeline>

                {/* Responsive heading / icon styles */}
                <style>
                    {`
            .responsive-heading { font-size: 70px; line-height: 1.4em; }
            .responsive-icon   { font-size: 10rem; stroke: #ccc; stroke-width: 0.5; fill: none; }

            @media (max-width: 768px) {
              .responsive-heading { font-size: 40px; }
              .responsive-icon    { font-size: 5rem; }
            }
            @media (max-width: 480px) {
              .responsive-heading { font-size: 28px; }
              .responsive-icon    { font-size: 3rem; }
            }
          `}
                </style>
            </Box>

             <ParallaxImage
                image="https://static.wixstatic.com/media/84770f_b0f8a4cbc4934dd98fbc047c3ec83d8d~mv2.jpg/v1/fill/w_3456,h_1320,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_b0f8a4cbc4934dd98fbc047c3ec83d8d~mv2.jpg"
                text="You can dream, create, design, and build the most wonderful place in the world. But it requires people to make the dream a reality."
                author="WALT DISNEY"
            />
            <Contact />
        </>
    );
}
