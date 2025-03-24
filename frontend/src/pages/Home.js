import React from "react";
import { Grid } from "@mui/material";
import AutoplaySlideshow from "../components/Swiper";

export default function Home() {
  const images = [
    { src: `${process.env.PUBLIC_URL}/pic/home.jpg`, position: "center" },
    { src: `${process.env.PUBLIC_URL}/pic/about.jpg`, position: "top" },
    { src: `${process.env.PUBLIC_URL}/pic/slideshow.jpg`, position: "center" },
    { src: `${process.env.PUBLIC_URL}/pic/slideshow2.jpg`, position: "bottom" },
    {src: `${process.env.PUBLIC_URL}/pic/slideshow3.jpg`, position: "center"}];
  return (
    <Grid container sx={{ mt: 4 }} id="back-to-top-anchor">
      <Grid item xs={12} sx={{ maxwidth: "100%", overflow: "hidden" }}>
        <AutoplaySlideshow images={images} />
      </Grid>
    </Grid>
  );
}
