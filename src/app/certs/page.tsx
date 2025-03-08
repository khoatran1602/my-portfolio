import React from "react";
import { FC } from "react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  score?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "IELTS Certificate",
    issuer: "IDP IELTS",
    date: "2019",
    imageUrl: "/ielts.webp",
    score:
      "7.0 - Overall Band Score | Speaking: 6 | Listening: 7.5 | Reading: 7.5 | Writing: 6.5",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    imageUrl:
      "/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.webp",
  },
];

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-80 w-full flex items-center justify-center">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="max-w-full max-h-full object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Issued by: {cert.issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Date: {cert.date}
              </p>
              {cert.score && (
                <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                  Score: {cert.score}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
