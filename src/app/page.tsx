"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.css";
import BioPage from "../pages/bio";
import ExpPage from "@/pages/exp";
import PortfolioPage from "@/pages/portfolio";
import ContactPage from "@/pages/contact";

const Header = () => {
  const [bioPressed, setBioPressed] = useState(false);
  const [expPressed, setExpPressed] = useState(false);
  const [portPressed, setPortPressed] = useState(false);
  const [contactPressed, setContactPressed] = useState(false);

  const bioPress = () => {
    setExpPressed(false);
    setPortPressed(false);
    setContactPressed(false);
    setBioPressed(!bioPressed);
  };

  const expPress = () => {
    setBioPressed(false);
    setPortPressed(false);
    setContactPressed(false);
    setExpPressed(!expPressed);
  };

  const portPress = () => {
    setExpPressed(false);
    setBioPressed(false);
    setContactPressed(false);
    setPortPressed(!portPressed);
  };

  const contactPress = () => {
    setExpPressed(false);
    setPortPressed(false);
    setBioPressed(false);
    setContactPressed(!contactPressed);
  };

  return (
    <div
      className={`flex flex-col text-[color4] bg-[color3] overflow-x-hidden ${
        bioPressed ? "h-full" : "h-screen"
      } w-full`}
    >
      <div className={styles.container}>
        <header>
          <div className="relative h-full pb-30 border bg-[color2] mx-auto">
            <div className="relative">
              <div className="flex justify-center py-30 pb-5">
                <Image
                  className="rounded-full shadow-xl w-32 h-32"
                  src="/avatar.png"
                  alt="Khoa Tran"
                  width="100"
                  height="100"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-dm-sans tracking-tight font-bold">
                  Khoa Tran
                </h1>
                <p className="text-sm font-bold tracking-tight text-[#2b2c48] mb-5">
                  Full Stack Developer <br />
                  [Front-end: HTML, CSS, TypeScript] <br />
                  [Back-end: Java]
                </p>
                <div className="flex justify-center">
                  <Image
                    src="https://assets.codepen.io/9277864/mood-rock.svg"
                    alt="Rock"
                    width="25"
                    height="25"
                  />
                </div>
              </div>
              <div className="absolute top-1 left-2 p-4 flex flex-col gap-10 opacity-40">
                <Image
                  src="https://assets.codepen.io/9277864/html.svg"
                  alt="HTML"
                  width="100"
                  height="100"
                />
                <Image
                  src="https://assets.codepen.io/9277864/programming.svg"
                  alt="Programming"
                  width="100"
                  height="100"
                />
                <Image
                  src="https://assets.codepen.io/9277864/js.svg"
                  alt="JS"
                  width="100"
                  height="100"
                />
              </div>
              <div className="absolute top-1 right-0 p-4 flex flex-col gap-10 opacity-40">
                <Image
                  src="https://assets.codepen.io/9277864/css.svg"
                  alt="CSS"
                  width="100"
                  height="100"
                />
                <Image
                  src="https://assets.codepen.io/9277864/vue.svg"
                  alt="Vue"
                  width="100"
                  height="100"
                />
                <Image
                  src="https://assets.codepen.io/9277864/front-end.svg"
                  alt="Front-end"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
          <nav className="flex items-center justify-center">
            <ul className="">
              <button className="p-5" onClick={bioPress}>
                <Image
                  src="https://assets.codepen.io/9277864/about-me.svg"
                  alt="Bio"
                  width="80"
                  height="80"
                />
                <p className="font-bold">Bio</p>
              </button>
              <button className="p-5" onClick={expPress}>
                <Image
                  src="https://assets.codepen.io/9277864/office-work.svg"
                  alt="Experience"
                  width="80"
                  height="80"
                />
                <p className="font-bold">Experience</p>
              </button>
              <button className="p-5" onClick={portPress}>
                <Image
                  src="https://assets.codepen.io/9277864/page.svg"
                  alt="Portfolio"
                  width="80"
                  height="80"
                />
                <p className="font-bold">Portfolio</p>
              </button>
              <button className="p-5" onClick={contactPress}>
                <Image
                  src="https://assets.codepen.io/9277864/contact.svg"
                  alt="Contact"
                  width="80"
                  height="80"
                />
                <p className="font-bold">Contact</p>
              </button>
            </ul>
          </nav>
          {bioPressed && <BioPage />}
          {expPressed && <ExpPage />}
          {portPressed && <PortfolioPage />}
          {contactPressed && <ContactPage />}
        </header>
      </div>
    </div>
  );
};

export default Header;
