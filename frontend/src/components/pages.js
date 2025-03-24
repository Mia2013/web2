import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Products = React.lazy(() => import("../pages/Products"));
const Contact = React.lazy(() => import("../pages/Contact"));

export const pages = [
  {
    name: "Kezdőlap",
    to: "back-to-top-anchor",
    component: <Home />,
  },

  {
    name: "Rólunk",
    to: "about",
    component: <About />,
  },
  {
    name: "Boraink",
    to: "wines",
    component: <Products />,
  },
  {
    name: "Kapcsolat",
    to: "contact",
    component: <Contact />,
  },
];
