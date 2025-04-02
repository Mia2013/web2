import React, { useEffect, Suspense } from "react";
import { CssBaseline, Toolbar } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import BackToTop from "./components/BackToTopButton";
import ResponsiveAppBar from "./components/Nav/Nav";
import Loading from "./components/Loading";
import "./App.css";
import { pages } from "./pages/pages";
import { Footer } from "./components/Footer";

let theme = createTheme();
theme = responsiveFontSizes(theme);

theme = createTheme(theme, {
  palette: {
    text: {
      primary: "#a97142",
    },
    action: {
      active: "#a97142",
    },
    primary: {
      main: '#a97142',
    },
    background: {
      default: "#1E1F20"
    }
  },
});

function App() {

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      useClassNames: false,
      throttleDelay: 99,
      once: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Toolbar id="back-to-top-anchor" />
        <ResponsiveAppBar pages={pages} />
        <Suspense fallback={<Loading />}>
          <Routes>
            {pages.map((page) => (
              <Route key={page.name} path={page.path} element={page.component} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <BackToTop />
        </Suspense>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
