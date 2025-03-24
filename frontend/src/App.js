import React, { useEffect, Suspense } from "react";
import {Box, CssBaseline } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import BackToTop from "./components/BackToTopButton";
import ResponsiveAppBar from "./components/Nav/Nav";
import Loading from "./components/Loading";
// import FixedBottomNavigation from "./components/Footer";
import { pages } from "./components/pages";

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
          {/* <Toolbar id="back-to-top-anchor"/> */}


          <ResponsiveAppBar pages={pages} />
          <Suspense fallback={<Loading />}>
            <Box>
              {pages.map((item) => (
                <Box key={item.name}>{item.component} </Box>
              ))}
            </Box>

            <BackToTop />
          </Suspense>
          {/* <FixedBottomNavigation /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
