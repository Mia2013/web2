import React from "react";

const Home = React.lazy(() => import("./Home"));
const Products = React.lazy(() => import("./Products"));

export const pagesForPublic = [
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
];


export const pagesForAuthenticatedOnly = [

  {
    name: "Kosár",
    path: "cart",
    component: <Products />,
  },
  {
    name: "Renelések",
    path: "purchases",
    component: <Products />,
  }

];
