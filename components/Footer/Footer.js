import React, { useState } from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import Img1 from "@/assets/banner/whatsapp.svg";
import Image from "next/image";

const Footer = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  const toggleChatBox = () => {
    setIsChatBoxOpen((prev) => !prev);
  };

  return (
    <>
      <FooterTop />
      <FooterBottom />
      <div
        className='fixed bottom-[20px] right-[20px] w-[50px] h-[50px]  z-50 flex items-center justify-center cursor-pointer'
        onClick={toggleChatBox}
      >
        <Image
          src={Img1}
          alt='banner'
          width={500}
          height={500}
          className='md:w-[full] h-[full] object-cover'
        />
      </div>
      {/* Chat Box */}
      {isChatBoxOpen && (
        <div className='fixed bottom-[90px] right-[20px] w-[300px] h-[400px] bg-white border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col'>
          {/* Chat Header */}
          <div className='p-4 bg-[#5cda5c] text-white rounded-lg font-semibold flex justify-between items-center'>
            <span>Chat</span>
            <button className='text-white font-bold' onClick={toggleChatBox}>
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className='flex-grow p-4 overflow-y-auto'>
            <p className='text-gray-700 text-sm'>Welcome to the chat!</p>
          </div>

          {/* Chat Input */}
          <div className='p-4 border-t border-gray-300'>
            <input
              type='text'
              placeholder='Type a message...'
              className='w-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#5cda5c]'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;