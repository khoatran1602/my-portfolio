import React from "react";
import Image from "next/image";

const PortfolioPage = () => {
  return (
    <div className="grid grid-cols-col4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10">
      <div className="border border-black rounded-md grid grid-cols-1 grid-rows-2">
        <div className="bg-[#2d4059]">
          <Image
            src="https://assets.codepen.io/9277864/schedule-milestone-2.svg"
            alt="Note Me"
            height="0"
            width="0"
            className="w-full h-auto"
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold">Note Me</h3>
          <p className="font-bold">Project Explanation</p>
          <p>
            Note Me is a real-time note-taking and drawing tool for teams. It
            uses React, Java, and PostgreSQL. To synchronize user activity, the
            application uses socket technology. Note Me makes it easy to
            brainstorm, plan, and cooperate.
          </p>
        </div>
      </div>

      <div className="border border-black rounded-md grid grid-cols-1 grid-rows-2 align-middle">
        <div className="bg-[#2d4059]">
          <Image
            src="https://assets.codepen.io/9277864/designer-desk-1.svg"
            alt="Hire Me"
            height="0"
            width="0"
            className="w-full h-auto"
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold">Hire Me</h3>
          <p className="font-bold">Project Explanation</p>
          <p>
            Hire Me makes it simple for job seekers to create professional
            resumes that showcase their skills. The website application is
            created using Next.js on the front end and Java on the back end,
            utilizing a PostgreSQL database and Redis for speed enhancements.
            Firebase login and sign-up tools simplify the process. Hire Me uses
            microservices for user and CV management and an API Gateway for
            efficient routing. Users can simply produce and download PDF copies
            of their resumes with Hire Me, making it simpler than ever to apply
            for jobs and stand out in the job market.
          </p>
        </div>
      </div>
      <div className="border border-black rounded-md grid grid-cols-1 grid-rows-2 align-middle">
        <div className="bg-[#2d4059]">
          <Image
            src="https://assets.codepen.io/9277864/project-timeline-2.svg"
            alt="Spotify-Clone"
            height="0"
            width="0"
            className="w-full h-auto"
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold">Songify</h3>
          <p className="font-bold">Project Explanation</p>
          <p>
            Songify is a web application that allows you to explore and discover
            new music, create custom playlists, and enjoy your favorite songs
            anytime, anywhere. As a clone of Spotify, Songify provides a similar
            user experience to the popular music streaming platform. With a vast
            music library, easy-to-use interface, and personalized
            recommendations, Songify is the perfect platform for music lovers to
            explore and discover new songs and artists. Whether you want to
            listen to your favorite songs, discover new tracks, or create custom
            playlists, Songify has something for everyone. Get ready to immerse
            yourself in the world of music with Songify!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
