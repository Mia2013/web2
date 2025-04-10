import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, Box, Tab, } from "@mui/material";
import { TabContext, TabPanel, TabList } from '@mui/lab';

import AutoplaySlideshow from "../components/Swiper";
import CustomAlert from "../components/CustomAlert"

import PageTitle from "../components/PageTitle";
import { getData, } from '../API/apiCalls';
import Form from "../components/Form";

export default function Home() {
  const [images, setImages] = useState([]);
  const [alert, setAlert] = useState([]);
  const [tabValue, setTabValue] = useState('1');

  useEffect(() => {
    getImages();
  }, [])

  const getImages = async () => {
    getData("images").then(reqData => {
      const imgs = reqData.map((img => {
        return {
          src: `${process.env.PUBLIC_URL}/pic/${img.name}.jpg`, position: img.position
        }
      }))
      setImages(imgs)
    }).catch((e) =>
      setAlert({ message: "Hiba történt a kérés közben!", severity: "error" }))
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Grid container sx={{ mt: 4 }}>
      <Grid size={12} sx={{ maxwidth: "100%", overflow: "hidden" }}>
        <AutoplaySlideshow images={images} />
      </Grid>
      <Container maxWidth="lg">
        <Grid size={12} sx={{ textAlign: "center", mt: { xs: 3, md: 8 } }}>
          <PageTitle title="Rólunk" />
        </Grid>
        <Grid size={12}>
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

        <Grid size={12} sx={{ mt: 5 }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example" centered>
                <Tab label="Regisztráció" value="1" />
                <Tab label="Bejelentkezés" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Typography sx={{ textAlign: "center", my: 2 }}>Váráslás előtt kérem regisztráljon. Amennyiben már regisztrált felhasználó jelentkezzen be </Typography>
              <Form title="Regisztráció" formType="register" />
            </TabPanel>
            <TabPanel value="2"><Form title="Bejelentkezés" formType="login" />
            </TabPanel>
          </TabContext>
        </Grid>
      </Container>
      <CustomAlert alert={alert} setAlert={setAlert} />

    </Grid>
  );
}
