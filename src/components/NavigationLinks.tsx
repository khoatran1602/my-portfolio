"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/bio",
    icon: "/icons/about-me.svg",
    label: "Bio",
  },
  {
    href: "/exp",
    icon: "/icons/office-work.svg",
    label: "Experience",
  },
  {
    href: "/certs",
    icon: "/icons/certificate.svg",
    label: "Certificates",
  },
  {
    href: "/portfolio",
    icon: "/icons/page.svg",
    label: "Portfolio",
  },
  {
    href: "/contact",
    icon: "/icons/contact.svg",
    label: "Contact",
  },
];

export function NavigationLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center py-6">
      <ul className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link href={link.href}>
                <div
                  className={`relative px-3 py-3 sm:px-4 sm:py-3 rounded-xl transition-all duration-200 flex flex-col items-center group
                    ${isActive 
                      ? 'bg-blue-500/10 dark:bg-blue-400/10' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                    }`}
                >
                  {/* Icon container */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-1 transition-transform duration-200 
                    ${!isActive && 'group-hover:scale-110 group-hover:-translate-y-0.5'}`}
                  >
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={48}
                      height={48}
                      className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                      priority
                    />
                  </div>
                  <p className={`text-xs sm:text-sm font-medium text-center transition-colors
                    ${isActive 
                      ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                      : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                    }`}
                  >
                    {link.label}
                  </p>
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-blue-500 rounded-full" />
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
