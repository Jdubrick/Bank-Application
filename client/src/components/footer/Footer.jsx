import React from "react";
import { footerLinks, socialMedia } from "@/constants/values";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-6 sm:py-16 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row justify-center items-start mb-8 w-full">
        <div className="flex flex-col flex-1 justify-start mr-10">
          <img
            src="/assets/logo.svg"
            alt="Hoobank Logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]">
            A new way to make payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-row justify-between flex-wrap mt-10 md:mt-0 flex-[1.5] w-full ">
          {footerLinks.map((link) => {
            return (
              <div
                key={link.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {link.title}
                </h4>
                <ul className="list-none mt-4">
                  {link.links.map((subLink, index) => {
                    return (
                      <li
                        key={subLink.name}
                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                          index !== link.links.length - 1 ? "mb-4" : "mb-0"
                        }`}
                      >
                        {subLink.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          {" "}
          2023 Hoobank Inc. All Rights Reserved.
        </p>
        <div className="flex flex-row mt-6 md:mt-0">
          {socialMedia.map((social, index) => {
            return (
              <a href={social.link} target="_blank" key={index}>
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer  ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                />
                ;
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
