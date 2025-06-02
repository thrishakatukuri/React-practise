import React from "react";

export const Header = () => {
// export const Header = ({ cartCount }) => {

    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">Thrisha</div>

            <nav className="space-x-6 text-gray-700 font-medium">
                <a href="#" className="hover:text-blue-600 transition duration-200">Home</a>
                <a href="#" className="hover:text-blue-600 transition duration-200">Contact</a>
                <a href="#" className="hover:text-blue-600 transition duration-200">cart
                    {/* Cart<sup className="text-sm text-red-600">{cartCount}</sup> */}
                </a>
            </nav>
        </header>
    );
};
