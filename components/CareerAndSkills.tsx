"use client"; // Ensures this is a client-side component

import React, { useState, useRef } from "react";
import Image from "next/image";
import useIntersectionObserver from "./hook/useIntersectionObserver";

interface CareerItem {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

const CareerAndSkills: React.FC = () => {
  // Example data for career histories and skills
  const careers: CareerItem[] = [
    {
      title: "Back End Engineer",
      company: "Taksu Tech",
      period: "Jul 2024 - Present",
      description:
        "1. Backend API Development. <br/> 2. Technical Services Support.",
      tech: [".NET Core", "MySql", "Redis", "Open API"],
    },
    {
      title: "Freelance Web Developer",
      company: "Personal Employee",
      period: "May 2024 - Present",
      description:
        "1. Website development. <br/> 2. New Features development. <br/> 3. Troubleshoot and Bug fixing. <br/> 4. Design and analyze website infrastructure technologies.",
      tech: [".NET Core", "MySql", "Vue.js", "Tailwind CSS"],
    },
    {
      title: "Freelance .Net Developer",
      company: "VOX ASIA",
      period: "Jan 2024 - Mar 2024",
      description:
        "1. Add new features for updating Job Order Status. <br/> 2. Add new features for displaying job order status each vehicles every time in real time update. <br/> 3. Maintenance new features and existing features to reduce new features impact and changes.",
      tech: [".NET Core", "SQL Server", "JavaScript", "jQuery", ".NET MVC"],
    },
    {
      title: "Software Developer",
      company: "TDS Indonesia",
      period: "Mar 2020 - Dec 2023",
      description:
        "1. Add new features for manage course and appointment for Teachers and Students. <br /> 2. Manage and enhance features for managing users at admin site. <br/> 3. Add and Maintenance features for Scoring, Study Path, Suggestion Courses. <br/> 4. Add and Manage widget courses and course contents. <br/> 5. Maintenance registration, report user analytic and payment modules. <br/> 6. Maintenance features and UI Implementation in Desktop Web and Mobile Web. <br/> 7. Maintenance and enhance authentication features from Identity local service to Auth0 and then to Azure AD B2C.",
      tech: [
        "JavaScript",
        "CSS",
        "RESTful WebServices",
        "jQuery",
        "Azure Service",
        "Azure Function",
        "Azure Active Directory",
        ".NET Core",
        ".NET MVC",
        "Redis",
        "React Js",
        "Microservices",
        "Open API",
        "SQL Server",
      ],
    },
    {
      title: "Web Developer",
      company: "PT Galang Kangin Digital",
      period: "Dec 2019 - Mar 2020",
      description:
        "1. Analyze and design system flow. <br/> 2. Maintenance existing project modules and enhance several features.",
      tech: ["Wordpress", "Mysql", "PHP"],
    },
    {
      title: "API Programmer",
      company: "PT Kirana Bali Wisata",
      period: "Mar 2019 - Nov 2019",
      description:
        "1. Create new API to connecting available Hotels Price List to Google Ads and Tripadvisor. <br/> 2. Maintenance API to connect third-party service for advertise available hotels price list. <br/> 3. Develop new Website booking hotels projects.",
      tech: ["PHP", "JavaScript", "RESTful WebServices", "MySql"],
    },
  ];

  const skills = [
    ".NET Core",
    "MySql",
    "Sql Server",
    "JavaScript",
    "React.js",
    "Vue.js",
    "Tailwind CSS",
  ];

  // Local state to track which career items are expanded
  const [expanded, setExpanded] = useState<number | null>(null);
  const [descHeight, setDescHeight] = useState<number | null>(null);
  const [isVisibleCareer, setIsVisibleCareer] = useState(false);
  const [isVisibleSkills, setIsVisibleSkills] = useState(false);

  const careerRef = useIntersectionObserver(setIsVisibleCareer);
  const skillsRef = useIntersectionObserver(setIsVisibleSkills);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleExpand = (index: number) => {
    if (expanded === index) {
      setDescHeight(null);
      setExpanded(null);
    } else {
      setExpanded(index);
      setTimeout(() => {
        if (descRefs.current[index]) {
          const currentHeight = descRefs.current[index]?.scrollHeight;
          setDescHeight(currentHeight);
        }
      }, 0);
    }
  };

  return (
    <section id="career-skills" className="bg-white py-16 px-8">
      {/* Career Histories */}
      <div
        ref={careerRef}
        className={`mb-12 transition-opacity duration-1000 ${
          isVisibleCareer ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Career Path
        </h2>
        <div className="space-y-6 lg:mx-32 md:mx-24 sm:mx-8">
          {careers.map((career, index) => (
            <div
              key={index}
              className="bg-gray-100 px-6 pt-6 pb-2 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {career.title}
                  </h3>
                  <p className="text-gray-500 font-bold">{career.company}</p>
                </div>

                <span className="text-gray-500 mt-2 md:mt-0">
                  {career.period}
                </span>
              </div>

              {/* Job Description (Expand/Collapse) */}
              <div
                ref={(el) => (descRefs.current[index] = el)}
                style={{
                  height: expanded === index ? `${descHeight}px` : "0px",
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out"
              >
                {/* Combined Content */}
                <div>
                  <div
                    className="mt-4 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: career.description }}
                  />
                  {/* <p className="mt-4 text-gray-600">{career.description}</p> */}
                  <div className="flex flex-wrap gap-2 mt-10">
                    {career.tech.map((techStack, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-sm text-xs font-medium"
                      >
                        {techStack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                {/* Arrow icon that rotates when expanded */}
                <span
                  className={`transition-transform transform mt-2.5 ${
                    expanded === index ? "rotate-180" : ""
                  }`}
                >
                  <Image
                    src="/down.png"
                    alt="arrow-down"
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div
        ref={skillsRef}
        className={`transition-opacity duration-1000 ${
          isVisibleSkills ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-md text-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerAndSkills;
