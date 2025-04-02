import React, { useId, useState } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import PageTitle from "../components/PageTitle";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Products() {
  const id = useId();

  const [wines, setWines] = useState([
    {
      id: 1,
      name: "Kékfrankos",
      description: "Gazdag, fűszeres és gyümölcsös vörösbor, amely a magyar borászat egyik kiemelkedő fajtája.",
      quantity: 1
    },
    {
      id: 2,
      name: "Zweigelt",
      description: "Könnyed, gyümölcsös és bársonyos vörösbor, amely a meggyes és cseresznyés jegyeiről ismert.",
      quantity: 1
    },
    {
      id: 3,
      name: "Rozé",
      description: "Friss, üde és gyümölcsös bor, amely tökéletes választás a nyári estékhez.",
      quantity: 1
    },
    {
      id: 4,
      name: "Chardonnay",
      description: "Elegáns, testes fehérbor, amely vajasságával és gyümölcsös aromáival hódít.",
      quantity: 1
    },
    {
      id: 5,
      name: "Irsai",
      description: "Könnyű, illatos és muskotályos fehérbor, amely igazi frissítő élményt nyújt.",
      quantity: 1
    },
  ]);

  const handleIncreaseQuantity = (id) => {
    const newWines = [...wines];
    for (let i = 0; i < newWines.length; i++) {
      if (newWines[i].id === id) {
        newWines[i].quantity++;
      }
    }
    setWines(newWines);
  }

  const handleDecreaseQuantity = (id) => {
    const newWines = [...wines];
    for (let i = 0; i < newWines.length; i++) {
      if (newWines[i].id === id) {
        newWines[i].quantity--;
      }
    }
    setWines(newWines);
  }




  return (
    <Container maxWidth="lg" >
      <Grid container sx={{ flexWrap: "wrap", mt: 5, mb: 10 }}>
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
            <Box key={id + item.name} sx={{ my: 3, display: 'flex', justifyContent: "space-between" }}>
              <div>
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
              </div>
              <Box sx={{ display: "flex", justifyContent: "cwenter", alignItems: "center", gap: 1 }}>


                <DoDisturbOnIcon onClick={() => handleDecreaseQuantity(item.id)}  fontSize="large"/>
                <Typography variant="body1" sx={{fontWeight:"bolder"}} >{item.quantity}</Typography>
                <AddCircleIcon onClick={() => handleIncreaseQuantity(item.id)}   fontSize="large"/>
                <ShoppingBasketIcon  fontSize="large"/>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
