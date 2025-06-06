import React, { useState } from "react";
import Features from "../Components/Features";

const Home = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <div className="bg-gray-100">
        <center className="text-3xl pt-10 font-bold bg-gray-100">
          <h1>Recent Products</h1>
        </center>
        <center>
          <div className="flex space-x-4 justify-center p-10 flex-wrap">
            {["all", "men", "women", "electronics", "jewelery"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="border cursor-pointer transition-all ease-in-out duration-300 bg-gray-200 hover:bg-blue-100 hover:border-black hover:text-black rounded px-3.5 py-1.5 w-32 capitalize"
              >
                {cat}
              </button>
            ))}
          </div>
        </center>

        {/* Pass selectedCategory down */}
        <Features cart={cart} setCart={setCart} category={selectedCategory} />
      </div>
    </>
  );
};

export { Home };
