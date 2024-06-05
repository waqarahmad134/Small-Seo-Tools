import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { BiCopy } from "react-icons/bi";
import { error_toaster, info_toaster } from "../utilities/Toaster";


export default function RelatedKeywordsTool() {
  const [mainKeyword, setMainKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState("");
  const [differentKeywords, setDifferentKeywords] = useState([]);

  const findDifferentKeywords = () => {
    const mainKeywordWords = mainKeyword.toLowerCase().split(/\s+/);
    const secondaryKeywordsList = secondaryKeywords.toLowerCase().split(/\s+/);

    const filteredKeywords = secondaryKeywordsList.filter((keyword) => {
      // Remove words from secondary keyword list that are part of the main keyword
      const mainKeywordMatches = mainKeywordWords.filter((word) =>
        keyword.includes(word)
      );
      if (mainKeywordMatches.length > 0) return false;

      // Remove duplicate words from secondary keyword list
      const otherKeywords = secondaryKeywordsList.filter(
        (word) => word !== keyword
      );
      const hasDuplicates = otherKeywords.some((word) => word === keyword);
      if (hasDuplicates) return false;

      // Remove common prepositions
      const commonPrepositions = [
        "in",
        "on",
        "at",
        "by",
        "for",
        "with",
        "to",
        "of",
        "from",
      ];
      if (commonPrepositions.includes(keyword)) return false;

      return true;
    });

    setDifferentKeywords(filteredKeywords);
  };

  const clearData = () => {
    setMainKeyword("");
    setSecondaryKeywords("");
    setDifferentKeywords([]);
  };

  const copyKeywords = () => {
    const textarea = document.createElement("textarea");
    textarea.value = differentKeywords.join("\n");
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    info_toaster("Secondary Keywords copied to clipboard !");
  };
  
  return (
    <>
      <Header />
      <HeroSection
        title=" Unique Words Finder in Related KWs"
        subtitle=" Unique Words Finder in Related KWs tool online free"
      />
      <div className="w-4/5 mx-auto my-10">
        <div className="bg-gray-200 rounded-md p-5">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-7">
            Related Keywords Tool
          </h1>
          <div className="w-2/3 mx-auto">
            <div className="my-3">
              <label className="font-semibold mb-2 block">Main Keyword:</label>
              <input
                type="text"
                value={mainKeyword}
                className="py-2 px-3 rounded font-normal text-base w-full placeholder:text-black placeholder:text-opacity-40 focus:outline-none"
                onChange={(e) => setMainKeyword(e.target.value)}
              />
            </div>
            <div>
              <label className="font-semibold mb-2 block">
                Secondary Keywords:
              </label>
              <textarea
                value={secondaryKeywords}
                onChange={(e) => setSecondaryKeywords(e.target.value)}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="my-5">
              <button
                onClick={findDifferentKeywords}
                className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                Find Diffrent
              </button>
              <button
                onClick={clearData}
                className="relative inline-flex items-center justify-center px-5 py-2.5 p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-red-600 group-hover:from-red-500 group-hover:to-red-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800"
              >
                Clear
              </button>
              <h2>Resulting Different Keywords:</h2>
              <div className="relative">
                <textarea
                  value={differentKeywords.join("\n")}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  disabled
                />
                <div>
                  <button onClick={copyKeywords} className="absolute top-2 right-2">
                    <BiCopy />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
