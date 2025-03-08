"use client";
import React from "react";
import { ClientMotionDiv, ClientMotionH1 } from "@/components/ClientMotionDiv";

const experiences = [
  {
    title: "Associate Cloud Engineer",
    company: "National Australia Bank",
    period: "2024 - Present",
    description: [
      "Proposed and implemented the new design for automation patching by using Jenkins. Removed the manual intervention \
      instead of waiting for the approval from the team to proceed with the patching, the pipeline will automatically",
      "Developed and built the new Jenkins pipeline for cross-regional image publishing in UK Cloud",
      "Uplift the existing Jenkins script to use the declarative pipeline to improve the readability and maintainability",
    ],
  },
  {
    title: "Fresher Cloud Engineer",
    company: "National Australia Bank",
    period: "2023-2024",
    description: [
      "Learning and adapting to the new environment along with the team and company culture, processes, and technologies",
      "Collaborated with cross-functional teams to solve problems and define, design, and ship new features",
      "Updated and maintained existing applications such as Pulp. Migration of the application to containerized environment, continued support \
      and migrating to AWS ECS using Terraform",
      "Reducing time to publish images by 50% by adjusting the scripts to run in parallel",
      "Using Ansible to generate the report for the team to monitor the status of the agents in instances",
    ],
  },
];

const Page = () => {
  return (
    <div className="flex flex-col px-4 md:px-20 lg:px-40 py-10 min-h-screen bg-white dark:bg-gray-900">
      <ClientMotionH1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
      >
        Professional Experience
      </ClientMotionH1>

      <div className="relative">
        {experiences.map((exp, index) => (
          <ClientMotionDiv
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-10 ml-4 relative"
          >
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-[-5px] transform -translate-y-1/2" />
            <div className="border-l-2 border-gray-600 pl-6 pb-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {exp.title}
              </h3>
              <p className="text-gray-900 dark:text-gray-200">{exp.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {exp.period}
              </p>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ClientMotionDiv>
        ))}
      </div>
    </div>
  );
};

export default Page;
