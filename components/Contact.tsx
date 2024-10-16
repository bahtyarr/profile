"use client"; // Ensures this is a client-side component

import React, { useState } from "react";
import Image from "next/image";
import useIntersectionObserver from "./hook/useIntersectionObserver";

const Contact: React.FC = () => {
  const [isVisibleSection, setIsVisibleSection] = useState(false);

  const contactRef = useIntersectionObserver(setIsVisibleSection);

  return (
    <section id="contact" className="bg-white py-16 px-8">
      <div
        ref={contactRef}
        className={`mb-6 transition-opacity duration-1000 ${
          isVisibleSection ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Me
        </h2>

        <div className="flex justify-center space-x-4 mt-12">
          <a
            href="https://www.linkedin.com/in/mr-bahtyar-258965b7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition duration-300 hover:scale-125 hover:shadow-md"
          >
            <Image
              src="/linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
          </a>
          <a
            href="https://github.com/bahtyarr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black transition duration-300 hover:scale-125 hover:shadow-md"
          >
            <Image
              src="/github.png"
              alt="github"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
          </a>
          <a
            href="mailto:bahtyar11@gmail.com"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black transition duration-300 hover:scale-125 hover:shadow-md"
          >
            <Image
              src="/mail.png"
              alt="email"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
