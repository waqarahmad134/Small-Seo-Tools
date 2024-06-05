import React from "react";

export default function HeroSection(props) {
  return (
    <>
      <div className="bg-[#f1eef8] text-center font-poppins py-20">
        <h1 className="text-2xl sm:text-4xl font-semibold">
          {props?.title}
        </h1>
        <p className="text-xl sm:text-2xl">
          {props?.subtitle}
        </p>
      </div>
    </>
  );
}
