import React from "react";
import { Link } from "react-router-dom";
import Features from "../Components/Features";

const Home = () => {
    return (
        <>
        <div className=" bg-gray-100">
        <center className="text-3xl pt-10 font-bold bg-gray-100">
            <h1>Recent Products</h1>
        </center>
       <center>
         <div className="flex space-x-4 justify-center p-10">
            <button className="border cursor-pointer transition-all ease-in-out duration-300 bg-gray-200 hover:bg-blue-100 hover:border-black hover:text-black rounded px-3.5 py-1.5 w-50">Men         </button><br />
            <button className="border cursor-pointer transition-all ease-in-out duration-300 bg-gray-200 hover:bg-blue-100 hover:border-black hover:text-black rounded px-3.5 py-1.5 w-50">Women       </button><br />
            <button className="border cursor-pointer transition-all ease-in-out duration-300 bg-gray-200 hover:bg-blue-100 hover:border-black hover:text-black rounded px-3.5 py-1.5 w-50">Electronics </button><br />
            <button className="border cursor-pointer transition-all ease-in-out duration-300 bg-gray-200 hover:bg-blue-100 hover:border-black hover:text-black rounded px-3.5 py-1.5 w-50">Jewelery    </button><br />
        </div>
       </center>
        <Features />
        </div>
        </>
    );
};

export { Home };
