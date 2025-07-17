import { Box, Typography } from '@mui/material';
import MotionLine from '../components/MotionLine';

function AboutUs() {
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
                    <MotionLine color='white'/>
                </div>
                <Typography variant="h4">About Us</Typography>
            </Box>
        </>
    );
}

export default AboutUs;
