"use client";
import "./globals.css";
import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <div className="flex flex-col bg-gray-50 dark:bg-gray-800 overflow-x-hidden h-full w-full">
          <div className="border-black/10 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-700 h-full relative pb-30">
            <header>
              <div className="relative h-full pb-30 border-gray-200 dark:border-gray-700 bg-[color2] dark:bg-gray-700 mx-auto">
                <div className="relative">
                  <div className="flex justify-center py-30 pb-5">
                    <Image
                      className="rounded-full shadow-xl w-32 h-32"
                      src="/avatar_peter.jpg"
                      alt="Khoa Tran"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="text-center">
                    <h1 className="text-2xl font-dm-sans tracking-tight font-bold dark:text-white">
                      Khoa Tran
                    </h1>
                    <p className="text-sm font-bold tracking-tight text-[#2b2c48] dark:text-gray-200 mb-2 mt-2">
                      Software && Cloud Engineer
                    </p>
                    <div className="flex justify-center mb-[-10px]">
                      <Image
                        src="https://assets.codepen.io/9277864/mood-rock.svg"
                        alt="Rock"
                        width="25"
                        height="25"
                      />
                      <br />
                    </div>
                  </div>
                  <div className="absolute top-1 left-2 p-4 flex flex-col gap-10">
                    <Image
                      src="/java.png"
                      alt="JAVA"
                      width="100"
                      height="100"
                    />
                    <Image
                      src="https://assets.codepen.io/9277864/programming.svg"
                      alt="Programming"
                      width="100"
                      height="100"
                    />
                    <Image src="/aws.png" alt="AWS" width="85" height="100" />
                  </div>
                  <div className="absolute top-1 right-0 p-4 flex flex-col gap-10">
                    <Image
                      src="/azure.png"
                      alt="Azure"
                      width="100"
                      height="100"
                    />
                    <Image
                      src="/kubernetes.png"
                      alt="Kubernetes"
                      width="100"
                      height="100"
                    />
                    <Image
                      src="/AI.png"
                      alt="AI"
                      width="100"
                      height="100"
                    />
                  </div>
                </div>
              </div>
              <nav className="flex items-center justify-center mt-28 md:mt-0">
                <ul className="flex flex-wrap justify-center">
                  <Link href="/bio">
                    <motion.div
                      className="p-5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <Image
                        src="https://assets.codepen.io/9277864/about-me.svg"
                        alt="Bio"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold dark:text-white text-center">
                        Bio
                      </p>
                    </motion.div>
                  </Link>
                  <Link href="/exp">
                    <motion.div
                      className="p-5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <Image
                        src="https://assets.codepen.io/9277864/office-work.svg"
                        alt="Experience"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold dark:text-white text-center">
                        Experience
                      </p>
                    </motion.div>
                  </Link>
                  <Link href="/certs">
                    <motion.div
                      className="p-5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <Image
                        src="/certificate.png"
                        alt="Portfolio"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold dark:text-white text-center">
                        Certificates
                      </p>
                    </motion.div>
                  </Link>
                  <Link href="/portfolio">
                    <motion.div
                      className="p-5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <Image
                        src="https://assets.codepen.io/9277864/page.svg"
                        alt="Portfolio"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold dark:text-white text-center">
                        Portfolio
                      </p>
                    </motion.div>
                  </Link>
                  <Link href="/contact">
                    <motion.div
                      className="p-5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <Image
                        src="https://assets.codepen.io/9277864/contact.svg"
                        alt="Contact"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold dark:text-white text-center">
                        Contact
                      </p>
                    </motion.div>
                  </Link>
                </ul>
              </nav>
              <div>{children}</div>
            </header>
          </div>
        </div>
      </body>
    </html>
  );
}
