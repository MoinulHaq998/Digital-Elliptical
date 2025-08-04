import { Icon } from "@iconify/react";
import React, { useState } from "react";
const Faq = ({title,dis,faqs}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleFAQ = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const toggleFAQ2 = (index) => {
    if (index === activeIndex2) {
      setActiveIndex2(null);
    } else {
      setActiveIndex2(index); // Expand the selected FAQ in second section
    }
  };

  return (
    <div className="w-full container mx-auto px-4 sm:px-10 lg:px-20 py-10">
      <div className="text-center mb-14 md:px-10 px-3">
        <h4 className="md:text-3xl text-xl text-[#212529] uppercase mb-3 font-bold">
         {title}
        </h4>
        <p className="md:text-[17px] text-[14x]">
        {dis}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* First FAQ Section */}
        <div className="w-full">
          {faqs?.slice(0, 4).map((faq, index) => (
            <div
              key={index}
              className="border-t border-gray-300  overflow-hidden py-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-3 px-4 text-xl md:leading-[24px] leading-[20px] font-bold focus:outline-none flex items-center justify-between"
              >
                <h3 className="font-semibold md:text-[18px] text-[#212529] text-[15px]">
                  {faq.question}
                </h3>
                <Icon
                  icon="basil:caret-right-solid"
                  className="md:text-[32px] text-[25px]"
                />
              </button>

              <div
                className={`transition-all duration-300 bg-gray-100 ease-in-out ${
                  activeIndex === index ? "max-h-[200px] p-4" : "max-h-0 p-0"
                }`}
                style={{ overflow: "hidden" }}
              >
                <p className="md:text-[16px] text-[14px]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second FAQ Section */}
        <div className="w-full">
          {faqs?.slice(4, 9).map((faq, index) => (
            <div
              key={index}
              className="border-t border-gray-300  overflow-hidden py-4"
            >
              <button
                onClick={() => toggleFAQ2(index)}
                className="w-full text-left py-3 px-4 text-xl font-bold focus:outline-none flex items-center justify-between"
              >
                <h3 className="font-semibold md:text-[18px] text-[#212529] text-[15px]">
                  {faq.question}
                </h3>
                <Icon
                  icon="basil:caret-right-solid"
                  className="md:text-[32px] text-[25px]"
                />
              </button>

              {/* Content visibility based on activeIndex2 */}
              <div
                className={`transition-all duration-300 bg-gray-100 ease-in-out ${
                  activeIndex2 === index ? "max-h-[200px] p-4" : "max-h-0 p-0"
                }`}
                style={{ overflow: "hidden" }}
              >
                <p className="md:text-[16px] text-[14px]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
