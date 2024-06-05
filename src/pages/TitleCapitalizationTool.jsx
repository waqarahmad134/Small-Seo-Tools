import { BiCopy } from "react-icons/bi";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { useState } from "react";
import { error_toaster, info_toaster } from "../utilities/Toaster";


export default function TitleCapitalizationTool() {
  const copyToClipboard = (repo) => {
    if (!repo) return;
    navigator.clipboard
      .writeText(repo)
      .then(() => {
        info_toaster("URL copied to clipboard");
      })
      .catch((err) => {
        error_toaster("Failed to copy URL: ", err);
      });
  };

  const [inputText, setInputText] = useState("");
  const [capitalizedText, setCapitalizedText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const capitalizeTitle = () => {
    const words = inputText.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedTitle = capitalizedWords.join(" ");
    setCapitalizedText(capitalizedTitle);
  };

  const clearText = () => {
    setInputText("");
    setCapitalizedText("");
  };
  return (
    <>
      <div>
        <Header />
        <HeroSection
          title="Title Capitalization Tool"
          subtitle="Title capitalization tool online free"
        />
        <div className="w-4/5 mx-auto my-10">
          <div className="bg-gray-200 rounded-md p-5">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-7">
              Title Capitalization Tool
            </h1>

            <label
              htmlFor="message"
              className="block mb-2 text-2xl font-semibold font-poppins text-gray-900 dark:text-white"
            >
              Your message
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
              <button
                onClick={capitalizeTitle}
                className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                Capitalize
              </button>
              <button
                onClick={clearText}
                className="relative inline-flex items-center justify-center px-5 py-2.5 p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-red-600 group-hover:from-red-500 group-hover:to-red-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800"
              >
                Clear
              </button>
            </div>

            <h2 className="text-2xl font-poppins font-semibold mb-2">
              Capitalized Text:
            </h2>
            <div className="relative">
              <textarea
                id="message"
                rows="4"
                value={capitalizedText}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled
              ></textarea>
              <div>
                <button
                  onClick={() => copyToClipboard(capitalizedText)}
                  className="absolute right-2 top-2"
                >
                  <BiCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
