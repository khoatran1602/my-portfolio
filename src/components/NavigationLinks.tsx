"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <nav className="flex items-center justify-center mt-28 md:mt-0">
      <ul className="flex flex-wrap justify-center">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <motion.div
              className="p-5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={80}
                height={80}
              />
              <p className="font-bold dark:text-white text-center">
                {link.label}
              </p>
            </motion.div>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
