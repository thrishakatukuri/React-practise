import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-3xl font-bold ml-8">
        <Link to="/"className="hover:text-white">Thrisha</Link>
      </div>
      <div className="space-x-10 mr-8 text-xl">
        <Link to="/"         className="hover:text-black">Home</Link>
        <Link to="/About"    className="hover:text-black">About</Link>
        <Link to="/Contact"  className="hover:text-black">Contact</Link>
        <Link to="/Cart" className="hover:text-black">Cart</Link>
      </div>
    </nav>
  );
};

export {Header};
