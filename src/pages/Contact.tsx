import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
    return (
        <Box sx={{ p: 4, backgroundColor: "#fff" }}>
            {/* Flex container */}
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={6}
            >
                {/* Top Section: Logo */}

                <Box mb={4}>
                    <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="EGK Logo" height="40" />
                    <Typography variant="subtitle1" mt={1}>
                        Engineering Consultants
                    </Typography>
                </Box>
                {/* Left: Contact Form */}
                <Box flex={2}>
                    <Typography variant="subtitle2" color="textSecondary">
                        CONTACT US
                    </Typography>
                    <Typography variant="h4" fontWeight={600} mb={2}>
                        Reach out with any questions or inquiries
                    </Typography>

                    <Box display="flex" flexWrap="wrap" gap={2}>
                        <TextField label="First name" required fullWidth sx={{ flex: 1 }} />
                        <TextField label="Last name" required fullWidth sx={{ flex: 1 }} />
                    </Box>

                    <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
                        <TextField label="Email" required fullWidth sx={{ flex: 1 }} />
                        <TextField label="Phone" fullWidth sx={{ flex: 1 }} />
                    </Box>

                    <Box mt={2}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Leave us a message..."
                        />
                    </Box>

                    <Box mt={2}>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "#A85E1F", textTransform: "none" }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>

                {/* Right: Info & Socials */}
                <Box flex={1}>
                    <Box mb={3}>
                        <Typography variant="subtitle2" color="textSecondary">
                            ADDRESS
                        </Typography>
                        <Typography>
                            500 Terry Francine Street
                            <br />
                            San Francisco, CA 94158
                        </Typography>
                    </Box>

                    <Box mb={3}>
                        <Typography variant="subtitle2" color="textSecondary">
                            PHONE
                        </Typography>
                        <Typography>123-456-7890</Typography>
                    </Box>

                    <Box mb={3}>
                        <Typography variant="subtitle2" color="textSecondary">
                            EMAIL
                        </Typography>
                        <Typography>info@mysite.com</Typography>
                    </Box>

                    <Box display="flex" gap={2} mb={3}>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;