import { Grid, Box, Typography } from "@mui/material";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { services } from "./ServicesConfig";

const Item = styled(Paper)(({ theme }) => ({
  background: "black",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <Grid size={{xs: 12, sm: 6}}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Item>
          <Box
            sx={{
              border: "1px solid #333",
              p: 4,
              backgroundColor: "#111",
              height: "100%",
              transition: "transform 0.3s ease, backgroundColor 0.3s ease",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            {/* Section number */}
            <Typography
              variant="h5"
              sx={{ color: "#AF6118", fontWeight: "bold", fontSize: "1.8rem" }}
            >
              {service.number}.
            </Typography>

            {/* Main heading */}
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                fontWeight: 600,
                fontSize: "1.1rem",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              {service.title}
            </Typography>

            {/* Bullet list */}
            <Box
              component="ul"
              sx={{
                mt: 2,
                pl: 2,
                color: "#ccc",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                textAlign: "left",
                listStyleType: "disc",
              }}
            >
              {service.para.map((point, idx) => (
                <li key={idx}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#AF6118", fontWeight: 600 }}
                  >
                    {point.subheading}
                  </Typography>
                  <Typography variant="body2" sx={{ ml: 1.5 }}>
                    {point.description}
                  </Typography>
                </li>
              ))}
            </Box>
          </Box>
        </Item>
      </motion.div>
    </Grid>
  );
};
