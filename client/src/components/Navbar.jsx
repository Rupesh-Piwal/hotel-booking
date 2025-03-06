import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          TripBooker
        </Link>
        <div className="flex space-x-4">
          <Link
            className="text-purple-600 bg-white px-4 py-2 rounded text-[16px] font-semibold"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-purple-600 bg-white px-4 py-2 rounded text-[16px] font-semibold"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
