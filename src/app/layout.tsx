import "./globals.css";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import { NavigationLinks } from "@/components/NavigationLinks";

// Inline script to prevent flash of white on dark mode
// This runs BEFORE React hydrates, blocking render until theme is set
const themeScript = `
  (function() {
    try {
      var isDark = localStorage.getItem('darkMode') === 'true';
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Blocking script to set theme before paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
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
                      width={100}
                      height={100}
                      priority
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
                        src="/icons/mood-rock.svg"
                        alt="Rock"
                        width={25}
                        height={25}
                      />
                      <br />
                    </div>
                  </div>
                  <div className="absolute top-1 left-2 p-4 flex flex-col gap-10">
                    <Image src="/java.png" alt="JAVA" width={85} height={100} priority />
                    <Image src="/ts.png" alt="TS" width={85} height={100} priority />
                    <Image src="/aws.png" alt="AWS" width={85} height={100} priority />
                  </div>
                  <div className="absolute top-1 right-0 p-4 flex flex-col gap-10">
                    <Image
                      src="/azure.png"
                      alt="Azure"
                      width={100}
                      height={100}
                      priority
                    />
                    <Image
                      src="/kubernetes.png"
                      alt="Kubernetes"
                      width={100}
                      height={100}
                      priority
                    />
                    <Image src="/AI.png" alt="AI" width={100} height={100} priority />
                  </div>
                </div>
              </div>
              <NavigationLinks />
              <div>{children}</div>
            </header>
          </div>
        </div>
      </body>
    </html>
  );
}
