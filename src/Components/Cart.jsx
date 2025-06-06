// src/components/Cart.jsx
import React from 'react';
import Products from '../assets/Products';
import Features from './Features';


const Cart = ({ title, image, desc, inStock, onAddToCart }) => (
  <div className="border rounded p-4 m-5 w-80 bg-white">
    <img  src={image} alt={title} className="w-full h-40 object-cover mb-2" />
    <h2 className="text-xl font-semibold p-1">{title}</h2>
    <p className="text-sm mb-2">{desc}</p>
    <div className="flex items-center justify-between">
      <p className={`text-sm font-medium ${inStock ? 'text-green-500' : 'text-red-500'}`}>{inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={onAddToCart} className="text-sm cursor-pointer font-medium bg-blue-800 py-1 px-3 rounded text-white">Add to Cart</button>
    </div>
  </div>
);

export default Cart;
