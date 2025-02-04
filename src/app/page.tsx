"use client";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";
import ExpPage from "@/app/exp/page";
import PortfolioPage from "@/app/portfolio/page";
import ContactPage from "@/app/contact/page";
import TabName from "./components/types";

const Header = () => {
  const [activeTab, setActiveTab] = useState<TabName | null>(null);

  const handleTabClick = (tab: TabName) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  return (
    //use router with better performance
    <>
      <Page />
    </>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:w-1/2 text-center md:text-left"
      >
        {/* Wrap existing content with AnimatedSection */}
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Your Name</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <p className="text-xl mb-6">Cloud Engineer | Developer</p>
        </AnimatedSection>
      </motion.div>
    </div>
  );
};

export default Header;

// <div
//   className={`flex flex-col text-[color4] bg-[color3] overflow-x-hidden ${
//     activeTab ? "h-full" : "h-screen"
//   } w-full`}
// >
//   <div className={styles.container}>
//     <header>
//       <div className="relative h-full pb-30 border bg-[color2] mx-auto">
//         <div className="relative">
//           <div className="flex justify-center py-30 pb-5">
//             <Image
//               className="rounded-full shadow-xl w-32 h-32"
//               src="/avatar.png"
//               alt="Khoa Tran"
//               width="100"
//               height="100"
//             />
//           </div>
//           <div className="text-center">
//             <h1 className="text-2xl font-dm-sans tracking-tight font-bold">
//               Khoa Tran
//             </h1>
//             <p className="text-sm font-bold tracking-tight text-[#2b2c48] mb-5">
//               Full Stack Developer <br />
//               [Front-end: HTML, CSS, TypeScript] <br />
//               [Back-end: Java]
//             </p>
//             <div className="flex justify-center">
//               <Image
//                 src="https://assets.codepen.io/9277864/mood-rock.svg"
//                 alt="Rock"
//                 width="25"
//                 height="25"
//               />
//             </div>
//           </div>
//           <div className="absolute top-1 left-2 p-4 flex flex-col gap-10 opacity-40">
//             <Image
//               src="https://assets.codepen.io/9277864/html.svg"
//               alt="HTML"
//               width="100"
//               height="100"
//             />
//             <Image
//               src="https://assets.codepen.io/9277864/programming.svg"
//               alt="Programming"
//               width="100"
//               height="100"
//             />
//             <Image
//               src="https://assets.codepen.io/9277864/js.svg"
//               alt="JS"
//               width="100"
//               height="100"
//             />
//           </div>
//           <div className="absolute top-1 right-0 p-4 flex flex-col gap-10 opacity-40">
//             <Image
//               src="https://assets.codepen.io/9277864/css.svg"
//               alt="CSS"
//               width="100"
//               height="100"
//             />
//             <Image
//               src="https://assets.codepen.io/9277864/vue.svg"
//               alt="Vue"
//               width="100"
//               height="100"
//             />
//             <Image
//               src="https://assets.codepen.io/9277864/front-end.svg"
//               alt="Front-end"
//               width="100"
//               height="100"
//             />
//           </div>
//         </div>
//       </div>
//       <nav className="flex items-center justify-center mt-28 md:mt-0">
//         <ul className="">
//           <button className="p-5" onClick={() => handleTabClick("bio")}>
//             <Image
//               src="https://assets.codepen.io/9277864/about-me.svg"
//               alt="Bio"
//               width="80"
//               height="80"
//             />
//             <p className="font-bold">Bio</p>
//           </button>
//           <button
//             className="p-5"
//             onClick={() => handleTabClick("experience")}
//           >
//             <Image
//               src="https://assets.codepen.io/9277864/office-work.svg"
//               alt="Experience"
//               width="80"
//               height="80"
//             />
//             <p className="font-bold">Experience</p>
//           </button>
//           <button
//             className="p-5"
//             onClick={() => handleTabClick("portfolio")}
//           >
//             <Image
//               src="https://assets.codepen.io/9277864/page.svg"
//               alt="Portfolio"
//               width="80"
//               height="80"
//             />
//             <p className="font-bold">Portfolio</p>
//           </button>
//           <button className="p-5" onClick={() => handleTabClick("contact")}>
//             <Image
//               src="https://assets.codepen.io/9277864/contact.svg"
//               alt="Contact"
//               width="80"
//               height="80"
//             />
//             <p className="font-bold">Contact</p>
//           </button>
//         </ul>
//       </nav>
//       {activeTab === "bio" && <BioPage />}
//       {activeTab === "experience" && <ExpPage />}
//       {activeTab === "portfolio" && <PortfolioPage />}
//       {activeTab === "contact" && <ContactPage />}
//     </header>
//   </div>
// </div>
