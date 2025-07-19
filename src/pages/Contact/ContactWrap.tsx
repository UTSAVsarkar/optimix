import { Box } from '@mui/material';
import MotionLine from '../../components/MotionLine';
import Contact from './Contact';

function ContactWrap() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "black",
                    p: "1rem",
                }}
            >
                <Box sx={{ mt: 8 }}>
                    <MotionLine color="white" />
                </Box>
            <Contact />

            </Box>
        </>
    );
}

export default ContactWrap;
