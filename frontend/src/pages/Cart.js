import React, { useEffect } from "react";
import { Grid, Typography, Container, Box, Divider, Button } from "@mui/material";
import PageTitle from "../components/PageTitle";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import CustomAlert from "../components/CustomAlert"
import CartItem from "../components/CartItem"
import { useWebshop } from "../provider/WebshopProvider";

const Cart = () => {
    const {
        getCartItems,
        cartItems,
        formatPrice,
        alert,
        setAlert,
        amountOfAllCart,
        badgeContent,
        buyCart
    } = useWebshop();

    useEffect(() => {
        getCartItems();
        // eslint-disable-next-line
    }, [])


    return (
        <Container maxWidth="lg" sx={{ minHeight: "90vh" }}>
            <Grid container sx={{ flexWrap: "wrap", mt: 5, mb: 10 }}>
                <Grid size={12} sx={{ textAlign: "center" }}>
                    <PageTitle title="Kosár" />
                </Grid>
                {cartItems.length > 0 ?
                    (<Grid
                        size={12}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        {cartItems?.map((item) => (
                            <CartItem item={item} key={item.name + "cart"} data-aos="fade-right"
                            />
                        ))}

                        <Divider />
                        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 5, mr: 8, mt: 2 }} data-aos="fade-right">
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
                                {badgeContent} db
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

                        <Button variant='contained' endIcon={<ShoppingCartCheckoutIcon />}
                            fullWidth
                            sx={{
                                mt: 6,
                                "&:hover": {
                                    background: 'white',
                                    color: "#a97142",
                                }
                            }}
                            onClick={buyCart}
                        >Megrendelés</Button>
                    </Grid>
                    ) : (<Grid><Typography>A kosár jelenleg üres....</Typography></Grid>)
                }
            </Grid>
            <CustomAlert alert={alert} setAlert={setAlert} />
        </Container>
    );
}

export default Cart;