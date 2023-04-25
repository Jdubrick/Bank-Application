import React from "react";
import { features } from "@/constants/values";
import { Button } from "../exports";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
        <img src={icon} alt="Icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex flex-col flex-1 ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

function Business() {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row py-6 sm:py-16 max-w-7xl mx-auto"
    >
      <div className="flex flex-col flex-1 justify-center items-start">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="sm:block hidden" />
          we'll handle the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards, and saving money. But with hundreds
          of credit cards on the market, how do you choose?
        </p>
        <Button styles="mt-10 rounded-lg" />
      </div>
      <div className="relative flex flex-col flex-1 justify-center items-center ml-0 md:ml-10 mt-10 md:mt-0">
        {features.map((feature, index) => {
          return <FeatureCard key={feature.id} {...feature} index={index} />;
        })}
      </div>
    </section>
  );
}

export default Business;
