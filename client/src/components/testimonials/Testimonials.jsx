import React from "react";
import { feedback } from "@/constants/values";
import { FeedbackCard } from "../exports";

function Testimonials() {
  return (
    <section
      id="clients"
      className="relative flex flex-col justify-center items-center py-6 sm:py-16 mx-auto max-w-7xl"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="relative flex flex-col md:flex-row w-full justify-between items-center mb-6 sm:mb-16 z-[1]">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          What people are <br className="sm:block hidden" />
          saying about us
        </h2>
        <div className="w-full mt-6 md:mt-0">
          <p className="text-left font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="relative flex flex-wrap justify-center sm:justify-start w-full feedback-container z-[1]">
        {feedback.map((item) => {
          return <FeedbackCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Testimonials;
