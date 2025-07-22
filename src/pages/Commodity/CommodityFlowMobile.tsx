import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
} from '@mui/material';
import {
    Factory,
    Construction,
    Build,
    PrecisionManufacturing,
    Science,
    Extension,
    ElectricBolt,
    Plumbing,
    Settings,
    Close as CloseIcon,
} from '@mui/icons-material';

const nodeData = [
    { label: 'Small Fabrication', sub: 'Sheet metal & parts', icon: <Factory /> },
    { label: 'Heavy Fabrication', sub: 'Large-scale builds', icon: <Construction /> },
    { label: 'Castings', sub: 'Foundry components', icon: <Build /> },
    { label: 'Machining', sub: 'CNC and surface cutting', icon: <PrecisionManufacturing /> },
    { label: 'Rubber', sub: 'Durable elastomers', icon: <Science /> },
    { label: 'Plastics', sub: 'Injection-molded parts', icon: <Extension /> },
    { label: 'Electricals', sub: 'Cables & controllers', icon: <ElectricBolt /> },
    { label: 'Hydraulics', sub: 'Valves & cylinders', icon: <Plumbing /> },
    { label: 'Auxiliary Components', sub: 'Final assembly parts', icon: <Settings /> },
];

export default function CommodityFlowMobile() {
    const [open, setOpen] = useState(false);
    const [selectedNode, setSelectedNode] = useState<{ label: string; sub: string } | null>(null);

    const handleCardClick = (node: { label: string; sub: string }) => {
        setSelectedNode(node);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedNode(null);
    };

    return (
        <Box sx={{ minHeight: '100vh', px: 2, py: 3 }}>
            <Grid container spacing={3} justifyContent="center">
                {nodeData.map((item, index) => (
                    <Grid size={{xs: 12}} key={index}>
                        <Card
                            onClick={() => handleCardClick(item)}
                            sx={{
                                cursor: 'pointer',
                                backdropFilter: 'blur(12px)',
                                background:
                                    'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                                borderRadius: 4,
                                border: '1px solid rgba(255,255,255,0.1)',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                                },
                                p: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Avatar
                                sx={{
                                    mb: 2,
                                    bgcolor: 'transparent',
                                    border: '2px solid #ffa726',
                                    width: 64,
                                    height: 64,
                                    color: '#ffa726',
                                    fontSize: 32,
                                }}
                            >
                                {item.icon}
                            </Avatar>

                            <CardContent sx={{ p: 0 }}>
                                <Typography variant="subtitle1" fontWeight="bold" color="#ffffff">
                                    {item.label}
                                </Typography>
                                <Typography variant="body2" color="gray">
                                    {item.sub}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* ------------------- Modal Dialog ------------------- */}
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        background: 'linear-gradient(135deg, #212121, #333)',
                        color: '#fff',
                        boxShadow: 8,
                        p: 2,
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        borderBottom: '1px solid #555',
                    }}
                >
                    Node Details
                    <IconButton onClick={handleClose} sx={{ color: '#fff' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent
                    sx={{
                        mt: 2,
                        textAlign: 'center',
                        minHeight: 100,
                    }}
                >
                    {selectedNode && (
                        <>
                            <Typography variant="h6" color="#ffcc80">
                                {selectedNode.label}
                            </Typography>
                            <Typography variant="body1" color="gray" mt={1}>
                                {selectedNode.sub}
                            </Typography>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
}
