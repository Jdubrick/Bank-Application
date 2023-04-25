import React from "react";
import styles from "@/styles";

function GetStarted() {
  return (
    <div
      className={`flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`flex flex-col justify-center items-center bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`flex flex-row justify-center items-start`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src="/assets/arrow-up.svg"
            className="w-[23px] h-[23px] object-contain"
            alt="arrow up"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
