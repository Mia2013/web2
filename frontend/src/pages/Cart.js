import React, { useEffect, useState } from "react";
import { Grid, Typography, Container, Box, IconButton, Divider } from "@mui/material";
import PageTitle from "../components/PageTitle";
import DeleteIcon from '@mui/icons-material/Delete';


import CustomAlert from "../components/CustomAlert"
import { useCart } from "../provider/CartItemsProvider";

const Cart = () => {
    const { getCartItems, cartItems, removeCartItems, alert, setAlert, amountOfAllCart } = useCart();


    useEffect(() => {
        getCartItems();
    }, [])

    const handleRemoveItemFromCart = () => {

    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('hu-HU', {
            useGrouping: true,
            minimumIntegerDigits: 1
        }).format(price);
    };

    return (
        <Container maxWidth="lg" >
            <Grid container sx={{ flexWrap: "wrap", mt: 5, mb: 10 }}>
                <Grid size={12} sx={{ textAlign: "center" }}>
                    <PageTitle title="Kosár" />
                </Grid>

                <Grid
                    size={12}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    {cartItems.length > 0 && cartItems?.map((item) => (
                        <Box key={item.name} sx={{ my: 3, display: 'flex', justifyContent: "space-between" }}>
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
                            </div>

                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3 }} data-aos="fade-right">
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: "Italianno, cursive",
                                    }}

                                >
                                    {" "}
                                    {item.quantity} db
                                </Typography>


                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: "Italianno, cursive",
                                    }}

                                >
                                    {" "}
                                    {formatPrice(item.quantity * item.price)} Ft
                                </Typography>
                                <IconButton aria-label="delete" onClick={() => handleRemoveItemFromCart(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>

                        </Box>
                    ))}
                </Grid>
                <Grid size={12}>
                    <Divider />
                    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 5, mr: 9, mt: 2 }} data-aos="fade-right">
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "Italianno, cursive",
                            }}
                        >
                            Összesen:
                        </Typography>


                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "Italianno, cursive",
                            }}
                        >
                            {formatPrice(amountOfAllCart)} Ft

                        </Typography>

                    </Box>
                </Grid>
            </Grid>
            <CustomAlert alert={alert} setAlert={setAlert} />
        </Container>
    );
}

export default Cart;