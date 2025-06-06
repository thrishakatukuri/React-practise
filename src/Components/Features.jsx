// src/components/Features.jsx
import React, { useState } from 'react';
import Products from '../assets/Products';
import Cart from './Cart';

const Features = () => {
    const [cart, setCart] = useState([]);

    const handleCart = (product) => {

        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            let updatedCart;
            if (existing) {
                updatedCart = prevCart.map(item =>item.id === product.id? { ...item, quantity: item.quantity + 1 }: item);
            } else {
                updatedCart = [...prevCart, { ...product, quantity: 1 }];
            }

            console.log('🛒 Cart Items:', updatedCart.map(item => ({
                title: item.title,
                description: item.description,
                inStock: item.inStock,
                quantity: item.quantity
            })
        ));
            return updatedCart;
        });
    };
    return (
        <div className="flex flex-wrap justify-center p-6 bg-gray-100">
            {Products.map(product => (
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
