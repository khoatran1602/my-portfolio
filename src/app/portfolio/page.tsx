"use client";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/animations";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { optimizeImageLoading } from "@/lib/performance";

interface PortfolioItem {
  title: string;
  imageSrc: string;
  description: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Note Me",
    imageSrc: "https://assets.codepen.io/9277864/schedule-milestone-2.svg",
    description:
      "Note Me is a real-time note-taking and drawing tool for teams. It uses React, Java, and PostgreSQL. To synchronize user activity, the application uses socket technology. Note Me makes it easy to brainstorm, plan, and cooperate.",
    techStack: ["React", "Java", "PostgreSQL", "WebSocket"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Hire Me",
    imageSrc: "https://assets.codepen.io/9277864/designer-desk-1.svg",
    description:
      "Hire Me is a streamlined platform for creating professional resumes. Built with Next.js frontend and Java backend, it utilizes PostgreSQL and Redis for optimal performance. Authentication is handled via Firebase, while a microservice architecture manages users and CVs through an API Gateway. Users can generate and download PDF resumes instantly, enhancing their job application process.",
    techStack: ["Next.js", "Java", "PostgreSQL", "Redis", "Firebase"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Songify",
    imageSrc: "https://assets.codepen.io/9277864/project-timeline-2.svg",
    description:
      "Songify is a web application that allows you to explore and discover new music, create custom playlists, and enjoy your favorite songs anytime, anywhere. As a clone of Spotify, Songify provides a similar user experience to the popular music streaming platform. With a vast music library, easy-to-use interface, and personalized recommendations, Songify is the perfect platform for music lovers to explore and discover new songs and artists. Whether you want to listen to your favorite songs, discover new tracks, or create custom playlists, Songify has something for everyone. Get ready to immerse yourself in the world of music with Songify!",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
  },
];

const Page = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null
  );

  interface ProjectModalProps {
    project: PortfolioItem;
    onClose: () => void;
  }

  const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={600}
          height={300}
          className="rounded-lg mb-4"
        />
        <p className="mb-4 text-gray-700 dark:text-gray-300 text-justify">
          {project.description}
        </p>
        <div className="mb-4">
          <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href={project.demoLink}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900"
    >
      <motion.h1
        variants={fadeInUp}
        className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
      >
        Portfolio
      </motion.h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden
                     transition-all duration-200 ease-in-out
                     hover:shadow-2xl hover:shadow-blue-500/10
                     dark:hover:shadow-blue-400/10
                     hover:-translate-y-2
                     group"
            onClick={() => setSelectedProject(item)}
          >
            <div
              className="border border-gray-200 dark:border-gray-700 rounded-md h-full flex flex-col
                          transition-colors duration-200
                          hover:border-blue-500/50 dark:hover:border-blue-400/50"
            >
              <div className="bg-[#2d4059] p-4 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-auto rounded
                           transition-transform duration-200
                           group-hover:scale-105"
                />
              </div>
              <div
                className="p-5 flex-grow flex flex-col
                            bg-gradient-to-b from-transparent to-gray-50
                            dark:to-gray-800/50
                            transition-colors duration-200
                            group-hover:to-blue-50
                            dark:group-hover:to-blue-900/10"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-justify">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        +{item.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;
