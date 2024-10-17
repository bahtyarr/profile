"use client"; // Ensures this is a client-side component

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useIntersectionObserver from "./hook/useIntersectionObserver";
import { prefix } from "@/app/prefix";

interface PortfolioItem {
  image: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      image: `${prefix}/booknpay.png`,
      title: "Book n Pay",
      description: "Online Travel Agent (OTA) Booking engine API Development.",
    },
    {
      image: `${prefix}/hoteldomestik.png`,
      title: "Hotel Domestik",
      description: "Online Travel Agent (OTA) Website Development.",
    },
    {
      image: `${prefix}/besthostels.png`,
      title: "Best Hostels",
      description: "Online Travel Agent (OTA) Website Development.",
    },
    {
      image: `${prefix}/e2platform.png`,
      title: "E2 Platform",
      description:
        "Educations for English test preparation website development platforms.",
    },
    {
      image: `${prefix}/siarta.png`,
      title: "Siartha",
      description: "College website system development platform.",
    },
    {
      image: `${prefix}/businesscahrteringsystem.png`,
      title: "Bus Chartering System",
      description: "API development for Bus Chartering System.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisibleSection, setIsVisibleSection] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const portfolioRef = useIntersectionObserver(setIsVisibleSection);

  const nextSlide = () => {
    setDirection("next");
    setPrevIndex(currentIndex); // Update previous index
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimating(true);
  };

  const prevSlide = () => {
    setDirection("prev");
    setPrevIndex(currentIndex); // Update previous index
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
    setIsAnimating(true);
  };

  // Reset animation state after transition duration
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="portfolio" className="bg-white py-16 px-8">
      <div
        ref={portfolioRef}
        className={`mb-12 transition-opacity duration-1000 ${
          isVisibleSection ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Portfolio
        </h2>

        <div className="relative mb-8">
          {/* Image Display */}
          <div className="flex justify-center mb-4 overflow-hidden relative">
            {/* Previous Image */}
            <div className={`animate-slide-fade duration-500`}>
              <Image
                priority={true}
                src={portfolioItems[prevIndex].image}
                alt={portfolioItems[prevIndex].title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "fit-content" }}
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>

            {/* Current Image */}
            <div
              className={`absolute transition-transform duration-200 ease-in-out transform ${
                isAnimating
                  ? direction === "next"
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
              onTransitionEnd={handleAnimationEnd}
            >
              <Image
                priority={true}
                src={portfolioItems[currentIndex].image}
                alt={portfolioItems[currentIndex].title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "fit-content" }}
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>

            {/* Previous Slide Button */}
            <button
              className="absolute ml-2.5 left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
              onClick={prevSlide}
            >
              <Image
                src={`${prefix}/left.png`}
                alt="arrow-left"
                width={20}
                height={20}
                className="rounded-full object-cover"
              />
            </button>

            {/* Next Slide Button */}
            <button
              className="absolute mr-2.5 right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
              onClick={nextSlide}
            >
              <Image
                src={`${prefix}/next.png`}
                alt="arrow-right"
                width={20}
                height={20}
                className="rounded-full object-cover"
              />
            </button>
          </div>

          {/* Title and Description Below Image */}
          <div className="text-center mb-4">
            <h3 className="md:text-3xl font-semibold text-gray-700 mb-2">
              {portfolioItems[currentIndex].title}
            </h3>
            <p className="md:text-xl text-gray-600 mb-4">
              {portfolioItems[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
