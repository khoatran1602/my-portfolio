"use client";
import React from "react";
import { ClientMotionDiv, ClientMotionH1 } from "@/components/ClientMotionDiv";

const experiences = [
  {
    title: "Associate Cloud Engineer",
    company: "National Australia Bank",
    period: "2024 - Present",
    description: [
      "Designed and implemented CI/CD automation (instance refresh, health checks, zero-downtime deploys) in Jenkins + Terraform, cutting release time by 90%.",
      "Built automated cleanup for Amazon S3 packages, reducing monthly storage costs by more than half.",
      "Manage Azure infrastructure and domain services, including Key Vault rotation, service principal automation, and production domain controller logic.",
      "Established UK Cloud platform capabilities: publishing hardened images, enabling QA environments, and wiring cross-region connectivity.",
      "Uplifted legacy Jenkins scripts to declarative pipelines for readability and maintainability.",
      "Maintained and upgraded Quest Authentication Services, partnering with internal teams to resolve issues via AWS Lambda and Azure Runbook.",
      "Delivered security/compliance initiatives such as automated vuln scanning, CrowdStrike integration, and enterprise certificate management.",
      "Provide technical consulting and BAU support while driving strategic infrastructure improvements across clouds.",
    ],
  },
  {
    title: "Fresher Cloud Engineer",
    company: "National Australia Bank",
    period: "2023-2024",
    description: [
      "Supported and enhanced existing apps (e.g., Pulp) while migrating workloads to containerized architectures and AWS ECS via Terraform.",
      "Optimized the image publication process by parallelizing steps, reducing publish times by ~50%.",
      "Automated agent health/status reporting with Ansible to boost observability and response times.",
      "Worked cross-functionally to learn domain processes and ship incremental features in a fast-paced environment.",
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
