import React, { useRef } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { motion, Transition, useScroll, useSpring, useTransform, Variants } from 'framer-motion';
import MotionLine from '../../components/MotionLine';

interface Props {
    onNavChange: (item: string) => void;
}

const textVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: (custom as number) * 0.4,
            duration: 0.6,
            ease: [0.25, 0.8, 0.25, 1],
        } as Transition,
    }),
};

const containerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function MissionVision(props: Props) {
    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
        props.onNavChange('About Us');
    };

    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"], // from fully visible to fully gone
    });

    const scale = useTransform(scrollYProgress, [0.2, 0.5], [1, 1.2]);
    const smoothScale = useSpring(scale, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <Grid container m={0}>
            {/* Left (Image with overlay text) */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ position: "relative", overflow: "hidden", color: "white" }}
                ref={imageRef}
            >
                <motion.div
                    style={{
                        width: "100%",
                        height: "100%",
                        scale: smoothScale,
                    }}
                >
                    <img
                        src="https://static.wixstatic.com/media/84770f_b0f8a4cbc4934dd98fbc047c3ec83d8d~mv2.jpg/v1/fill/w_3456,h_1320,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_b0f8a4cbc4934dd98fbc047c3ec83d8d~mv2.jpg"
                        alt="Tech visual"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </motion.div>

                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.4)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h5" fontWeight={600}>
                        Unprecedented Velocity.
                    </Typography>
                    <Typography variant="h5" fontWeight={600}>
                        Impeccable Reliability.
                    </Typography>
                </Box>
            </Grid>

            {/* Right (Animated Text) */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    background: 'black',
                }}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
                    variants={containerVariant}
                    style={{ maxWidth: 480 }}
                >
                    <motion.h3
                        custom={0}
                        variants={textVariant}
                        style={{ color: 'white' }}
                    >
                        At Optimax Advisory, we bring 25+ years of engineering and manufacturing expertise to help businesses streamline operations, optimize sourcing, and scale with data-driven precision.
                    </motion.h3>

                    <motion.div custom={0.5} variants={textVariant}>
                        <MotionLine color='white' />
                    </motion.div>

                    {[
                        {
                            title: "Our Mission",
                            text: "To help manufacturers, suppliers, and OEMs optimize resources and scale profitably through expert-led execution and data-driven strategies.",
                        },
                        {
                            title: "Our Vision",
                            text: "To be the go-to partner for manufacturers by connecting supply, strategy, and innovation for scalable, future-ready growth.",
                        },
                        {
                            title: "Our Core Values",
                            text: "Empowerment. Execution. Innovation. Collaboration. Value.",
                        },
                        {
                            title: "",
                            text: "From insight to execution — delivering measurable results where it matters most.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index + 1} // ensures delay increases
                            variants={textVariant}
                        >
                            {item.title && (
                                <Typography
                                    color="#AF6118"
                                    variant="h6"
                                    fontWeight={700}
                                    gutterBottom
                                >
                                    {item.title}
                                </Typography>
                            )}
                            <Typography variant="body1" color="grey.400" paragraph>
                                {item.text}
                            </Typography>
                        </motion.div>
                    ))}

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <motion.div custom={5} variants={textVariant}>
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
                                Learn More
                            </Button>
                        </motion.div>
                    </Box>
                </motion.div>
            </Grid>
        </Grid>
    );
}
