import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sections from "./components/Sections";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact/Contact";
import CareerNav from "./components/pages/Contact/CareerNav";
import AboutNav from "./components/pages/AboutPage/AboutNav";
import ServiceNav from "./components/pages/ServicePage/ServiceNav";
import PortfolioNav from "./components/pages/PortfolioPage/PortfolioNav";
import AppDev from "./components/pages/ServicePage/AppDevelopment/AppDev";
import ScrollToTop from "./components/ScrollToTop";
import FAQs from "./components/pages/Contact/FAQs";
import WebDev from "./components/pages/ServicePage/WebDevelopment/WebDev";
import GraphicDev from "./components/pages/ServicePage/GraphicDesigning/GraphicDev";
import DigitalMarketing from "./components/pages/ServicePage/DigitalMarketing/DigitalMarketing";
import ScrollUp from "./components/ScrollUp";
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
    colors: {
      btn: "#05688d",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Sections />} />
            <Route path="/services" element={<ServiceNav />} />
            <Route path="/service-app" element={<AppDev />} />
            <Route path="/service-web" element={<WebDev />} />
            <Route path="/service-graphic" element={<GraphicDev />} />
            <Route path="/service-marketing" element={<DigitalMarketing />} />
            <Route path="/portfolio" element={<PortfolioNav />} />
            <Route path="/about" element={<AboutNav />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<CareerNav />} />
            <Route path="/faq" element={<FAQs />} />
          </Routes>
        </BrowserRouter>
        <ScrollUp />
      </ThemeProvider>
    </>
  );
};

export default App;
