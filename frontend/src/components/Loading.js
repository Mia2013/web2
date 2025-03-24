import { Typography, Grid } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        height: "100vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item>
        <ClipLoader variant="h2" color="#a97142" size={40} />
        <Typography variant="h3">Betöltés...</Typography>
      </Grid>
    </Grid>
  );
}
