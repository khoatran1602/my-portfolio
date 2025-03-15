"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    image:
      "/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.webp",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  {
    title: "IELTS Academic",
    image: "/ielts.webp",
    issuer: "British Council",
    date: "2021",
  },
  // Add more certificates as needed
];

export default function CertificatesPage() {
  return (
    <div className="w-full px-4 py-8 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-4 flex flex-col items-center">
              <div className="relative h-48 w-48 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
