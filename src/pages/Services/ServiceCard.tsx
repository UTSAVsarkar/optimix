import { Grid, Box, Typography } from "@mui/material";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { services } from "./ServicesConfig";

const Item = styled(Paper)(({ theme }) => ({
    background: 'black',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),

    '&:hover': {
        border: '2px solidrgba(55, 255, 20, 0.46)', // Neon green
        boxShadow: '0 0 10px #AF6118',
    },
}));

export const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <Item>
                    <Box
                        sx={{
                            border: '1px solid #333',
                            p: 4,
                            backgroundColor: '#111',
                            height: '100%',
                            transition: 'transform 0.3s ease, backgroundColor 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                            },
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#AF6118',
                                fontWeight: 'bold',
                                fontSize: '1.8rem',
                            }}
                        >
                            {service.number}.
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                mt: 2,
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                textTransform: 'uppercase',
                                color: 'white'
                            }}
                        >
                            {service.title}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                mt: 2,
                                color: '#ccc',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                            }}
                        >
                            {service.para}
                        </Typography>
                    </Box>
                </Item>
            </motion.div>
        </Grid>
    );
};