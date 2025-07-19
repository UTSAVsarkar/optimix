import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 10 },  // vertical padding from top and bottom
                px: { xs: 2, md: 4 },   // horizontal padding on smaller screens
            }}
        >
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
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={6}
                    justifyContent="space-between"
                >
                    {/* Left Section: Contact Form */}
                    <Box flex={1.5}>
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            fontWeight={500}
                            mb={1}
                        >
                            CONTACT US
                        </Typography>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            mb={3}
                            color="text.primary"
                        >
                            Reach out with any questions or inquiries
                        </Typography>

                        <Box display="flex" gap={2} mb={2} flexWrap="wrap">
                            <TextField label="First name" required fullWidth sx={{ flex: 1 }} />
                            <TextField label="Last name" required fullWidth sx={{ flex: 1 }} />
                        </Box>

                        <Box display="flex" gap={2} mb={2} flexWrap="wrap">
                            <TextField label="Email" required fullWidth sx={{ flex: 1 }} />
                            <TextField label="Phone" fullWidth sx={{ flex: 1 }} />
                        </Box>

                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Leave us a message..."
                            variant="outlined"
                            sx={{ mb: 3 }}
                        />

                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
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
                            Submit
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
        </Box>
    );
};

export default Contact;
