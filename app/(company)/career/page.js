"use client";

import React, { useEffect, useRef } from "react";
import CareerImg1 from "@/assets/company/career/career-1.webp";
import CareerImg2 from "@/assets/company/career/career-2.webp";
import CareerImg3 from "@/assets/company/career/career-3.webp";
import CareerImg4 from "@/assets/company/career/career-4.webp";
import CareerImg5 from "@/assets/company/career/career-5.webp";
import CareerImg6 from "@/assets/company/career/career-6.webp";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function page() {
  const revealRefs = useRef([]);

const addToRefs = (el) => {
  if (el && !revealRefs.current.includes(el)) {
    revealRefs.current.push(el);
  }
};

useEffect(() => {
  const handleScroll = () => {
    revealRefs.current.forEach((ref) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        ref.classList.add("active");
      } else {
        ref.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  
  // Run once on mount to check for already visible elements
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []); // Dependency array ensures effect runs only once



  const vacancies = [
    {
      date: "January 10, 2025",
      department: "Technical",
      title: "Flutter Developer",
      description: `
      Proven experience in developing mobile applications using the Flutter framework. 
      Responsible for designing, building, and maintaining high-performance, scalable 
      mobile apps for both iOS and Android platforms. Collaborate with cross-functional 
      teams to deliver seamless front-end and back-end solutions. Proficiency in Dart 
      programming language, RESTful APIs, and third-party libraries. Strong understanding 
      of mobile app development best practices, UI/UX design, and optimizing app performance.`,
      experience: "Min 2 Years",
      qualification: "BSCS or relevant field",
      location: "Hyderabad",
    },
    {
      date: "January 10, 2025",
      department: "Design",
      title: "Graphic Designer",
      description: `
      Proven experience in graphic design, with a strong portfolio showcasing creativity 
      and technical skills. Responsible for creating visually appealing and effective designs 
      for digital and print media. Collaborate with marketing and development teams to produce 
      branding, advertising, and promotional materials. Proficiency in design software such 
      as Adobe Photoshop, Illustrator, and InDesign. Strong understanding of typography, 
      color theory, and user-centered design principles. Ability to work in a fast-paced 
      environment and meet deadlines.`,
      experience: "Min 2 Years",
      qualification: "BS in Graphic Design or relevant field",
      location: "Karachi",
    },
    {
      date: "January 10, 2025",
      department: "Technical",
      title: "MERN Stack Developer",
      description: `
      Proven experience in developing web applications using the MERN stack (MongoDB, 
      Express.js, React.js, Node.js). Responsible for designing, building, and maintaining 
      scalable and secure full-stack applications. Collaborate with cross-functional teams 
      to deliver optimized front-end and back-end solutions. Proficiency in RESTful APIs, 
      database management, and modern development tools. Strong understanding of JavaScript 
      frameworks and best practices to ensure seamless user experiences and robust application 
      performance.`,
      experience: "Min 2 Years",
      qualification: "BSCS",
      location: "Karachi",
    },
    {
      date: "January 10, 2025",
      department: "Technical",
      title: "Laravel Developer",
      description: `
      Proven experience in developing web applications using the Laravel framework. Responsible for designing, building, and maintaining high-performance, scalable, and secure backend systems. Collaborate with cross-functional teams to integrate front-end elements with server-side logic. Proficiency in working with databases, RESTful APIs, and modern development tools. Strong understanding of MVC architecture and best coding practices to deliver seamless, efficient applications.  `,
      experience: "Min 2 Years",
      qualification: "BSCS ",
      location: "Hyderabad ",
    },
    {
      date: "January 10, 2025",
      department: "Technical",
      title: "React Native Developer",
      description: `
      "Proven experience in developing mobile applications for both Android and iOS platforms using React Native. Responsible for designing, building, and maintaining robust and efficient applications with clean, scalable code. Collaborate effectively with cross-functional teams and integrate native modules as needed. Proficiency with tools like Xcode and Android Studio to create smooth, responsive, and visually appealing user interfaces across both platforms."  `,
      experience: "Min 1 Years",
      qualification: "BSCS ",
      location: "Hyderabad ",
    },
  ];

  return (
    <div>
      <div className="container  py-16">
        {/* Section Header */}
        <h1 className="text-[35px] md:text-[50px] lg:text-[60px] font-bold text-center leading-[1.2]">
          Careers
        </h1>
        {/* Subheadings */}
        <div className="mt-4 space-y-4">
          <h5 className="text-[18px] md:text-[22px] lg:text-[25px] leading-[1.2] text-center px-4 text-gray-700">
            Step into a world of opportunities with Digital Elliptical.
          </h5>
          <h5 className="text-[18px] md:text-[22px] lg:text-[25px] leading-[1.2] text-center px-4 text-gray-700">
            Elevate your career by joining the digital revolution with us.
          </h5>
          <h5 className="text-[18px] md:text-[22px] lg:text-[25px] leading-[1.2] text-center px-4 text-gray-700">
            Shape the future with Digital Elliptical where innovation meets excellence.
          </h5>
        </div>
        {/* Why Join Section */}
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-center leading-[1.2] mt-12">
          Why Join Digital Elliptical?
        </h1>
        {/* Highlights */}
        <div className="mt-4 space-y-4 px-4">
          <h5 className="text-[18px] md:text-[22px] lg:text-[25px] text-[#087984] leading-[1.2] text-center ">
            Calling all techies, innovators, developers, and free thinkers — your future starts here at Digital Elliptical.
          </h5>
          <h5 className="text-[18px] md:text-[22px] lg:text-[25px] text-[#087984] leading-[1.2] text-center ">
            Elliptical is the hub for techies, innovators, developers, and free thinkers ready to make an impact.
          </h5>
          <h5 className="text-[18px] md:text-[22px] lg:text-[25px] text-[#087984] leading-[1.2] text-center ">
            Techies, innovators, developers, and free thinkers — this is your place to shine and thrive.
          </h5>
          <h6 className="text-[18px] md:text-[22px] lg:text-[25px] text-[#087984] leading-[1.2] text-center ">
            You have come to the right place.
          </h6>
        </div>
        {/* Description */}
        <p className="text-gray-500 font-light text-[14px] md:text-[17px] lg:text-[20px] mt-8 text-center lg:w-[70%] w-[96%] mx-auto">
          Digital Elliptical is a forward-thinking software development company specializing in innovative digital solutions. From cutting-edge web and app development to tailored business software, we empower businesses to thrive in a digital-first world. With a focus on creativity, efficiency, and excellence, Digital Elliptical is your partner in driving digital transformation.
        </p>
      </div>

      <div className="w-[100%] h-fit  grid-cols-2 justify-center  bg-white gap-4 p-20 lg:grid md:gird hidden">
        {/* Row 1 */}
        <div className="flex flex-col gap-2">
          <div className="flex w-[100%] gap-2 h-[50%]">
            <div className="w-[50%] h-[100%] reveal-effect" ref={addToRefs}>
              <Image src={CareerImg1} alt="" className="w-full h-full" />
            </div>
            <div className="w-[50%] h-[100%] reveal-effect" ref={addToRefs}>
              <Image src={CareerImg2} alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="w-full h-[50%] reveal-effect" ref={addToRefs}>
            <Image src={CareerImg3} alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="flex w-[100%] h-full gap-2">
          <div className="w-[50%]">
            <div className="w-full h-full reveal-effect" ref={addToRefs}>
              <Image src={CareerImg4} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-2">
            <div className="w-[100%] h-[50%] reveal-effect" ref={addToRefs}>
              <Image src={CareerImg5} alt="" className="w-full h-full" />
            </div>
            <div className="w-[100%] h-[50%] reveal-effect" ref={addToRefs}>
              <Image src={CareerImg6} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden  w-full h-fit flex flex-col justify-center items-center p-8 gap-4">
        <div className="w-full h-[220px] object-contain">
          <Image
            src={CareerImg1}
            alt=""
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="w-full h-[220px] object-contain">
          <Image
            src={CareerImg2}
            alt=""
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="w-full h-[220px] object-contain">
          <Image
            src={CareerImg3}
            alt=""
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="w-full h-[220px] object-contain">
          <Image
            src={CareerImg4}
            alt=""
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="w-full h-[220px] object-contain">
          <Image
            src={CareerImg5}
            alt=""
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="w-full h-[220px] object-contain">
          <Image
            src={CareerImg6}
            alt=""
            className="w-full h-full object-cover"
          ></Image>
        </div>
      </div>

      <div className="flex lg:flex-col md:flex-col flex-col-reverse items-center justify-center min-h-screen bg-white px-4 lg:mt-0 md:mt-0 mt-20">
        <div className="max-w-4xl w-full">
          <div className="flex flex-col-reverse lg:flex-row md:flex-row items-start gap-8">
            {/* Left Column */}
            <div className="flex-1  border-gray-300 pr-8">
              <div className="space-y-12">
                {/* Application Step */}
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-end">
                      Application{" "}
                    </h3>
                    <p className="text-gray-600 text-right">
                      Submit your application through our website. Your resume
                      will be reviewed by our top-tier management.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 -mt-0">
                    <span className="w-[10px] h-[10px] rounded-full bg-gray-800 block  mt-3"></span>
                    <span className="w-[1px] h-[80px] block bg-gray-800 "></span>
                  </div>
                </div>

                {/* Interview Step */}
                <div className="flex  items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-end">
                      Interview{" "}
                    </h3>
                    <p className="text-gray-600 text-right">
                      Allow us to get to know you better through an interview.
                      We want to know all about your competencies, experience,
                      and work ethics.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 -mt-0">
                    <span className="w-[10px] h-[10px] rounded-full bg-gray-800 block  mt-3"></span>
                    <span className="w-[1px] h-[80px] block bg-gray-800 "></span>
                  </div>
                </div>

                {/* Onboarding Step */}
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-end">
                      On-boarding
                    </h3>
                    <p className="text-gray-600 text-right">
                      Congratulations! You did it! Sign the agreement contract
                      and start your venture with our group of innovators.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4 -mt-0">
                    <span className="w-[10px] h-[10px] rounded-full bg-gray-800 block  mt-3"></span>
                    <span className="w-[1px] h-[80px] block bg-gray-800 "></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 h-[70vh] lg:pl-20 md:pl-20 pl-0 ml-8 lg:border-l-[1px] md:border-l-[1px] border-gray-600">
              <h2 className="lg:text-[55px] md:text-[45px] text-[40px] text-black lg:leading-[60px] md:leading-[50px] leading-[40px] font-semibold  ">
                Our Recruitment Process
              </h2>
              <p className="text-gray-600 text-[16px] leading-[30px] font-light mt-4">
                We select talented candidates, who exhibit accomplished skills,
                innovative thinking, and potential for delivering extraordinary
                work. Follow our three-step process to become a valued member of
                Digital Elliptical Technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section >
        <div className="container mt-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-10">Open<span className="text-stroke">Vacancies</span> </h1>
            {vacancies.map((vacancy, index) => (
              <div
              key={index}
              className="bg-white p-6 mb-14 grid grid-cols-1 md:grid-cols-12 md:place-items-center gap-4"
            >
              {/* Left Section */}
              <div className="md:col-span-2 text-start md:text-end border-b md:border-b-0 md:border-r border-gray-400 pb-4 md:pb-0">
                <div className="pr-0 md:pr-4">
                  <p className="text-sm md:text-lg text-gray-600">{vacancy.date.split(",")[0]}</p>
                  <p className="text-[22px] md:text-[28px] font-bold text-gray-800">
                    {vacancy.date.split(",")[1].trim()}
                  </p>
                </div>
                <hr className="my-4 border-gray-400 hidden md:block" />
                <div className="pr-0 md:pr-4">
                  <p className="text-sm md:text-lg font-semibold text-gray-700">Department</p>
                  <p className="text-[22px] md:text-[28px] font-bold text-gray-800">{vacancy.department}</p>
                </div>
              </div>
            
              {/* Right Section */}
              <div className="md:col-span-8 text-start">
                <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">{vacancy.title}</h2>
                <p className="text-sm md:text-base mb-4">{vacancy.description}</p>
                <div className="block md:flex md:flex-row items-center md:space-x-8 space-x-0 space-y-4 md:space-y-0 text-gray-800">
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="text-sm font-semibold">{vacancy.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Qualification</p>
                    <p className="text-sm font-semibold">{vacancy.qualification}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-sm font-semibold">{vacancy.location}</p>
                  </div>
                </div>
              </div>
            
              {/* Apply Now Button */}
              <div className="md:col-span-2 mt-6 flex justify-center md:justify-end">
                <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:underline">
                  <span>Apply Now</span>
                  <span className="inline-block transform rotate-45">→</span>
                </button>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
