"use client"; // Ensures this is a client-side component

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import useIntersectionObserver from "./hook/useIntersectionObserver";

interface Service {
  title: string;
  description: string;
}

gsap.registerPlugin(Draggable);

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Web Development",
      description: "Building responsive and interactive websites.",
    },
    {
      title: "Bugs Finding",
      description:
        "Support to test the applications from a layman's point of view and produce the final report.",
    },
    {
      title: "IT Consultant",
      description:
        "Help to collect customer requirements, troubleshoot technical issues.",
    },
    {
      title: "Software Maintenance",
      description:
        "Support any software maintenance and the development of new features.",
    },
  ];

  const [isVisibleSection, setIsVisibleSection] = useState(false);
  const serviceRef = useIntersectionObserver(setIsVisibleSection);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cellRefs = useRef<HTMLDivElement[]>([]);
  const currentIndex = useRef(0);

  useEffect(() => {
    const cellWidth = 300;
    const totalCells = services.length;
    const proxy = document.createElement("div");

    const clampIndex = (index: number) => {
      return Math.max(0, Math.min(index, totalCells - 1));
    };

    const updateCards = (duration = 0.5) => {
      cellRefs.current.forEach((cell, i) => {
        const position = i - currentIndex.current;
        const scale = position === 0 ? 1 : 0.7;
        const opacity = position === 0 ? 1 : 0.5;

        gsap.to(cell, {
          x: position * cellWidth,
          scale: scale,
          opacity: opacity,
          duration: duration,
          ease: "power2.inOut",
        });
      });
    };

    updateCards(0);

    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % totalCells;
      updateCards(0.5);
    }, 5000);

    const draggable = Draggable.create(proxy, {
      type: "x",
      trigger: carouselRef.current,
      inertia: true,
      onDragEnd: function () {
        const dragDistance = this.x / cellWidth;
        const newIndex = clampIndex(
          currentIndex.current - Math.round(dragDistance)
        );

        if (newIndex !== currentIndex.current) {
          currentIndex.current = newIndex;
          updateCards(0.1);
        }

        gsap.set(this.target, { x: 0 });
      },
      snap: {
        x: (value) => Math.round(value / cellWidth) * cellWidth,
      },
    });

    return () => {
      clearInterval(interval);
      draggable.forEach((d) => d.kill());
    };
  }, [services.length]);

  return (
    <section id="services" className="bg-gray-100 py-16 px-8">
      <div
        ref={serviceRef}
        className={`mb-12 transition-opacity duration-1000 ${
          isVisibleSection ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Services
        </h2>

        <div
          ref={carouselRef}
          className="relative flex justify-center items-center w-full overflow-hidden"
          style={{ height: "400px" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cellRefs.current[index] = el!)}
              className="absolute bg-gray-800 text-white rounded-lg shadow-xl shadow-slate-300 p-8 transition-transform duration-500"
              style={{
                width: "300px",
                height: "400px",
                transformOrigin: "center",
                right: `calc(50% - 200px + ${index * 25}px)`,
              }}
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
