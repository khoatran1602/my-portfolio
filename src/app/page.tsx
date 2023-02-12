import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="font-DM Sans sans-serif text-16 font-normal leading-normal text-[color4] bg-[color3] overflow-x-hidden h-screen w-screen">
      <div className="w-full max-w-520 min-w-280 mx-auto flex flex-col justify-center">
        <div className="relative h-full pb-30 border border-gray-200 shadow-lg bg-[color2] mx-auto">
          <header id="header">
            <div id="personal-info">
              <div className="avatar-container">
                <Image
                  src="/avatar.png"
                  alt="Khoa Tran"
                  width="100"
                  height="100"
                />
              </div>
              <div className="header-info-container">
                <h1>Khoa Tran</h1>
                <p>
                  Full Stack Web Developer <br />
                  [HTML, CSS, JavaScript]
                </p>
                <Image
                  src="https://assets.codepen.io/9277864/mood-rock.svg"
                  alt="Rock"
                  width="25"
                  height="25"
                />
              </div>
              <div className="header-icons">
                <div className="header-icons-row first-icons">
                  <div className="header-icon-4"></div>
                  <div className="header-icon-2"></div>
                  <div className="header-icon-3"></div>
                </div>
                <div className="header-icons-row">
                  <div className="header-icon-7"></div>
                  <div className="header-icon-10"></div>
                  <div className="header-icon-12"></div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
