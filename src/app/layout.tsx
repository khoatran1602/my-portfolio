'use client';
import "./globals.css";
import { useEffect } from 'react';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <div className="flex flex-col bg-gray-50 dark:bg-gray-800 overflow-x-hidden h-full w-full">
          <div className="border-black border-opacity-20 shadow-2xl bg-white dark:bg-gray-700 h-full relative pb-30">
            <header>
              <div className="relative h-full pb-30 border bg-[color2] dark:bg-gray-700 mx-auto">
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
                    <p className="text-sm font-bold tracking-tight text-[#2b2c48] dark:text-gray-200 mb-5">
                      Software && Cloud Engineer <br />
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="https://assets.codepen.io/9277864/mood-rock.svg"
                        alt="Rock"
                        width="25"
                        height="25"
                      />
                    </div>
                  </div>
                  <div className="absolute top-1 left-2 p-4 flex flex-col gap-10 opacity-40">
                    <Image
                      src="https://assets.codepen.io/9277864/html.svg"
                      alt="HTML"
                      width="100"
                      height="100"
                    />
                    <Image
                      src="https://assets.codepen.io/9277864/programming.svg"
                      alt="Programming"
                      width="100"
                      height="100"
                    />
                    <Image
                      src="https://assets.codepen.io/9277864/js.svg"
                      alt="JS"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="absolute top-1 right-0 p-4 flex flex-col gap-10 opacity-40">
                    <Image
                      src="https://assets.codepen.io/9277864/css.svg"
                      alt="CSS"
                      width="100"
                      height="100"
                    />
                    <Image
                      src="https://assets.codepen.io/9277864/vue.svg"
                      alt="Vue"
                      width="100"
                      height="100"
                    />
                    <Image
                      src="https://assets.codepen.io/9277864/front-end.svg"
                      alt="Front-end"
                      width="100"
                      height="100"
                    />
                  </div>
                </div>
              </div>
              <nav className="flex items-center justify-center mt-28 md:mt-0">
                <ul className="">
                  <Link href="/bio">
                    <button className="p-5">
                      <Image
                        src="https://assets.codepen.io/9277864/about-me.svg"
                        alt="Bio"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold dark:text-white">Bio</p>
                    </button>
                  </Link>
                  <Link href="/exp">
                    <button className="p-5">
                      <Image
                        src="https://assets.codepen.io/9277864/office-work.svg"
                        alt="Experience"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold dark:text-white">Experience</p>
                    </button>
                  </Link>
                  <Link href="/portfolio">
                    <button className="p-5">
                      <Image
                        src="https://assets.codepen.io/9277864/page.svg"
                        alt="Portfolio"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold dark:text-white">Portfolio</p>
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="p-5">
                      <Image
                        src="https://assets.codepen.io/9277864/contact.svg"
                        alt="Contact"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold dark:text-white">Contact</p>
                    </button>
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
