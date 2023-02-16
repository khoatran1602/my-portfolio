import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex flex-col h-screen mr-50 md:ml-96">
      <h2 className="font-bold text-lg mb-3">Contact</h2>
      <div>
        <div className="flex flex-row mb-5">
          <p className="p-1 pr-7 border-r border-gray-800 md:pr-5">
            <Image
              src="https://assets.codepen.io/9277864/location-user.svg"
              alt="Address Icon"
              width="25"
              height="25"
            />
          </p>
          <address className="ml-7 md:ml-5">
            156A Nguyen Huu Tho Street, Phuoc Kien Ward, Nha Be District, Ho Chi
            Minh city
          </address>
        </div>
        <div className="flex flex-row mb-5">
          <p className="p-1 pr-5 border-r border-gray-800">
            <Image
              src="https://assets.codepen.io/9277864/envelope-letter.svg"
              alt="Email Icon"
              width="25"
              height="25"
            />
          </p>
          <address className="ml-5">trankhoa758@gmail.com</address>
        </div>
        <div className="flex flex-row mb-5">
          <p className="p-1 pr-5 border-r border-gray-800">
            <Image
              src="https://assets.codepen.io/9277864/mobile-phone-1.svg"
              alt="Phone Icon"
              width="25"
              height="25"
            />
          </p>
          <address className="ml-5">084-696-8339</address>
        </div>
        <div className="flex">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:scale-[1.009] mx-0 md:mx-0">
            <a
              href="https://github.com/khoatran1602"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Me on Github!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
