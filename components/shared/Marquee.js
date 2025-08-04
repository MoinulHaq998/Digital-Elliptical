"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/assets/images/payment/1.webp",
  "/assets/images/payment/2.webp",
  "/assets/images/payment/3.webp",
  "/assets/images/payment/4.webp",
  "/assets/images/payment/5.webp",
  "/assets/images/payment/6.webp",
  "/assets/images/payment/7.webp",
  "/assets/images/payment/8.webp",
];


// Create three sets of images to ensure smooth looping
const duplicatedImages = [...images, ...images, ...images, ...images];

export function Marquee() {
  const [translateX, setTranslateX] = useState(0);
  const containerWidth = images.length * 300; // Width of one set of images

  useEffect(() => {
    const animation = () => {
      setTranslateX((prev) => {
        const newTranslate = prev - 1;
        // Reset to the middle set position when reaching the end of the first set
        if (Math.abs(newTranslate) >= containerWidth) {
          return -0.1; // Small offset to prevent visible jump
        }
        return newTranslate;
      });
    };

    const animationFrame = requestAnimationFrame(function animate() {
      animation();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [containerWidth]);

  return (
    <div className='relative w-full overflow-hidden py-6'>
      <div
        className='flex gap-6 whitespace-nowrap'
        style={{
          transform: `translateX(${translateX}px)`,
          willChange: "transform"
        }}
      >
        {duplicatedImages.map((image, idx) => (
           <div
           key={idx}
           className='relative image-gray h-[35px] w-[60px] flex-shrink-0 rounded-md overflow-hidden p-1'
         >
           <Image
             src={image}
             alt={`Scrolling image ${idx + 1}`}
             fill
             className='object-cover w-full h-full'
             priority={idx < 8}
           />
         </div>
        ))}
      </div>
    </div>
  );
}