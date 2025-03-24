import React from "react";
import { Grid, Typography, Container, Divider, Box } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PageTitle from "../components/PageTitle";

export default function Contact() {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ my: { xs: 3, md: 8 }, mx: "auto" }} id="contact">
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <PageTitle title="Kapcsolat"></PageTitle>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ textAlign: "center" , my: 3 }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Exo 2, sans-serif",
            }}
          >
            Megrendeléssel kapcsolatban az alábbi elérhetőségeimen kereshet
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            px: 5,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
          data-aos="fade-right"

        >
          <Divider color="#a97142" />
          <Box sx={{ my: 4, mx: 2 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Exo 2, sans-serif",
              }}
            >
              Budavári József{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Exo 2, sans-serif",
              }}
            >
              borász{" "}
            </Typography>
          </Box>
          <Divider color="#a97142" />
          <Box
            sx={{
              mt: 8,
              mb: 4,
              display: "flex",
              alignItems: "center",
              mx: 2,
              flexWrap: "wrap",
            }}
          >
            <LocalPhoneIcon
              sx={{ height: "1.3rem", marginRight: "0.5rem" }}
            />
            <Typography
              color="#a97142"
              sx={{ textDecoration: "none", fontFamily: "Exo 2, sans-serif" }}
              component="span"
              variant="h6"
            >
              Telefonszám:
            </Typography>
            <Typography
              color="#a97142"
              sx={{
                textDecoration: "none",
                fontFamily: "Exo 2, sans-serif",
                ml: "1.5rem",
              }}
              component="a"
              variant="h6"
              href="tel:+3630-944-3375"
            >
              +36 30 944 3375
            </Typography>
          </Box>

          <Box
            sx={{
              my: 4,
              display: "flex",
              alignItems: "center",
              mx: 2,
              flexWrap: "wrap",
            }}
          >
            {" "}
            <EmailIcon
              sx={{ height: "1.3rem", marginRight: "0.5rem" }}
            />
                        <Typography
              color="#a97142"
              sx={{ textDecoration: "none", fontFamily: "Exo 2, sans-serif" }}
              component="span"
              variant="h6"
            >
             E-mail cím:
            </Typography>
            <Typography
              color="#a97142"
              sx={{
                textDecoration: "none",
                fontFamily: "Exo 2, sans-serif",
                ml: "1.5rem",

              }}
              component="a"
              variant="h6"
              href="mailto: buda56@t-home.hu"
            >
             buda56@t-home.hu
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center", p: 3 }}           data-aos="fade-left"
>
          <Typography
            noWrap
            component="img"
            sx={{
              width: "100%",
            }}
            src={`${process.env.PUBLIC_URL}/pic/contact.jpg`}
          ></Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
