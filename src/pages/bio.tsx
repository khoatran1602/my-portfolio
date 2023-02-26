import React from "react";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";

const BioPage = () => {
  return (
    <div className="flex flex-col ml-40 mr-10">
      <p>
        <span>🙋‍♂️</span> Hi lovely/handsome person,
      </p>
      <p>
        My name is Khoa and I am a soon-to-be graduate with experience in
        various programming languages, including Java, TypeScript, HTML, CSS,
        React, and NextJS. My main interest lies in web design and development,
        with a strong focus on HTML, CSS, and TypeScript frameworks such as
        React and NextJS. Additionally, I have experience working with
        PostgreSQL and Redis databases.
        <br />
        As someone who understands the challenge of learning technical skills
        and building real-world projects, I have worked on a variety of small
        projects to gain practical experience and demonstrate my abilities. I am
        always excited to learn new knowledge and technologies, and I am
        continuously seeking opportunities to improve my skills.
      </p>
      <p>
        I understand the challenge of learning technical skills, especially when
        it comes to building real-world projects. Some things to know about me:
      </p>
      <ul className="list-none">
        <li>
          <span className="emoji">👉</span> Ready to ask questions when confused
          or searching for answers till the questions are solved
        </li>
        <li>
          <span className="emoji">👉</span> Excited to lear new knowledge and
          technologies
        </li>
        <li>
          <span className="emoji">👉</span> Love challenges and embark on new
          projects
        </li>
      </ul>
      <p>
        That would be great if we connected on social media, especially on
        Github, kept in touch, and shared how we live this life.
      </p>
      <div className="flex flex-row mt-3">
        <a
          href="https://www.facebook.com/tranthien1602/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#555a60] rounded flex justify-center align-middle"
        >
          <Image
            className="mx-5"
            src="https://assets.codepen.io/9277864/social-media-facebook.svg"
            alt="Facebook"
            width="28"
            height="28"
          />
        </a>
        <a
          href="https://twitter.com/trankhoa1602"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#555a60] rounded flex justify-center align-middle"
        >
          <Image
            className="mx-5"
            src="https://assets.codepen.io/9277864/social-media-twitter.svg"
            alt="Twitter"
            width="28"
            height="28"
          />
        </a>
        <a
          href="https://github.com/khoatran1602"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#555a60] rounded flex justify-center align-middle"
        >
          <Image
            className="mx-5"
            src="/github.svg"
            alt="Instagram"
            width="48"
            height="48"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tr%E1%BA%A7n-%C4%91%C4%83ng-khoa-a27a33184/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#555a60] rounded flex justify-center align-middle"
        >
          <Image
            className="mx-5"
            src="https://assets.codepen.io/9277864/linkedin.svg"
            alt="Linkedin"
            width="28"
            height="28"
          />
        </a>
        <Popover.Root>
          <Popover.Trigger asChild>
            <div className="hover:bg-[#555a60] rounded flex justify-center align-middle">
              <Image
                className="mx-5 cursor-pointer hover:bg-[#555a60] rounded"
                src="https://assets.codepen.io/9277864/social-media-google.svg"
                alt="Google"
                width="28"
                height="28"
              />
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
            >
              <div>trankhoa758@gmail.com</div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
};

export default BioPage;
