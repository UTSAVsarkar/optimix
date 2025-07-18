import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    timelineOppositeContentClasses,
    TimelineOppositeContent,
} from "@mui/lab";
import MotionLine from "../../components/MotionLine";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { motion } from "framer-motion";
import Contact from "../Contact";
import { services } from "./ServicesConfig";
import ServiceImageComponent from "./ServiceImageComponent";
import { ServiceCard } from "./ServiceCard";

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
                >
                    <Typography variant="h4">At Optimax Advisory</Typography>
                    <h1 className="responsive-heading">
                        We help manufacturing <br />
                        businesses unlock <br />
                        performance across every <br />
                        stage of operations
                    </h1>
                    <SouthEastIcon className="responsive-icon" />
                </motion.div>

                {/* Services timeline */}
                <Timeline
                    position={'alternate'}
                >
                    {services.map((service) => (
                        isMobile ? (
                            <Timeline
                                sx={{
                                    [`& .${timelineOppositeContentClasses.root}`]: {
                                        flex: 0.1,
                                    },
                                }}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary" />
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <ServiceCard service={service} />
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
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

            {/* Side image only on desktop */}
            {!isMobile && <ServiceImageComponent />}

            <Contact />
        </>
    );
}
