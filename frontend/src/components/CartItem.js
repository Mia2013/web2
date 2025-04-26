import React from 'react'
import { Typography, Box, IconButton, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { useWebshop } from "../provider/WebshopProvider";

const CartItem = ({ item }) => {
    const { removeCartItems, formatPrice } = useWebshop();

    const handleRemoveItemFromCart = (cartItemId) => {
        removeCartItems({ cartItemId });
    }

    return (
        <Box key={item.name} sx={{ my: 3, display: 'flex', justifyContent: "space-between" }} >
            <div>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: "Italianno, cursive",
                    }}
                    data-aos="fade-right"
                >
                    {item.name}
                </Typography>
            </div>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3 }} data-aos="fade-left"
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: "Italianno, cursive",
                    }}
                >
                    {item.quantity} db
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: "Italianno, cursive",
                    }}
                >
                    {formatPrice(item.quantity * item.price)} Ft
                </Typography>
                <IconButton onClick={() => handleRemoveItemFromCart(item.cartItem_id)}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default CartItem;