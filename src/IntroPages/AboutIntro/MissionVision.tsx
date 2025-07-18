import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";

interface Props {
    onNavChange: (item: string) => void;
}

const MotionBox = motion(Box);

const MissionVision = (props: Props) => {

    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
        props.onNavChange('About Us')
    };

    const missionRef = useRef(null);
    const visionRef = useRef(null);
    const valuesRef = useRef(null);
    const buttonRef = useRef(null);

    const isMissionInView = useInView(missionRef, { once: true });
    const isVisionInView = useInView(visionRef, { once: true });
    const isValuesInView = useInView(valuesRef, { once: true });
    const isButtonInView = useInView(buttonRef, { once: true });

    return (
        <Box
            sx={{
                py: 10,
                px: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                bgcolor: "#fff",
            }}
        >
            {/* Mission */}
            <MotionBox
                ref={missionRef}
                initial={{ x: -100, opacity: 0 }}
                animate={isMissionInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                sx={{
                    maxWidth: 600,
                    p: 4,
                    border: "1px solid #e0e0e0",
                    textAlign: "center",
                    boxShadow: 3,
                }}
                style={{
                    borderLeft: '5px solid #AF6118',
                }}
            >
                <Typography variant="h5" fontWeight={700} color="#AF6118">
                    Our Mission
                </Typography>
                <Typography mt={2}>
                    To help manufacturers, suppliers, and OEMs optimize resources and scale profitably through expert-led execution and data-driven strategies.
                </Typography>
            </MotionBox>

            {/* Vision */}
            <MotionBox
                ref={visionRef}
                initial={{ x: 100, opacity: 0 }}
                animate={isVisionInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                sx={{
                    maxWidth: 600,
                    p: 4,
                    border: "1px solid #e0e0e0",
                    textAlign: "center",
                    boxShadow: 3,
                }}
                style={{
                    borderLeft: '5px solid #AF6118',
                }}
            >
                <Typography variant="h5" fontWeight={700} color="#AF6118">
                    Our Vision
                </Typography>
                <Typography mt={2}>
                    To be the go-to partner for manufacturers by connecting supply, strategy, and innovation for scalable, future-ready growth.
                </Typography>
            </MotionBox>

            {/* Our Core Values */}
            <MotionBox
                ref={valuesRef}
                initial={{ x: -100, opacity: 0 }}
                animate={isValuesInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                sx={{
                    maxWidth: 600,
                    p: 4,
                    border: "1px solid #e0e0e0",
                    textAlign: "center",
                    boxShadow: 3,
                }}
                style={{
                    borderLeft: '5px solid #AF6118',
                }}
            >
                <Typography variant="h5" fontWeight={700} color="#AF6118">
                    Our Core Values
                </Typography>
                <Typography mt={2}>
                    <b>Empowerment. Execution. Innovation. Collaboration. Value.</b> <br />
                    From insight to execution — delivering measurable results where it matters most.
                </Typography>
            </MotionBox>

            {/* Button */}
            <motion.div
                ref={buttonRef}
                initial={{ opacity: 0 }}
                animate={isButtonInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: "#AF6118",
                        color: "#AF6118",
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        "&:hover": {
                            bgcolor: "#AF6118",
                            color: "#fff",
                            borderColor: "#AF6118",
                        },
                    }}
                    onClick={handleButtonClick}
                >
                    Learn More
                </Button>
            </motion.div>
        </Box>
    );
};

export default MissionVision;
