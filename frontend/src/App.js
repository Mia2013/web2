import React, { useEffect, Suspense } from "react";
import { CssBaseline, Toolbar } from "@mui/material";

import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import BackToTop from "./components/BackToTopButton";
import ResponsiveAppBar from "./components/Nav/Nav";
import Loading from "./components/Loading";
import { pagesForPublic, pagesForAuthenticatedOnly } from "./pages/pages";
import { Footer } from "./components/Footer";
import { useAuth } from "./provider/AuthProvider";


function App() {
  const auth = useAuth();

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
      <div className="App">
        <CssBaseline />
        <Toolbar id="back-to-top-anchor" />
        <ResponsiveAppBar pagesForPublic={pagesForPublic} />
        <Suspense fallback={<Loading />}>
          <Routes>
            {pagesForPublic.map((page) => (
              <Route key={page.name} path={page.path} element={page.component} />
            ))}
            
       
                {pagesForAuthenticatedOnly.map((page) => (
                  <Route key={page.name} path={page.path} element={page.component} />
                ))}
              
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <BackToTop />
        </Suspense>
        <Footer />
      </div>

  );
}

export default App;
