import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../Pages/Home";
import {Contact} from "../Pages/Contact";
import {About} from "../Pages/About";
import {Cart} from "../Pages/Cart";
import {Header} from "../Components/Header";
import { PromoBanner } from "../Components/PromoBanner";

const AppRouting = () => {
  return (
    <BrowserRouter>
    <PromoBanner />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
