import React from "react";
import { Typography, Grid, Container } from "@mui/material";

import PageTitle from "../components/PageTitle";

export default function About() {
  
  return (
    <Container maxWidth="lg" id="about">
      <Grid container sx={{ my: { xs: 3, md: 8 }, mx: "auto" }} >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <PageTitle title="Rólunk"></PageTitle>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "justify",
              textJustify: "inter-word",
              fontFamily: "Exo 2, sans-serif",
            }}
            data-aos="fade-down"
          >
            A Budavári Pince a Nagy-Kevély alatt Pilisborosjenő és Üröm közötti
            szőlő területen található A Budavári Pince a Nagy-Kevély alatt
            Pilisborosjenő és Üröm közötti szőlő területen található A Budavári
            Pince a Nagy-Kevély alatt Pilisborosjenő és Üröm közötti szőlő
            területen található A Budavári Pince a Nagy-Kevély alatt
            Pilisborosjenő és Üröm közötti szőlő területen található A Budavári
            Pince a Nagy-Kevély alatt Pilisborosjenő és Üröm közötti szőlő
            területen található A Budavári Pince a Nagy-Kevély alatt
            Pilisborosjenő és Üröm közötti szőlő területen található{" "}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
