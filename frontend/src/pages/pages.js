import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartIconButton from "../components/CartIconButton";

const Home = React.lazy(() => import("./Home"));
const Products = React.lazy(() => import("./Products"));
const Cart = React.lazy(() => import("./Cart"));
const Profile = React.lazy(() => import("./Profile"));

export const pagesForPublic = [
  {
    name: "Kezdőlap",
    path: "/",
    component: <Home />,
  },
  {
    name: "Boraink",
    path: "wines",
    component: <Products />,
  },
];


export const pagesForAuthenticatedOnly = [
  {
    name: "Kosár",
    path: "cart",
    component: <Cart />,
    icon: <CartIconButton />
  },
  {
    name: "Adatlap",
    path: "profile",
    component: <Profile />,
    icon: <AccountCircleIcon />
  },

];
