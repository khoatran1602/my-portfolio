import React from "react";
import Image from "next/image";

const BioPage = () => {
  return (
    <div className="flex flex-col">
      <h2>Bio</h2>
      <p>
        <span className="emoji">🙋‍♂️</span> Hey,
      </p>
      <p>
        My name is Khoa, and I am about to graduate. I have experience in
        various programming languages including Java, TypeScript, HTML, CSS,
        React, and NextJS. . I am particularly interested in web design and
        development, with a focus on HTML, CSS, and JavaScript frameworks like
        React, NextJS.
      </p>
      <p>
        I understand the challenge of learning technical skills, especially when
        it comes to building real-world projects. Some things to know about me:
      </p>
      <ul>
        <li>
          <span className="emoji">👉</span> Working on a variety of small
          projects that have helped me gain practical experience and demonstrate
          my abilities
        </li>
        <li>
          <span className="emoji">👉</span> Excited to lear new knowledge and
          technologies
        </li>
        <li>
          <span className="emoji">👉</span> Some of my small projects
        </li>
      </ul>
      <p>
        That would be great if we connected on social media, especially on
        Twitter, kept in touch, and shared how we live this life.
      </p>
      <div className="flex flex-row">
        <div>
          <a
            href="https://www.facebook.com/tranthien1602/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://assets.codepen.io/9277864/social-media-facebook.svg"
              alt="Facebook"
              width="28"
              height="28"
            />
          </a>
        </div>
        <div className="mx-5">
          <a
            href="https://twitter.com/trankhoa1602"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mx-5"
              src="https://assets.codepen.io/9277864/social-media-twitter.svg"
              alt="Twitter"
              width="28"
              height="28"
            />
          </a>
        </div>
        <div className="mx-5">
          <a
            href="https://github.com/khoatran1602"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mx-5"
              src="/github.svg"
              alt="Instagram"
              width="48"
              height="48"
            />
          </a>
        </div>
        <div className="mx-5">
          <a
            href="https://www.linkedin.com/in/tr%E1%BA%A7n-khoa-a27a33184/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mx-5"
              src="https://assets.codepen.io/9277864/linkedin.svg"
              alt="Linkedin"
              width="28"
              height="28"
            />
          </a>
        </div>
        <div className="mx-5">
          <a href="#" target="_blank">
            <Image
              className="mx-5"
              src="https://assets.codepen.io/9277864/social-media-google.svg"
              alt="Google"
              width="28"
              height="28"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
