import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";

export default function TextToSpeechTool() {
  const [text, setText] = useState("");
  const [speakingStatus, setSpeakingStatus] = useState("Idle");

  const speakText = () => {
    if (!text) return;
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
    setSpeakingStatus("Speaking");
    speech.onend = () => {
      setSpeakingStatus("Idle");
    };
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <Header />
        <HeroSection
          title="Text-to-Speech"
          subtitle="Text-to-Speech Tool online for free"
        />
        <div className="w-4/5 mx-auto my-10">
          <div className="bg-gray-200 rounded-md p-5">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-7">
              Text-to-Speech
            </h1>

            <textarea
              rows="4"
              value={text}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type or paste text here....."
            ></textarea>
            <div className="my-5">
              <button
                onClick={speakText}
                className="relative inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                Speak
              </button>
              <button
                onClick={() => {
                  setText("");
                  setSpeakingStatus("Idle");
                }}
                className="relative inline-flex items-center justify-center px-5 py-2.5 p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-red-600 group-hover:from-red-500 group-hover:to-red-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800"
              >
                Clear
              </button>
              <p>Speaking Status: {speakingStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
