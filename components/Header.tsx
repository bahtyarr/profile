"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header: React.FC = () => {
  const words = ["Web Developer", "IT Consultant", "Bugs Finder"];
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedRef.current!, options);

    return () => {
      typed.destroy();
    };
  }, [words]);

  return (
    <section
      id="header"
      className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-100 py-20"
    >
      {/* Profile Image */}
      <div className=" lg:mr-8 mb-8 lg:mb-0 w-48 h-48 lg:w-1/3 bg-gray-200 lg:h-1/2 relative mb-8 lg:mb-0 lg:mr-8 mx-auto lg:mx-0 rounded-full">
        <Image
          priority={true}
          src="/profile.png"
          alt="profile"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%" }}
          className="profile-image-wrapper rounded-full object-cover h-auto"
        />
      </div>
      <div className="text-center lg:text-left">
        {/* Name */}
        <h1 className="text-3xl font-bold text-gray-400 mb-2 sm:text-4xl lg:text-5xl">
          Hi, My name <span className="text-gray-800">Bahtyar</span>
        </h1>
        {/* Typing Animation */}
        <h2 className="text-2xl font-bold text-gray-400 mb-2 sm:text-3xl lg:text-4xl">
          I Am a <span className="text-gray-800" ref={typedRef}></span>{" "}
        </h2>

        {/* Short Bio */}
        <p className="text-sm lg:text-lg text-gray-600 max-w-lg mt-4 lg:mt-8">
          Specializing in Websites Development. With a strong background in IT,
          I am dedicated to delivering top-quality results.
        </p>
      </div>
    </section>
  );
};

export default Header;
