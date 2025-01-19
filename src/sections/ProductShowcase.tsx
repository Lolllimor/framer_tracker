'use client';
import productImage from '@/assets/product-image.png';
import Image from 'next/image';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className=" mt-10 " />
          <motion.img
            height={262}
            width={262}
            src={pyramidImage.src}
            alt="Pyramid Image"
            className="absolute -right-36 -top-32 hidden md:block"
            style={{
              translateY,
            }}
          />
          <motion.img
            height={248}
            width={248}
            src={tubeImage.src}
            alt="Tube Image"
            className="absolute -left-36 bottom-24 hidden md:block"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
