import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import EngineeringIcon from "@mui/icons-material/Engineering";
import OpacityIcon from "@mui/icons-material/Opacity";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ScienceIcon from "@mui/icons-material/Science";
import ToysIcon from "@mui/icons-material/Toys";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ExtensionIcon from "@mui/icons-material/Extension";

const items = [
  { label: "Small Fabrication", icon: <BuildIcon style={{color: '#AF6118', fontSize:'6rem'}} /> },
  { label: "Heavy Fabrication", icon: <PrecisionManufacturingIcon style={{color: '#AF6118', fontSize:'6rem'}} /> },
  { label: "Machining", icon: <EngineeringIcon style={{color: '#AF6118', fontSize:'6rem'}} /> },
  { label: "Hydraulics", icon: <OpacityIcon style={{color: '#AF6118', fontSize:'6rem'}} /> },
  { label: "Castings", icon: <ViewInArIcon style={{color: '#AF6118', fontSize:'6rem'}} /> },
  { label: "Plastics", icon: <ScienceIcon style={{color: '#AF6118', fontSize:'6rem'}} /> },
  { label: "Rubber", icon: <ToysIcon style={{color: '#AF6118', fontSize:'6rem'}} /> },
  { label: "Electricals", icon: <ElectricalServicesIcon style={{color: '#AF6118', fontSize:'6rem'}} /> },
  {
    label: "Auxiliary Components",
    icon: <ExtensionIcon style={{color: '#AF6118', fontSize:'6rem'}} />,
    sub: "(Cabin parts, trims, glass, filters, insulation, fasteners)",
  },
];

export default function CommoditiesGrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{  py: 6, px: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
          <Grid
          size={{xs: 12, sm: 6, md: 4}}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: isMobile ? "100%" : 300,
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{ fontSize: 40, color: "primary.main", mb: 1 }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" fontWeight="600">
                  {item.label}
                </Typography>
                {item.sub && (
                  <Typography variant="caption" color="text.secondary" mt={1}>
                    {item.sub}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
