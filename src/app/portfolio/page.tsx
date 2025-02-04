"use client";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/animations";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";

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
    description: "Note Me is a real-time note-taking and drawing tool for teams. It uses React, Java, and PostgreSQL. To synchronize user activity, the application uses socket technology. Note Me makes it easy to brainstorm, plan, and cooperate.",
    techStack: ["React", "Java", "PostgreSQL", "WebSocket"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Hire Me",
    imageSrc: "https://assets.codepen.io/9277864/designer-desk-1.svg",
    description: "Hire Me makes it simple for job seekers to create professional resumes that showcase their skills. The website application is created using Next.js on the front end and Java on the back end, utilizing a PostgreSQL database and Redis for speed enhancements. Firebase login and sign-up tools simplify the process. Hire Me uses microservices for user and CV management and an API Gateway for efficient routing. Users can simply produce and download PDF copies of their resumes with Hire Me, making it simpler than ever to apply for jobs and stand out in the job market.",
    techStack: ["Next.js", "Java", "PostgreSQL", "Redis", "Firebase"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Songify",
    imageSrc: "https://assets.codepen.io/9277864/project-timeline-2.svg",
    description: "Songify is a web application that allows you to explore and discover new music, create custom playlists, and enjoy your favorite songs anytime, anywhere. As a clone of Spotify, Songify provides a similar user experience to the popular music streaming platform. With a vast music library, easy-to-use interface, and personalized recommendations, Songify is the perfect platform for music lovers to explore and discover new songs and artists. Whether you want to listen to your favorite songs, discover new tracks, or create custom playlists, Songify has something for everyone. Get ready to immerse yourself in the world of music with Songify!",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
  },
];

const Page = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

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
        className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
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
        <p className="mb-4">{project.description}</p>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href={project.demoLink}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
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
      className="min-h-screen p-8"
    >
      <motion.h1
        variants={fadeInUp}
        className="text-4xl font-bold mb-8"
      >
        Portfolio
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProject(item)}
          >
            <div className="border border-black rounded-md">
              <div className="bg-[#2d4059] p-4">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 line-clamp-3">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                  {item.techStack.length > 3 && (
                    <span className="text-sm text-gray-500">+{item.techStack.length - 3} more</span>
                  )}
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
