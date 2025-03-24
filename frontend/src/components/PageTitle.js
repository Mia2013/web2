import { Typography, Box } from "@mui/material";
import { Divider } from "@mui/material";

export default function PageTitle({ title, id }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        my: { xs: 5, md: 12 },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Italianno, cursive",
        }}
        className="title"
        data-aos="fade-up"
      >
        {title}
      </Typography>
      <Divider
        data-aos="fade-down"
        data-aos-duration="400"
        sx={{
          width: { xs: "8%", sm: "7%", md: "4%" },
          border: "2px solid #1e8449 ",
          marginTop: { xs: -2.3, md: -3, lg: -4 },
        }}
      />
    </Box>
  );
}
