"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/animations";

const MotionDiv = motion.div;

const Page = () => {
  return (
    <MotionDiv
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="flex flex-col h-screen mr-50 md:ml-96"
    >
      <MotionDiv variants={fadeInUp} className="font-bold text-lg mb-3">
        Contact
      </MotionDiv>
      <MotionDiv variants={fadeInUp}>
        <div className="flex flex-row mb-5">
          <p className="p-1 pr-5 border-r border-gray-800">
            <Image
              src="https://assets.codepen.io/9277864/envelope-letter.svg"
              alt="Email Icon"
              width="25"
              height="25"
            />
          </p>
          <address className="ml-5">trankhoa758@gmail.com</address>
        </div>
        <div className="flex">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:scale-[1.009] mx-0 md:mx-0">
            <a
              href="https://github.com/khoatran1602"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Me on Github!
            </a>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Page;
