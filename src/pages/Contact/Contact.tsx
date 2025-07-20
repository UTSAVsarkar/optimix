import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CircularProgress,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
    });
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        const url = "https://script.google.com/macros/s/AKfycbymrO_WO0esLtfa9jEF2fzY0LAZX49OdkrsQXqDCFBLPdH4Ogc6QT1hwW4zuKFLdlCwBA/exec";

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then((res) => res.text())
            .then(() => {
                setLoading(false);
                setOpen(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                });
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    return (
        <Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 2, md: 4 } }}>
            <Box
                sx={{
                    p: { xs: 3, md: 6 },
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    boxShadow: 3,
                    maxWidth: "1200px",
                    mx: "auto",
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={6}
                    justifyContent="space-between"
                >
                    {/* Left Section: Contact Form */}
                    <Box flex={1.5}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight={500} mb={1}>
                            CONTACT US
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" mb={3} color="text.primary">
                            Reach out with any questions or inquiries
                        </Typography>

                        <Box display="flex" gap={2} mb={2} flexWrap="wrap">
                            <TextField name="firstName" label="First Name" required fullWidth sx={{ flex: 1 }} value={formData.firstName} onChange={handleChange} />
                            <TextField name="lastName" label="Last Name" required fullWidth sx={{ flex: 1 }} value={formData.lastName} onChange={handleChange} />
                        </Box>

                        <Box display="flex" gap={2} mb={2} flexWrap="wrap">
                            <TextField name="email" label="Email" required fullWidth sx={{ flex: 1 }} value={formData.email} onChange={handleChange} />
                            <TextField name="phoneNumber" label="Phone Number" fullWidth sx={{ flex: 1 }} value={formData.phoneNumber} onChange={handleChange} />
                        </Box>

                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            name="subject"
                            label="Leave us a message..."
                            variant="outlined"
                            sx={{ mb: 3 }}
                            value={formData.subject}
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            endIcon={!loading && <SendIcon />}
                            sx={{
                                backgroundColor: "#A85E1F",
                                textTransform: "none",
                                px: 4,
                                py: 1.2,
                                borderRadius: "8px",
                                "&:hover": {
                                    backgroundColor: "#8a4a18",
                                },
                            }}
                        >
                            {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Submit"}
                        </Button>
                    </Box>

                    {/* Divider */}
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            display: { xs: "none", md: "block" },
                            borderColor: "#ddd",
                        }}
                    />

                    {/* Right Section: Info & Social */}
                    <Box
                        flex={1}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box mb={3} textAlign="center">
                            <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>
                                ADDRESS
                            </Typography>
                            <Typography>500 Terry Francine Street</Typography>
                            <Typography>San Francisco, CA 94158</Typography>
                        </Box>

                        <Box mb={3} textAlign="center">
                            <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>
                                PHONE
                            </Typography>
                            <Typography>123-456-7890</Typography>
                        </Box>

                        <Box mb={3} textAlign="center">
                            <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>
                                EMAIL
                            </Typography>
                            <Typography>info@mysite.com</Typography>
                        </Box>

                        <Box display="flex" gap={2} justifyContent="center">
                            <IconButton sx={{ color: "#3b5998" }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton sx={{ color: "#0077b5" }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton sx={{ color: "#1da1f2" }}>
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Modal Dialog */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        backgroundColor: '#f9f9f9',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.2)',
                        px: 3,
                        py: 2,
                        minWidth: 300,
                    }
                }}
            >
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                        sx={{
                            backgroundColor: '#4caf50',
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: 18,
                        }}
                    >
                        ✓
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                        Message Sent
                    </Typography>
                </DialogTitle>

                <DialogContent sx={{ fontSize: 16, color: '#555', mb: 1 }}>
                    Thank you! Your response has been successfully submitted. We’ll get back to you soon.
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={() => setOpen(false)}
                        sx={{
                            color: 'white',
                            backgroundColor: '#4caf50',
                            textTransform: 'none',
                            px: 3,
                            '&:hover': {
                                backgroundColor: '#43a047',
                            },
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Contact;
