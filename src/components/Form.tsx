import * as React from 'react';
import {
    TextField,
    Button,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CircularProgress,
    Typography,
} from '@mui/material';

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
    });

    const [open, setOpen] = React.useState(false);  // modal control
    const [loading, setLoading] = React.useState(false); // spinner control

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true); // Start loading spinner

        const url = "https://script.google.com/macros/s/AKfycbymrO_WO0esLtfa9jEF2fzY0LAZX49OdkrsQXqDCFBLPdH4Ogc6QT1hwW4zuKFLdlCwBA/exec"
        
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: (`firstName=${e.target.firstName.value}&lastName=${e.target.lastName.value}&email=${e.target.email.value}&phoneNumber=${e.target.phoneNumber.value}&subject=${e.target.subject.value}`)
        })
            .then(res => res.text())
            .then(data => {
                setLoading(false); // Stop loading
                setOpen(true);     // Show modal
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                });
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    };

    const inputStyles = {
        color: 'white',
        '&:before': { borderBottom: '1px solid white' },
        '&:after': { borderBottom: '2px solid white' },
        '&:hover:not(.Mui-disabled):before': { borderBottom: '1px solid white' },
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    width: '100%',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}
                noValidate
                autoComplete="off"
            >
                <center><h3 style={{ color: 'white' }}>Set an Introductory Meeting</h3></center>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField name="firstName" label="First Name" required fullWidth variant="standard"
                        value={formData.firstName} onChange={handleChange}
                        InputLabelProps={{ sx: { color: 'white' } }}
                        InputProps={{ sx: inputStyles }} />
                    <TextField name="lastName" label="Last Name" required fullWidth variant="standard"
                        value={formData.lastName} onChange={handleChange}
                        InputLabelProps={{ sx: { color: 'white' } }}
                        InputProps={{ sx: inputStyles }} />
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField name="email" label="Email" required fullWidth variant="standard"
                        value={formData.email} onChange={handleChange}
                        InputLabelProps={{ sx: { color: 'white' } }}
                        InputProps={{ sx: inputStyles }} />
                    <TextField name="phoneNumber" label="Phone Number" required fullWidth variant="standard"
                        value={formData.phoneNumber} onChange={handleChange}
                        InputLabelProps={{ sx: { color: 'white' } }}
                        InputProps={{ sx: inputStyles }} />
                </Box>

                <TextField name="subject" label="Leave us a message..." multiline rows={1} variant="standard" fullWidth
                    value={formData.subject} onChange={handleChange}
                    InputLabelProps={{ sx: { color: 'white' } }}
                    InputProps={{ sx: inputStyles }} />

                <Button type="submit"
                    variant="outlined"
                    disabled={loading}
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                            borderColor: 'white',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                    }}
                >
                    {loading ? <CircularProgress size={22} sx={{ color: 'white' }} /> : "Submit"}
                </Button>
            </form>

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

        </>
    );
}
