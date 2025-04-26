import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, Box, Tab, } from "@mui/material";
import { TabContext, TabPanel, TabList } from '@mui/lab';

import AutoplaySlideshow from "../components/Swiper";
import CustomAlert from "../components/CustomAlert"

import PageTitle from "../components/PageTitle";
import { getData, } from '../API/apiCalls';
import Form from "../components/Form";
import { useAuth } from "../provider/AuthProvider";

export default function Home() {
  const [images, setImages] = useState([{ src: `${process.env.PUBLIC_URL}/pic/home.jpg`, position: "center" }]);
  const [alert, setAlert] = useState([]);
  const [tabValue, setTabValue] = useState('2');
  const { token } = useAuth();

  useEffect(() => {
    getImages();
  }, [])

  const getImages = async () => {
    getData("images")
      .then(resData => {
        const imgs = resData.map((img => {
          return { src: `${process.env.PUBLIC_URL}/pic/${img.name}.jpg`, position: img.position }
        }))
        setImages(imgs)
      })
      .catch((e) =>
        setAlert({ message: "Hiba történt a képek betöltése közben!", severity: "error" }))
  }

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Grid container sx={{ mt: 4, mb: 12 }}>
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
              lineHeight: "36px"
            }}
            data-aos="fade-down"
          >
            A Budavári Pince a Nagy-Kevély alatt, Pilisborosjenő és Üröm közötti szőlőterületen található.
            Különleges mikroklímája és a gondosan művelt szőlőültetvények kiváló alapot biztosítanak a minőségi borkészítéshez.
            Pincészetünkben a hagyományos értékeket modern technológiával ötvözzük, hogy boraink egyedülálló ízvilágukkal
            nyújtsanak felejthetetlen élményt. Szeretettel várjuk a borkedvelőket kóstolókra, rendezvényekre és vezetett pincelátogatásokra is.
            A természet közelsége és a festői környezet egyedülálló hangulatot kölcsönöz pincészetünknek. Borainkat szenvedéllyel és odafigyeléssel készítjük,
            a szőlő minden fürtjét gondosan válogatva. A Budavári Pince nem csupán egy borászat, hanem egy találkozóhely is,
            ahol a vendégek elmélyülhetnek a borok világában, miközben élvezik a csendet és a panorámát. Legyen szó baráti összejövetelről,
            romantikus kirándulásról vagy céges rendezvényről, pincészetünk különleges élményt kínál minden alkalomra.
          </Typography>
        </Grid>

        {!token &&
          <Grid size={12} sx={{ mt: 5 }} data-aos="fade-down">
            <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleTabChange} aria-label="lab API tabs example" centered>
                  <Tab label={<span style={{ color: '#a97142' }}>Regisztráció</span>} value="1" />
                  <Tab label={<span style={{ color: '#a97142' }}>Bejelentkezés</span>} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Typography sx={{ textAlign: "center", my: 2 }}>Váráslás előtt kérem regisztráljon. Amennyiben már regisztrált felhasználó jelentkezzen be </Typography>
                <Form title="Regisztráció" formType="register" />
              </TabPanel>
              <TabPanel value="2">
                <Form title="Bejelentkezés" formType="login" />
              </TabPanel>
            </TabContext>
          </Grid>
        }
      </Container>
      <CustomAlert alert={alert} setAlert={setAlert} />
    </Grid>
  );
}
