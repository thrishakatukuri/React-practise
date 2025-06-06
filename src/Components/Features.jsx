import React from 'react';
import Products from '../assets/Products';
import Cart from './Cart';

const Features = ({ cart, setCart, category }) => {
  const handleCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  
  const filteredProducts = Products.filter((product) => {
    if (category === "all") return true;
    return product.category.toLowerCase() === category.toLowerCase();
  });

  return (
    <div className="flex flex-wrap justify-center p-6 bg-gray-100">
      {filteredProducts.map((product) => (
        <Cart
          key={product.id}
          title={product.title}
          image={product.image}
          desc={product.description}
          inStock={product.inStock}
          onAddToCart={() => handleCart(product)}
        />
      ))}
    </div>
  );
};

export default Features;
