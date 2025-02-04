"use client";
import React from 'react';
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "Note Me",
    description: "Real-time note-taking and drawing tool for teams",
    image: "https://assets.codepen.io/9277864/schedule-milestone-2.svg",
    technologies: ["React", "Java", "PostgreSQL", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Hire Me",
    description: "Professional resume builder application",
    image: "https://assets.codepen.io/9277864/designer-desk-1.svg",
    technologies: ["Next.js", "Java", "PostgreSQL", "Redis", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Songify",
    description: "Music streaming platform with personalized recommendations",
    image: "https://assets.codepen.io/9277864/project-timeline-2.svg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Projects
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Wrap each project card with AnimatedSection */}
        {projectsData.map((project, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            {/* Your existing project card content */}
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Page;
