import React, { useState } from "react";
import { error_toaster, info_toaster } from "../utilities/Toaster";
import { Helmet } from "react-helmet";
import { BiCopy } from "react-icons/bi";
import Header from "../components/Header";

export default function WordCounterTool() {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const countWords = () => {
    const words = inputText?.split(/\s+/)?.filter((word) => word !== "");
    return words?.length;
  };

  const countCharacters = () => {
    return inputText?.length;
  };

  const clearText = () => {
    setInputText("");
  };

  return (
    <>
      <Header />
      <div className="">
        <div className="bg-[#f1eef8] text-center font-poppins py-20">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Word Counter Tool
          </h1>
          <p className="text-xl sm:text-2xl">Word counter tool online free</p>
        </div>
        <div className="w-4/5 mx-auto my-10">
          <div className="bg-gray-200 rounded-md p-5">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-7">
              Word Counter Tool
            </h1>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your text
            </label>
            <textarea
              id="message"
              rows="4"
              value={inputText}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type or paste text here....."
            ></textarea>
            <div className="my-5">
              <div className="flex gap-x-2">
                <h2>
                  <b>Word Count:</b>
                </h2>
                <p className="text-blue-400 font-semibold">{countWords()}</p>
              </div>
              <div className="flex gap-x-2">
                <h2>
                  <b>Total Characters:</b>
                </h2>
                <p className="text-blue-400 font-semibold">
                  {countCharacters()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
