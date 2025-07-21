import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { Factory, LocalShipping, BarChart, Psychology } from "@mui/icons-material";
import { motion } from "framer-motion";

const services = [
    {
        title: "Engineering & Manufacturing Operations",
        icon: <Factory style={{ fontSize: 60 }} />,
        description: "Design efficient layouts, optimize manufacturing, and streamline operations.",
    },
    {
        title: "Procurement & Sourcing Expertise",
        icon: <LocalShipping style={{ fontSize: 60 }} />,
        description: "Leverage data to uncover insights, improve KPIs, and scale performance.",
    },
    {
        title: "Supply Chain & Quality Systems",
        icon: <BarChart style={{ fontSize: 60 }} />,
        description: "Digitize processes, automate workflows, and drive business innovation.",
    },
    {
        title: "Digital Transformation & Analytics",
        icon: <Psychology style={{ fontSize: 60 }} />,
        description: "Implement lean systems, quality frameworks, and factory automation strategies.",
    },
];

export default function WhatWeCanDo() {
    return (
        <Box sx={{ py: 8, px: { xs: 2, md: 10 }, paddingBottom: 0 }}>
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card sx={{ minHeight: 180, borderRadius: 3, p: 2 }}>
                                <CardContent>
                                    <Box
                                        sx={{
                                            color: 'black',
                                            mb: 2,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h6" gutterBottom sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
