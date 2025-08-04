import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "@/assets/apps/dummy/01.webp"
import img2 from "@/assets/apps/dummy/02.webp"
import img3 from "@/assets/apps/dummy/03.webp"
import img4 from "@/assets/apps/dummy/04.webp"
import img5 from "@/assets/apps/dummy/05.webp"
import img6 from "@/assets/apps/dummy/06.webp"
import img7 from "@/assets/apps/dummy/07.webp"
import Image from "next/image";

const MarqueeComponent = () => {

  const marqueeImage = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
  ]
  return (
    <div className='w-full h-32'>
      <Marquee speed={40} gradient={false}>
        <div className='flex p-2 text-xl items-center space-x-8'>
          {
            marqueeImage.map((item, index) => (
              <span className='flex-shrink-0' key={index}>
              <Image
                src={item.img}
                alt="feature-img"
                width={200}
                height={200}
                className='h-auto w-36'
              />
            </span>
            ))
          }
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
