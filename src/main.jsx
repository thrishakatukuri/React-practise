import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { PromoBanner } from './PromoBanner.jsx';
import { Header } from "./Header";
import { AddToCart } from './AddToCart.jsx';
// import tailwindcss from '@tailwindcss/vite';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <PromoBanner />
    <Header />
    <AddToCart />
  </>
);
