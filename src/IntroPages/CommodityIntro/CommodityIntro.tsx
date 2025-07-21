import { Box, Button } from "@mui/material";
import { motion, Transition, Variants } from "framer-motion";
import MotionLine from "../../components/MotionLine";
import SectionIntro from "../../components/SectionIntro";
import CommoditiesGrid from "./CommoditiesGrid";


interface Props {
    onNavChange: (item: string) => void;
}

function CommodityIntro(props: Props) {

    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
        props.onNavChange('Commodity')
    };

    const textVariant: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (custom as number) * 0.3,
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1], // Use cubic bezier instead of string 'easeOut'
            } as Transition,
        }),
    };

    return (
        <>
            <SectionIntro
                title="COMMODITIES"
                descriptionLines={[
                    "From Concept",
                    "to Component"
                ]}
            >
                <MotionLine />
                <CommoditiesGrid />
                <Box py={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div custom={5} variants={textVariant}>
                        <Button
                            variant="outlined"
                            sx={{
                                mt: 2,
                                color: 'black',
                                borderColor: '#AF6118',
                                "&:hover": {
                                    bgcolor: "#AF6118",
                                    borderColor: 'white',
                                    color: 'white'
                                },
                                px: 4,
                                py: 1.5,
                                textTransform: "none",
                                fontWeight: 600,
                            }}
                            onClick={handleButtonClick}
                        >
                            Learn More
                        </Button>
                    </motion.div>
                </Box>
            </SectionIntro>
        </>
    );
}

export default CommodityIntro;
