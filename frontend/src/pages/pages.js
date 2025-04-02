import React from "react";

const Home = React.lazy(() => import("./Home"));
const Products = React.lazy(() => import("./Products"));
const SignUp = React.lazy(() => import("./SignUp"));

export const pages = [
  {
    name: "Kezdőlap",
    path: "/",
    component: <><Home /></>,
  },


  {
    name: "Boraink",
    path: "wines",
    component: <Products />,
  },
  {
    name: "Regisztáció",
    path: "reviews",
    component: <SignUp />,
  },
];
