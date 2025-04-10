import { Typography, Box } from "@mui/material";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        textAlign: "center",
      }}
    >
      <PacmanLoader variant="h2" color="#a97142" size={40} />
      <Typography variant="h3">Betöltés...</Typography>
    </Box>
  );
}
