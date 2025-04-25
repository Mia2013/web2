import React, { useEffect } from "react";
import { Grid, Typography, Container } from "@mui/material";
import PageTitle from "../components/PageTitle";
import CustomAlert from "../components/CustomAlert"
import { ProductItem } from "../components/ProductItem";
import { useWebshop } from "../provider/WebshopProvider";

export default function Products() {
  const { wines, getWines, setAlert } = useWebshop();

  useEffect(() => {
    getWines();
    // eslint-disable-next-line    
  }, [])

  return (
    <Container maxWidth="lg" >
      <Grid container sx={{ mt: 5, mb: 10 }}>
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
        <Grid size={12}>
          {wines.map((item) => (
            <ProductItem item={item} key={item.name + "winepage"} />
          ))}
        </Grid >
      </Grid>
      <CustomAlert alert={alert} setAlert={setAlert} />
    </Container>
  );
}
