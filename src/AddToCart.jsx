// src/AddToCart.jsx
import React, { useState } from "react";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg";
import img6 from "./assets/images/img6.jpg";
import img7 from "./assets/images/img7.jpg";
import img8 from "./assets/images/img8.jpg";
import img9 from "./assets/images/img9.jpg";
import img10 from "./assets/images/img10.jpg";

export const AddToCart = () => {
  // 
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.name === product.name
      );

      if (existingProductIndex !== -1) {
        // Product already in cart, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        console.log("Cart Updated:", updatedCart);
        return updatedCart;
      } else {
        // Add new product with quantity = 1
        const newCart = [...prevCart, { ...product, quantity: 1 }];
        console.log("Product Added:", newCart);
        return newCart;
      }
    });
  };
  // 
  const products = [
    { name: "JBL Endurance Run Sports", price: "₹999", image: img1, originalPrice: "₹1,599" },
    { name: "boat Airdopes 203", price: "₹3,074", image: img2, originalPrice: "₹3,999" },
    { name: "boat Rockerz 518", price: "₹12,299", image: img8, originalPrice: "₹15,990" },
    { name: "JBL Tune 760NC", price: "₹5,999", image: img3, originalPrice: "₹7,999" },
    { name: "boat rockerz 255", price: "₹899", image: img4, originalPrice: "₹2,990" },
    { name: "Sony WH-1000XM4", price: "₹9,999", image: img5, originalPrice: "₹14,999" },
    { name: "Realme Buds Wireless 2", price: "₹1,799", image: img6, originalPrice: "₹2,999" },
    { name: "Noise Buds VS104", price: "₹1,299", image: img7, originalPrice: "₹2,499" },
    { name: "boAt Nirvana Ion", price: "₹2,299", image: img1, originalPrice: "₹3,499" },
    { name: "JBL Tune 230NC TWS", price: "₹4,799", image: img10, originalPrice: "₹6,999" },
    { name: "OnePlus Buds Z2", price: "₹4,499", image: img1, originalPrice: "₹5,999" },
    { name: "Boult Audio Z40", price: "₹1,099", image: img2, originalPrice: "₹2,499" },
    { name: "boAt Airdopes 161", price: "₹999", image: img3, originalPrice: "₹2,499" },
    { name: "pTron Bassbuds Duo", price: "₹799", image: img4, originalPrice: "₹2,000" },
    { name: "Infinity Glide 510", price: "₹1,699", image: img5, originalPrice: "₹3,499" },
    { name: "boAt Rockerz 550", price: "₹1,799", image: img6, originalPrice: "₹4,999" },
    { name: "Skullcandy Dime 2", price: "₹2,499", image: img7, originalPrice: "₹3,999" },
    { name: "Mivi Duopods A25", price: "₹1,199", image: img8, originalPrice: "₹2,999" },
    { name: "JBL Wave Beam", price: "₹3,999", image: img9, originalPrice: "₹5,999" },
    { name: "boAt Airdopes 141", price: "₹1,299", image: img10, originalPrice: "₹2,999" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
      {products.map((product, i) => (
        <div key={i} className="bg-white p-4 shadow-md rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-contain"
            onError={e => { e.target.onerror = null; e.target.src = img1 }}
          />
          <h3 className="mt-2 text-md font-semibold">{product.name}</h3>
          <div className="flex justify-between mt-1">
            <span className="text-green-600 font-bold">{product.price}</span>
            <span className="line-through text-gray-500">
              {product.originalPrice}
            </span>
          </div>
          <button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            // onClick={() => alert(`✅ "${product.name}" added to cart!`)}
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
