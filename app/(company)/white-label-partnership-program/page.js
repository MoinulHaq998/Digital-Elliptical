"use client";

import React, { useState } from "react";
import BannerPartnerShip from "@/assets/company/partner.webp";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ThemeButton from "@/components/ui/ThemeButton";
import CustomerImg from "@/assets/company/customer.webp";
import promise1 from "@/assets/company/promise/1.svg";
import promise2 from "@/assets/company/promise/2.svg";
import promise3 from "@/assets/company/promise/3.svg";
import promise4 from "@/assets/company/promise/4.svg";
import promise5 from "@/assets/company/promise/5.svg";
import Award1 from "@/assets/company/award/circle1.webp";
import Award2 from "@/assets/company/award/circle2.webp";
import Award3 from "@/assets/company/award/circle3.webp";
import ReactModal from "react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      skype: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Full Name must be at least 3 characters")
        .required("Full Name is required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email Address is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Phone Number must be numeric")
        .min(10, "Phone Number must be at least 10 digits")
        .required("Phone Number is required"),
      skype: Yup.string().required("Skype ID is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      alert("Form Submitted Successfully!");
      resetForm(); // Resets the form to its initial values
    },
  });
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    const confirmClose = window.confirm(
      "Are you sure you want to close the modal?"
    );
    if (confirmClose) {
      setIsOpen(false);
    }
  };

  const promise = [
    { img: promise1, title: "Proven Technological process and skillset" },
    { img: promise2, title: "Trust via proper NDA, SLA/MSA in place" },
    {
      img: promise3,
      title:
        "Well established team, resources, marketing collaterals, communication methods etc",
    },
    { img: promise4, title: "Global Clientele" },
    { img: promise5, title: "Multiple service partnership under one-roof." },
  ];
  const cardData = [
    {
      no: "01",
      title: "Brand Extension Opportunity",
      description:
        "Directly contact the company, or have companies come to us Offer a partnership plan.",
    },
    {
      no: "02",
      title: "Collaborate",
      description:
        "Construct the Partnership Make a contract, then sign it Create a cross-promotional campaign Plan ahead to meet client demands by setting targets.",
    },
    {
      no: "03",
      title: "Access to Brand assets",
      description:
        "Access to marketing materials, outreach, and devoted resource allocation. Access to our content and marketing materials library..",
    },
    {
      no: "04",
      title: "Pre-sale assistance",
      description:
        "An extended member of your sales team is a dedicated sales resource We will support you in completing every deal.",
    },
    {
      no: "05",
      title: "Onboarding & Development Execution",
      description:
        "Promise of a conflict-free channel Customer participation for improved concept implementation.",
    },
    {
      no: "06",
      title: "Post Support",
      description:
        "Support after 30 days for greater client retention and satisfaction.",
    },
  ];
  const benifits = [
    {
      titile:
        "A high rate of return for no investment, OR an additional source of income without spending any money",
    },
    { titile: "No need to develop or recruit any business expertise" },
    {
      titile: "US performed all end-to-end management, support, and execution",
    },
    {
      titile:
        "Keep your current clients happy and stop them from switching to another full-service business",
    },
    {
      titile:
        "Maintain your experience and skill set while earning money from another agency easily and without fuss",
    },
    {
      titile:
        "It will be advantageous to work with a partner who has a track record of success, an open communication style, and reliable participation",
    },
    {
      titile:
        "Gain the advantage of being able to white label not just your services but also your accomplishments, team, resources, marketing materials, and nearly everything else you require",
    },
  ];
  return (
    <div>
      <div className="w-full lg:h-screen lg:-mt-10 lg:mb-10 mb-4">
        <Image
          src={BannerPartnerShip}
          alt=""
          className="w-full h-full lg:object-contain object-cover"
        />
      </div>

      <div className="lg:mt-16 mt-4">
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <h1 className="text-[#212529] lg:p-0 p-6 lg:text-[34px]  text-[24px] lg:leading-[34px] leading-[30px] text-center font-semibold">
            Reach New Heights By Joining Forces With Us{" "}
          </h1>
          <p className="text-[212529] text-[16px] -mt-10 lg:mt-0 leading-[24px] lg:w-[74%] w-[100%] p-4 text-center">
            The DigitalElliptical White label Partnership program is a great
            chance for those of you who want to expand your tech company and
            reach new heights. You can represent our brand for the expansion of
            your business thanks to our meticulous methodology and procedure.
            Discover how below.
          </p>
        </div>

        <div className="w-[80%] h-fit mx-auto mt-12 mb-10">
          <div className="grid grid-cols-12 gap-4 ">
            {cardData.map((item, index) => (
              <div
                className="col-span-12 sm:col-span-6 md:col-span-4 mb-16"
                key={index}
              >
                <div className="flex flex-col items-start gap-1 sm:px-10 px-2  bg-white">
                  <div>
                    <h1 className="text-gray-300 text-6xl font-bold mb-2">
                      {item.no}
                    </h1>
                  </div>
                  <div>
                    <h2 className="text-[#212529] text-xl font-semibold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[100%] h-fit mb-10">
          <div className="lg:w-[80%] w-[95%] h-full mx-auto shadow-md bg-white flex lg:flex-row md:flex-row flex-col">
            <div className="lg:w-[55%] md:w-[55%]  w-[100%] mb-10 p-8">
              <h1 className="text-[#212529] text-[28.8px] leading-[34.56px] font-semibold">
                Benefits of collaborating with Us
              </h1>
              <div className="mb-8">
                {benifits.map((benifit, idx) => (
                  <div key={idx} className="flex items-start gap-2 mt-6">
                    <span className="bg-[#2C5F7D] w-[20px] h-[20px] p-1 flex justify-center items-center rounded-full">
                      <Icon
                        icon="mingcute:check-fill"
                        width={14}
                        className="text-white text-center text-[14px]"
                      />
                    </span>
                    <span className="text-[#808080] text-[14px] leading-[15px]">
                      {benifit.titile}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <ThemeButton>Contact Us</ThemeButton>
              </div>
            </div>

            <div className="lg:w-[45%] md:w-[45%] mb-10 w-[100%] flex justify-center items-center   ">
              <div className="w-[80%] h-[70%]">
                <Image
                  src={CustomerImg}
                  alt=""
                  className=" w-[100%] h-[100%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-[80%] border lg:gap-0 gap-4  lg:p-10 p-4 flex lg:flex-row flex-col justify-between items-start lg:items-center h-full mx-auto">
            <div>
              <p className="text-[#212529] lg:text-[20px] text-[16px] font-semibold">
                Receive all the information about our exclusive collaboration
                program through email.
              </p>
              <p className="text-[#212529] mt-2 text-[15px] leading-[21px]">
                Provide your email address to receive it now.
              </p>
            </div>
            <div>
              <div>
                {/* Button to Open Modal */}
                <button
                  onClick={handleOpen}
                  className="bg-[#2C5F7D] px-6 py-[10px] text-white"
                >
                  submit
                </button>

                {/* Modal */}
                <ReactModal
                  isOpen={isOpen}
                  onRequestClose={handleClose}
                  className="bg-white p-6 rounded !z-50 shadow-lg lg:w-[65vw] md:w-[75vw] w-[90vw]  min-w-lg mx-auto "
                  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <div className="w-full h-[55px] -mt-6  border-b flex justify-end items-center">
                    <Icon
                      icon="ic:twotone-close"
                      width={30}
                      onClick={handleClose}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="bg-[#fbfbfb]   lg:p-12 p-2 rounded-lg mt-4">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="iconamoon:comment"
                        className="text-[#212529] text-[30px] leading-[36px] font-medium"
                      />
                      <h2 className="text-[#212529] text-[30px] leading-[36px] font-medium">
                        Let’s talk!
                      </h2>
                    </div>
                    <p className="text-[16px] leading-[24px]">
                      We’d love to hear what you are working on. Drop us a note
                      here and we’ll get back to you within 24 hours.
                    </p>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="grid grid-cols-2  gap-8 mt-8">
                        {/* Full Name Field */}
                        <div className="col-span-1">
                          <div className="relative mb-4 group">
                            <input
                              type="text"
                              name="fullName"
                              id="fullName"
                              className={`peer z-0 w-full border-b-2 ${
                                formik.touched.fullName &&
                                formik.errors.fullName
                                  ? "border-red-500"
                                  : "border-black"
                              } bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.fullName}
                            />
                            <label
                              htmlFor="fullName"
                              className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
                            >
                              Full Name
                            </label>
                            {formik.touched.fullName &&
                              formik.errors.fullName && (
                                <p className="text-red-500 text-sm mt-1">
                                  {formik.errors.fullName}
                                </p>
                              )}
                          </div>
                        </div>

                        {/* Email Address Field */}
                        <div className="col-span-1">
                          <div className="relative mb-4 group">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className={`peer w-full border-b-2 ${
                                formik.touched.email && formik.errors.email
                                  ? "border-red-500"
                                  : "border-black"
                              } bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                            />
                            <label
                              htmlFor="email"
                              className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
                            >
                              Email Address
                            </label>
                            {formik.touched.email && formik.errors.email && (
                              <p className="text-red-500 text-sm mt-1">
                                {formik.errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Phone Number Field */}
                        <div className="col-span-1">
                          <div className="relative mb-4 group">
                            <input
                              type="text"
                              name="phoneNumber"
                              id="phoneNumber"
                              className={`peer w-full border-b-2 ${
                                formik.touched.phoneNumber &&
                                formik.errors.phoneNumber
                                  ? "border-red-500"
                                  : "border-black"
                              } bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.phoneNumber}
                            />
                            <label
                              htmlFor="phoneNumber"
                              className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
                            >
                              Phone Number
                            </label>
                            {formik.touched.phoneNumber &&
                              formik.errors.phoneNumber && (
                                <p className="text-red-500 text-sm mt-1">
                                  {formik.errors.phoneNumber}
                                </p>
                              )}
                          </div>
                        </div>

                        {/* Skype Field */}
                        <div className="col-span-1">
                          <div className="relative mb-4 group">
                            <input
                              type="text"
                              name="skype"
                              id="skype"
                              className={`peer w-full border-b-2 ${
                                formik.touched.skype && formik.errors.skype
                                  ? "border-red-500"
                                  : "border-black"
                              } bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none`}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.skype}
                            />
                            <label
                              htmlFor="skype"
                              className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
                            >
                              Skype
                            </label>
                            {formik.touched.skype && formik.errors.skype && (
                              <p className="text-red-500 text-sm mt-1">
                                {formik.errors.skype}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-2">
                          <button
                            type="submit"
                            className="py-3 px-6 bg-primary text-white disabled:opacity-50"
                            disabled={!formik.isValid || formik.isSubmitting}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </ReactModal>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-fit mt-10  p-8 bg-[#FAFAFA]">
          <div className="">
            <h1 className="text-center text-[#212529]   text-[28px] font-semibold">
              What We Promise
            </h1>
            <p className="lg:w-[86%] w-[100%] mx-auto text-center">
              {" "}
              For a reason, we are pioneers. We are the perfect choice for
              partnership because we have a vast amount of experience in the
              field of tech development and a long list of clients.
            </p>

            <div className="flex lg:w-[90%] w-[100%] h-fit mt-8 !mb-10 mx-auto flex-wrap justify-center items-center gap-4">
              {promise.map((promise, idx) => (
                <div key={idx} className="w-[350px] p-6 h-[220px] flex flex-col lg:justify-start justify-center lg:items-start items-center  rounded-md bg-white shadow-md">
                  <div className="w-[30%] h-[70px] lg:mx-0 mx-auto">
                    <Image
                      src={promise.img}
                      alt=""
                      className="w-[100%]  h-[100%]"
                    />
                  </div>
                  <h1 className="text-[#212529] !mb-4 text-wrap mt-4 font-semibold leading-[24px] text-[20px]">
                    {promise.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2   grid-cols-1 gap-10">
              {/* Left Section */}
              <div className="flex flex-col  items-center justify-center text-center">
                <h3 className="text-2xl md:text-4xl text-[#212529] font-bold mb-6">
                  Awards & Recognition
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <Image
                    src={Award1}
                    alt="award img"
                    width={1700}
                    height={2000}
                    className="w-[75px] md:w-[95px] grayscale hover:grayscale-0 scale-100 hover:scale-125 cursor-pointer transition-all duration-500 ease-out"
                  />
                  <Image
                    src={Award2}
                    alt="award img"
                    width={1700}
                    height={2000}
                    className="w-[75px] md:w-[95px] grayscale hover:grayscale-0 scale-100 hover:scale-125 cursor-pointer transition-all duration-500 ease-out"
                  />
                  <Image
                    src={Award3}
                    alt="award img"
                    width={1700}
                    height={2000}
                    className="w-[75px] md:w-[95px] grayscale hover:grayscale-0 scale-100 hover:scale-125 cursor-pointer transition-all duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Right Section */} 
              <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 lg:gap-6 gap-10 mt-10 md:mt-16 mb-10 md:mb-16">
                  {/* Stats */}
                  <div className="flex items-center justify-center flex-col flex-wrap text-center">
                    <h4 className="flex items-center lg:text-4xl text-[#212529] text-2xl md:text-3xl mb-1 font-bold">
                      135{" "}
                      <Icon
                        icon="ic:sharp-plus"
                        width="24"
                        height="24"
                        className="font-bold"
                      />
                    </h4>
                    <h4 className="text-lg md:text-2xl text-primary">
                      Engineers
                    </h4>
                  </div>
                  <div className="flex items-center justify-center flex-col text-center">
                    <h4 className="flex items-center lg:text-3xl text-xl text-[#212529] md:text-2xl mb-1 font-bold">
                      1275{" "}
                      <Icon
                        icon="ic:sharp-plus"
                        width="24"
                        height="24"
                        className="font-bold"
                      />
                    </h4>
                    <h4 className="text-lg md:text-2xl text-primary">
                      Project Delivered to Clients
                    </h4>
                  </div>
                  <div className="flex items-center justify-center flex-col text-center">
                    <h4 className="flex items-center lg:text-4xl text-[#212529] text-2xl md:text-3xlmb-1 font-bold">
                      475{" "}
                      <Icon
                        icon="ic:sharp-plus"
                        width="24"
                        height="24"
                        className="font-bold"
                      />
                    </h4>
                    <h4 className="text-lg md:text-2xl text-primary">
                      Customers worldwide
                    </h4>
                  </div>
                  {/* Inspired Section */}
                  <div className="min-w-32 max-w-72 text-center mx-auto count_head cursor-pointer  px-6 lg:py-10 py-2  text-white">
                    <h4 className="text-2xl md:text-4xl">Inspired By Our Vision</h4>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>



      </div>
    </div>
  );
}
