"use client";

import React from "react";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/animations";

const skills = [
  { name: "Java", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "NextJS", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "Redis", level: "Basic" },
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/tranthien1602/",
    icon: "https://assets.codepen.io/9277864/social-media-facebook.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/trankhoa1602",
    icon: "https://assets.codepen.io/9277864/social-media-twitter.svg",
  },
  {
    name: "Github",
    url: "https://github.com/khoatran1602",
    icon: "/github.svg",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/tr%E1%BA%A7n-%C4%91%C4%83ng-khoa-a27a33184/",
    icon: "https://assets.codepen.io/9277864/linkedin.svg",
  },
  {
    name: "Google",
    url: "mailto:trankhoa758@gmail.com",
    icon: "https://assets.codepen.io/9277864/social-media-google.svg",
  },
];

const Page = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-screen p-8 max-w-6xl mx-auto"
    >
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 md:grid-cols-12 gap-8"
      >
        {/* Profile Section */}
        <div className="md:col-span-4">
          <motion.div
            variants={fadeInUp}
            className="sticky top-8 bg-white rounded-xl shadow-lg p-6"
          >
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/avatar_peter.jpg" // Add your profile image
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Khoa Tran</h2>

            {/* Skills Section */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm cursor-help">
                      {skill.name}
                    </span>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#555a60] rounded flex justify-center align-middle"
                >
                  <Image
                    className="mx-5"
                    src={link.icon}
                    alt={link.name}
                    width="28"
                    height="28"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div variants={fadeInUp} className="md:col-span-8 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="prose max-w-none">
              <div className="flex flex-col ml-40 mr-10">
                <p>
                  <span>🙋‍♂️</span> Hi lovely/handsome person,
                </p>
                <p>
                  My name is Khoa and I am a soon-to-be graduate with experience
                  in various programming languages, including Java, TypeScript,
                  HTML, CSS, React, and NextJS. My main interest lies in web
                  design and development, with a strong focus on HTML, CSS, and
                  TypeScript frameworks such as React and NextJS. Additionally,
                  I have experience working with PostgreSQL and Redis databases.
                  <br />
                  As someone who understands the challenge of learning technical
                  skills and building real-world projects, I have worked on a
                  variety of small projects to gain practical experience and
                  demonstrate my abilities. I am always excited to learn new
                  knowledge and technologies, and I am continuously seeking
                  opportunities to improve my skills.
                </p>
                <p>
                  I understand the challenge of learning technical skills,
                  especially when it comes to building real-world projects. Some
                  things to know about me:
                </p>
                <ul className="list-none">
                  <li>
                    <span className="emoji">👉</span> Ready to ask questions
                    when confused or searching for answers till the questions
                    are solved
                  </li>
                  <li>
                    <span className="emoji">👉</span> Excited to lear new
                    knowledge and technologies
                  </li>
                  <li>
                    <span className="emoji">👉</span> Love challenges and embark
                    on new projects
                  </li>
                </ul>
                <p>
                  That would be great if we connected on social media,
                  especially on Github, kept in touch, and shared how we live
                  this life.
                </p>
                <p>
                  Let&apos;s work together to build something amazing!
                </p>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-1 bg-blue-500 rounded"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bachelor of Software Engineering
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 mb-2">
                    Honours First Class (H1) Graduate
                  </h4>
                  <p className="text-gray-600 mb-1">RMIT University</p>
                  <p className="text-gray-500 text-sm">2020 - 2024</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-1 bg-blue-500 rounded"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bachelor of English Studies
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 mb-2">
                    English Language and Literature
                  </h4>
                  <p className="text-gray-600 mb-1">
                    Ho Chi Minh City University of Education (HCMUE)
                  </p>
                  <p className="text-gray-500 text-sm">2016 - 2020</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-4">
              I&apos;m always excited to connect and collaborate on interesting
              projects.
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#555a60] rounded flex justify-center align-middle"
                >
                  <Image
                    className="mx-5"
                    src={link.icon}
                    alt={link.name}
                    width="28"
                    height="28"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
