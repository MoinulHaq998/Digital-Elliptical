import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ServicesTab = ({ tabs, tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].tab);

  return (
    <div className="bg-gray-100 min-h-[400px] py-4">
      <div className="container mx-auto mt-10 px-4 lg:px-36 h-[100%] md:py-10 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 w-full">
          <div className="col-span-1 md:col-span-4">
            <div className="flex flex-col justify-center">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`cursor-pointer group px-3 relative py-3 lg:w-full md:w-[80%] text-start pb-2 mb-5`}
                  onClick={() => setActiveTab(tab.tab)}
                >
                  <span className="text-white relative z-10 uppercase text-lg">
                    {tab.name}
                  </span>
                  <span className="z-10 relative uppercase font-medium text-lg text-black group-hover:text-white duration-300">
                    {tab.spanText ? tab.spanText : ""}
                  </span>
                  {/* Underline (span) with hover effect */}
                  <span className="absolute bottom-0 left-0 w-[13%] h-[100%] bg-primary group-hover:w-full transition-all duration-700"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-8">
            <div className="mt-2">
              {tabsData[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="flex md:items-start items-center justify-center flex-col"
                >
                  {item.head && (
                    <div className="description">
                      <h4 className="text-3xl font-semibold text-[#212529] mb-3">
                        {item.head}
                      </h4>
                      <p className="mb-4 text-start text-[#212529] ">
                        {item.dis}
                      </p>
                    </div>
                  )}

                  <div className="flex md:justify-start justify-center items-center">
                    <div className="flex items-center justify-center md:justify-center md:gap-x-6 gap-x-11 flex-wrap">
                      {item?.icons?.map((iconItem, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="md:px-4 px-2 cursor-pointer hover:shadow-xl flex-col rounded-xl flex items-center justify-center py-3 md:w-32 w-20 duration-500 text-center"
                        >
                          <div>
                            <Image src={iconItem.icon} priority={true} alt="" width={60} height={60} />
                          </div>
                          {/* <div className="md:h-16 md:w-16 h-14 w-14 rounded-full bg-[#152331] flex items-center justify-center mb-3">
                            <Icon
                              icon={iconItem.icon}
                              className="md:h-10 md:w-10 h-8 w-8 !text-white"
                            />
                          </div> */}
                          <h6 className="md:text-sm mt-2 text-gray-600 text-[11px]">
                            {iconItem.name}
                          </h6>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTab;
