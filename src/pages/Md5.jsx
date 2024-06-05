import React, { useState } from "react";
import md5 from "md5";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function Md5() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const generateMD5 = () => {
    const md5Hash = md5(input);
    setOutput(md5Hash);
  };
  return (
    <>
      <Header />
      <HeroSection
        title="MD5 Generator"
        subtitle="MD5 Generator tool online free"
      />

      <div className="w-4/5 mx-auto my-10">
        <div className="bg-gray-200 rounded-md p-5">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-7">
            MD5 Generator
          </h1>
          <div className="w-2/3 mx-auto">
            <div>
              <label className="font-semibold block mb-2">Input:</label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="py-2 px-3 rounded font-normal text-base w-full placeholder:text-black placeholder:text-opacity-40 focus:outline-none"
              />
            </div>
            <div>
              <label className="font-semibold block mb-2">Output:</label>
              <input
                type="text"
                value={output}
                className="py-2 px-3 rounded font-normal text-base w-full placeholder:text-black placeholder:text-opacity-40 focus:outline-none"
              />
            </div>
            <div className="my-5">
              <button
                onClick={generateMD5}
                className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                Generate MD5
              </button>
              <button
                onClick={() => {
                  setInput("");
                  setOutput("");
                }}
                className="relative inline-flex items-center justify-center px-5 py-2.5 p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-red-600 group-hover:from-red-500 group-hover:to-red-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
