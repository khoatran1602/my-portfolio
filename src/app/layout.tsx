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
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-200">
        <Navbar />
        <main className="min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section with Profile */}
            <header className="relative pt-8 pb-4">
              {/* Floating tech badges - hidden on mobile */}
              <div className="floating-badges absolute top-8 left-0 p-4 flex flex-col gap-6 opacity-60 hover:opacity-100 transition-opacity">
                <Image src="/java.png" alt="JAVA" width={60} height={60} className="drop-shadow-lg" priority />
                <Image src="/ts.png" alt="TS" width={60} height={60} className="drop-shadow-lg" priority />
                <Image src="/aws.png" alt="AWS" width={60} height={60} className="drop-shadow-lg" priority />
              </div>
              <div className="floating-badges absolute top-8 right-0 p-4 flex flex-col gap-6 opacity-60 hover:opacity-100 transition-opacity">
                <Image src="/azure.png" alt="Azure" width={60} height={60} className="drop-shadow-lg" priority />
                <Image src="/kubernetes.png" alt="Kubernetes" width={60} height={60} className="drop-shadow-lg" priority />
                <Image src="/AI.png" alt="AI" width={50} height={50} className="drop-shadow-lg" priority />
              </div>

              {/* Profile Section */}
              <div className="flex flex-col items-center py-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <Image
                    className="relative rounded-full shadow-2xl ring-4 ring-white dark:ring-gray-700 w-32 h-32 object-cover"
                    src="/avatar_peter.jpg"
                    alt="Khoa Tran"
                    width={128}
                    height={128}
                    priority
                  />
                </div>
                <div className="text-center mt-6">
                  <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Khoa Tran
                  </h1>
                  <p className="text-base font-medium text-gray-600 dark:text-gray-300 mt-2 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Software & Cloud Engineer
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <NavigationLinks />
            </header>

            {/* Page Content */}
            <div className="animate-fade-in-up pb-16">
              {children}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Khoa Tran. Built with Next.js
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/khoatran1602" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <Image src="/github.svg" alt="GitHub" width={20} height={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tr%E1%BA%A7n-%C4%91%C4%83ng-khoa-a27a33184/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
