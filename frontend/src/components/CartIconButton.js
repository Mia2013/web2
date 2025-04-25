import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import { useWebshop } from "../provider/WebshopProvider";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const CartIconButton = () => {
  const { badgeContent } = useWebshop();

  return (
    <CartBadge badgeContent={badgeContent} color="primary" overlap="circular">
      <ShoppingCartIcon fontSize="small" />
    </CartBadge>
  );
};

export default CartIconButton;