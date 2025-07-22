import { Box, Typography, useMediaQuery } from '@mui/material';
import MotionLine from '../../components/MotionLine';
import Contact from '../Contact/Contact';
import { motion } from 'framer-motion';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import CommodityFlow from './CommodityFlow';
import CommodityFlowMobile from './CommodityFlowMobile';

function Commodity() {
    const isMobile = useMediaQuery('(max-width:768px)');

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
                        We take pride <br />
                        in delivering measurable <br />
                        impact across engineering, <br />
                        sourcing and operations
                    </h1>
                    <KeyboardDoubleArrowDown className="responsive-icon" />
                </motion.div>
                <style>
                    {`.react-flow__attribution { display: none !important; }`}
                </style>
                {isMobile ? <CommodityFlowMobile /> : <CommodityFlow />}
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
            <Contact />
        </>
    );
}

export default Commodity;
