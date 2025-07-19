import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AnimatedLine } from "../../components/AnimatedLine";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MotionLine from "../../components/MotionLine";

interface project {
    title: string;
    goal: string;
    actions: string[];
    outcome: string[];
}

export const ProjectBox = (props: project) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Box
            ref={ref}
            sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                position: "relative",
                backgroundColor: "#1a1a1d",
                borderRadius: "16px",
                padding: { xs: 3, md: 5 },
                boxShadow: "0 0 20px rgba(255,165,0,0.1)",
                overflow: "hidden",
                mb: 4,
            }}
        >
            {/* Title (always on top in mobile) */}
            <Box
                sx={{
                    flex: isMobile ? "none" : 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: isMobile ? "flex-start" : "center",
                    textAlign: isMobile ? "left" : "center",
                    pr: isMobile ? 0 : 6,
                    mb: isMobile ? 2 : 0,
                    minHeight: "100%", // ensures full vertical area is considered
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="white"
                    sx={{ wordWrap: "break-word" }}
                >
                    {props.title}
                </Typography>
            </Box>


            {/* Separator */}
            {isMobile ? (
                <MotionLine color="#AF6118" />
            ) : (
                <AnimatedLine isInView={isInView} />
            )}

            {/* Content */}
            <Box
                sx={{
                    zIndex: 2,
                    flex: 1,
                    color: "white",
                    pl: isMobile ? 0 : 6,
                }}
            >
                <Typography variant="subtitle1" fontWeight="bold" color="#AF6118" gutterBottom>
                    Goal:
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {props.goal}
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold" color="#AF6118" gutterBottom>
                    What We Did:
                </Typography>
                <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                    {props.actions.map((item, i) => (
                        <li key={i}>
                            <Typography variant="body2">{item}</Typography>
                        </li>
                    ))}
                </ul>

                <Typography variant="subtitle1" fontWeight="bold" color="#AF6118" gutterBottom>
                    Outcome:
                </Typography>
                <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                    {props.outcome.map((item, i) => (
                        <li key={i}>
                            <Typography variant="body2">{item}</Typography>
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};
