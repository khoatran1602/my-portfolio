"use client";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

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
