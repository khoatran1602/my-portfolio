import "./globals.css";
import Image from "next/image";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col text-[color4] bg-[color3] overflow-x-hidden h-full w-full">
          <div className="border-black border-opacity-20 shadow-2xl bg-color2 h-full relative pb-30">
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
              <nav className="flex items-center justify-center mt-28 md:mt-0">
                <ul className="">
                  <Link href="/bio">
                    <button className="p-5">
                      <Image
                        src="https://assets.codepen.io/9277864/about-me.svg"
                        alt="Bio"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold">Bio</p>
                    </button>
                  </Link>
                  <Link href="/exp">
                    <button className="p-5">
                      <Image
                        src="https://assets.codepen.io/9277864/office-work.svg"
                        alt="Experience"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold">Experience</p>
                    </button>
                  </Link>
                  <Link href="/portfolio">
                    <button className="p-5">
                      <Image
                        src="https://assets.codepen.io/9277864/page.svg"
                        alt="Portfolio"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold">Portfolio</p>
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="p-5">
                      <Image
                        src="https://assets.codepen.io/9277864/contact.svg"
                        alt="Contact"
                        width="80"
                        height="80"
                      />
                      <p className="font-bold">Contact</p>
                    </button>
                  </Link>
                </ul>
              </nav>
              <div>{children}</div>
            </header>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
