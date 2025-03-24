import React, { useId } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import PageTitle from "../components/PageTitle";

export default function Products() {
  const id = useId();
  const wines = [
    {
      name: "Kékfrankos",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      name: "Zweigelt",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      name: "Rozé",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      name: "Chardonnay",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      name: "Irsai",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];

  return (
    <Container maxWidth="lg" id="wines">
      <Grid container  sx={{ flexWrap: "wrap" }}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <PageTitle title="Boraink"></PageTitle>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: { xs: 3, md: 5 },
          }}
        >
          <Typography
            noWrap
            component="img"
            sx={{
              maxWidth: { xs: "90%", md: "100%" },
              objectFit: "cover",
            }}
            src={`${process.env.PUBLIC_URL}/pic/wines.jpg`}
            data-aos="zoom-in"
          ></Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {wines.map((item) => (
            <Box key={id + item.name} sx={{ my: 3 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Italianno, cursive",
                }}
                data-aos="fade-right"
              >
                {" "}
                {item.name}
              </Typography>
              <Typography variant="subtitle1" data-aos="fade-left">
                {" "}
                {item.description}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
