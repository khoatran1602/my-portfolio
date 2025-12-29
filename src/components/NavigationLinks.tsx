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
    icon: "/certificate.png",
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
    <nav className="flex items-center justify-center mt-28 md:mt-0">
      <ul className="flex flex-wrap justify-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href}
            >
              <div
                className={`p-5 rounded-xl transition-all duration-200 hover:scale-110 hover:-translate-y-1
                  ${isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/30 scale-105' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={80}
                  height={80}
                  priority
                />
                <p className={`font-bold text-center ${isActive ? 'text-blue-600 dark:text-blue-400' : 'dark:text-white'}`}>
                  {link.label}
                </p>
              </div>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
