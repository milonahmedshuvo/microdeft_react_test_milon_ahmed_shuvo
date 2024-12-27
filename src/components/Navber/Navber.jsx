/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      
        <div className="text-2xl font-bold">Logo</div>

     
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

      
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6`}
        >
          <Link to="/home" className="block hover:text-gray-300">
            Home
          </Link>  
          <Link to="/" clLinkssNLinkme="block hover:text-grLinky-300">
            Login
          </Link>
          
          <Link to="/register" className="block hover:text-gray-300">
           Register
          </Link>
          <Link to="/addData" className="block hover:text-gray-300">
             Add Data
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
