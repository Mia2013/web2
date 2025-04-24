import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import { useCart } from "../provider/CartItemsProvider";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const CartIconButton = () => {
    const { badgeContent } = useCart();

    return (
        <IconButton>
            <CartBadge badgeContent={badgeContent} color="primary" overlap="circular">
                <ShoppingCartIcon fontSize="small" />
            </CartBadge>
        </IconButton>
    );
};

export default CartIconButton;