import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface AnimatedLineProps {
  isInView: boolean;
}


export const AnimatedLine = (props: AnimatedLineProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        component={motion.div}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: props.isInView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        sx={{
          width: "2px",
          height: "100%",
          backgroundColor: "#AF6118",
          transformOrigin: "top",
        }}
      />
    </Box>
  );
};
