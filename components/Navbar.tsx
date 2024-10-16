"use client"; // Ensures this is a client-side component

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    toggleMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Burger Icon */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <button className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex hidden md:block`}>
          <button
            onClick={() => handleScroll("header")}
            className="hover:text-gray-400 px-4"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("career-skills")}
            className="hover:text-gray-400 px-4"
          >
            Career & Skills
          </button>
          <button
            onClick={() => handleScroll("portfolio")}
            className="hover:text-gray-400 px-4"
          >
            Portfolio
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="hover:text-gray-400 px-4"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-gray-400 px-4"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu - For extra style */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-800 text-white`}
      >
        <button
          onClick={() => handleScroll("header")}
          className="block hover:text-gray-400 px-4 py-2"
        >
          Home
        </button>
        <button
          onClick={() => handleScroll("career-skills")}
          className="block hover:text-gray-400 px-4 py-2"
        >
          Career & Skills
        </button>
        <button
          onClick={() => handleScroll("portfolio")}
          className="block hover:text-gray-400 px-4 py-2"
        >
          Portfolio
        </button>
        <button
          onClick={() => handleScroll("services")}
          className="block hover:text-gray-400 px-4 py-2"
        >
          Services
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="block hover:text-gray-400 px-4 py-2"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
