import React from "react";

function Billing() {
  return (
    <section
      id="product"
      className="flex flex-col-reverse md:flex-row py-6 sm:py-16 mx-auto max-w-7xl"
    >
      <div className="relative flex flex-1 justify-center items-center mr-0 md:mr-10 mt-10 md:mt-0">
        <img
          src="/assets/bill.png"
          alt="billing"
          className="relative w-[100%] h-[100%] z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className="flex flex-col flex-1 justify-center items-start">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="sm:block hidden" />
          billing & invoicing
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img
            src="/assets/apple.svg"
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src="/assets/google.svg"
            alt="google_play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
