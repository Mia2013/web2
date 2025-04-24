import React, { useEffect, useState } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import PageTitle from "../components/PageTitle";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { getData } from '../API/apiCalls';
import CustomAlert from "../components/CustomAlert"
import { useCart } from "../provider/CartItemsProvider";

export default function Products() {
  const { getCartItems, cartItems, addCartItems, alert, setAlert } = useCart();
  const [wines, setWines] = useState([]);

  useEffect(() => {
    getWines();
  }, [])

  const getWines = async () => {
    getData("wines").then(reqData => {
      const wines_ = reqData.map((wine => {
        return {
          ...wine,
          quantity: 1
        }
      }))
      setWines(wines_)
    }).catch((e) =>
      setAlert({ message: "Hiba történt a kérés közben!", severity: "error" }))
  }

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



  const addToCart = (item) => {
    const data = {
      wineId: item.id,
      quantity: item.quantity
    }
    addCartItems(data);
  }



  return (
    <Container maxWidth="lg" >
      <Grid container sx={{ flexWrap: "wrap", mt: 5, mb: 10 }}>
        <Grid size={12} sx={{ textAlign: "center" }}>
          <PageTitle title="Boraink" />
        </Grid>
        <Grid
          size={12}
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
        {wines.map((item) => (
          <>
            <Grid
              size={{ xs: 12, sm: 5 }}

              sx={{ my: 3 }}
            >
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

            </Grid>

            <Grid
              size={{ xs: 4, sm: 3 }}
              sx={{ my: "auto" }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Italianno, cursive",
                  textAlign: "right"
                }}
                data-aos="fade-right"
              >                {" "}
                {item.price} Ft
              </Typography>

            </Grid>

            <Grid
              size={{ xs: 8, sm: 4 }}
              sx={{ my: "auto" }}

            >
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                <DoDisturbOnIcon onClick={() => handleDecreaseQuantity(item.id)} fontSize="large" id="cart-icon" />
                <Typography variant="body1" sx={{ fontWeight: "bolder" }} >{item.quantity}</Typography>
                <AddCircleIcon onClick={() => handleIncreaseQuantity(item.id)} fontSize="large" id="cart-icon" />
                <ShoppingBasketIcon onClick={() => addToCart(item)} sx={{ ml: 3 }} fontSize="large" id="cart-icon" />
              </Box>
            </Grid>

          </>
        ))}
      </Grid>
      <CustomAlert alert={alert} setAlert={setAlert} />
    </Container>
  );
}
