import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {  // Receive cart here
  // const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-3xl font-bold ml-8">
        <Link to="/" className="hover:text-white">Thrisha</Link>
      </div>
      <div className="space-x-10 mr-8 text-xl flex items-center">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/About" className="hover:text-black">About</Link>
        <Link to="/Contact" className="hover:text-black">Contact</Link>
        <Link to="/Cart" className="hover:text-black flex items-center">
          Cart
          <span className="ml-1 flex items-center justify-center text-sm font-bold bg-orange-500 text-white rounded-full w-6 h-6">
            {cart.length}
          </span>
          {/* <span className="ml-1 flex items-center justify-center text-sm font-bold bg-orange-500 text-white rounded-full w-6 h-6">
            {cartCount}
          </span>        */}

        </Link>
      </div>
    </nav>
  );
};

export { Header };
