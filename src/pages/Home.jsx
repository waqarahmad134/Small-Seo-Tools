import React, { useState } from "react";
import { error_toaster, info_toaster } from "../utilities/Toaster";
import { Helmet } from "react-helmet";
import { BiCopy } from "react-icons/bi";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

export default function Home() {
  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
        <meta property="twitter:url" content={currentUrl} />
      </Helmet>
      <div>
        <Header />
        <div className="bg-[#f1eef8] text-center font-poppins py-20">
          <div className="w-4/5 mx-auto grid md:grid-cols-5 gap-10">
            <Link to={"/text-to-speech-tool"} className="space-y-3">
              <div className="bg-white text-black rounded-2xl p-8 text-center hover:scale-110 transition-all ease-in duration-75 ">
                <img
                  className="m-auto"
                  src="https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg"
                  alt="logo"
                />
              </div>
              <p className="text-lg font-semibold text-wrap">Text to Speech</p>
            </Link>
            <Link to={"/word-counter"} className="space-y-3">
              <div className="bg-white text-black rounded-2xl p-8 text-center hover:scale-110 transition-all ease-in duration-75 ">
                <img
                  className="m-auto"
                  src="https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg"
                  alt="logo"
                />
              </div>
              <p className="text-lg font-semibold text-wrap">
                Online Word Counter
              </p>
            </Link>
            <Link to={"/title-capitalization-tool"} className="space-y-3">
              <div className="bg-white text-black rounded-2xl p-8 text-center hover:scale-110 transition-all ease-in duration-75">
                <img
                  className="m-auto"
                  src="https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg"
                  alt="logo"
                />
              </div>
              <p className="text-lg font-semibold text-wrap">
                Title Capitalization Tool
              </p>
            </Link>
            <Link to={"/related-keyword-tool"} className="space-y-3">
              <div className="bg-white text-black rounded-2xl p-8 text-center hover:scale-110 transition-all ease-in duration-75 ">
                <img
                  className="m-auto"
                  src="https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg"
                  alt="logo"
                />
              </div>
              <p className="text-lg font-semibold text-wrap">Related Keyword Tool</p>
            </Link>
            <Link to={"/md5-generator"} className="space-y-3">
              <div className="bg-white text-black rounded-2xl p-8 text-center hover:scale-110 transition-all ease-in duration-75 ">
                <img
                  className="m-auto"
                  src="https://iskills.com/wp-content/uploads/2024/04/tools-thumnail.svg"
                  alt="logo"
                />
              </div>
              <p className="text-lg font-semibold text-wrap">Md5 Generator</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
