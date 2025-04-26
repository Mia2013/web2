import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useWebshop } from "../provider/WebshopProvider";
import { useAuth } from "../provider/AuthProvider";

export const ProductItem = ({ item }) => {
    const { addCartItems, setWines, wines } = useWebshop();
    const { token } = useAuth();
    const [isAddedToCart, setIsAddedToCart] = useState(false);

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
        setIsAddedToCart(true);
    }

    useEffect(() => {
        if (isAddedToCart) {
            const timeout = setTimeout(() => {
                setIsAddedToCart(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [isAddedToCart]);

    return (
        <Grid container >
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
                data-aos="fade-right"
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: "Italianno, cursive",
                        textAlign: "right"
                    }}
                >                {" "}
                    {item.price} Ft
                </Typography>
            </Grid>

            <Grid
                size={{ xs: 8, sm: 4 }}
                sx={{ my: "auto" }}
                data-aos="fade-right"
            >
                {token && <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                    <DoDisturbOnIcon onClick={() => handleDecreaseQuantity(item.id)} fontSize="large" id="cart-icon" />
                    <Typography variant="body1" sx={{ fontWeight: "bolder" }} >{item.quantity}</Typography>
                    <AddCircleIcon onClick={() => handleIncreaseQuantity(item.id)} fontSize="large" id="cart-icon" />
                    {isAddedToCart ?
                        <CheckCircleIcon sx={{ ml: 3, color: "green" }} fontSize="large" onClick={() => setIsAddedToCart(false)} /> :
                        <AddShoppingCartIcon onClick={() => addToCart(item)} sx={{ ml: 3 }} fontSize="large" id="cart-icon" />
                    }
                </Box>
                }
            </Grid>
        </Grid>
    )
}
