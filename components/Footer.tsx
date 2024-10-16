"use client"; // Ensures this is a client-side component

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Bahtyar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
