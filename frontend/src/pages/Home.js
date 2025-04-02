import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import AutoplaySlideshow from "../components/Swiper";
import PageTitle from "../components/PageTitle";

export default function Home() {
  //adatbazis tabla1
    //tabla2, tabla3-kosar, tabla4 rendeles, tabla5 velemenyek
  
  const images = [
    { src: `${process.env.PUBLIC_URL}/pic/home.jpg`, position: "center" },
    { src: `${process.env.PUBLIC_URL}/pic/about.jpg`, position: "top" },
    { src: `${process.env.PUBLIC_URL}/pic/slideshow.jpg`, position: "center" },
    { src: `${process.env.PUBLIC_URL}/pic/slideshow2.jpg`, position: "bottom" },
    {src: `${process.env.PUBLIC_URL}/pic/slideshow3.jpg`, position: "center"}];

  return (
    <Grid container sx={{ mt: 4 }}>
      <Grid item xs={12} sx={{ maxwidth: "100%", overflow: "hidden" }}>
        <AutoplaySlideshow images={images} />
      </Grid>
      <Container maxWidth="lg">
        <Grid item xs={12} sx={{ textAlign: "center", mt: { xs: 3, md: 8 } }}>
          <PageTitle title="Rólunk"></PageTitle>
        </Grid>
        <Grid item xs={12}sx={{mb: 40}}> 
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
    </Container>
    </Grid>
  );
}
