import React from "react";
import { Button } from "../exports";

function CardDeal() {
  return (
    <section className="flex flex-col md:flex-row py-6 sm:py-16 mx-auto max-w-7xl">
      <div className="flex flex-col flex-1 justify-center items-start">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Find a better card deal <br className="sm:block hidden" />
          in a few easy steps.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button styles={"mt-10 rounded-lg"} />
      </div>
      <div className="relative flex flex-1 justify-center items-center ml-0 md:ml-10 mt-10 md:mt-0">
        <img
          src="/assets/card.png"
          alt="card photo"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
}

export default CardDeal;
