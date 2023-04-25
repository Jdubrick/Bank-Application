import React from "react";
import { Button } from "../exports";

function CTA() {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center my-6 sm:my-16 px-6 py-4 sm:px-16 sm:py-12 mx-auto max-w-7xl rounded-[20px] box-shadow bg-black-gradient-2">
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Try our service now!
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-center items-center ml-0 sm:ml-10 mt-10 sm:mt-0">
        <Button styles={"rounded-lg"} />
      </div>
    </section>
  );
}

export default CTA;
