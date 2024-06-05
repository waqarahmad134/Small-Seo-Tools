import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./errors/error-page";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import WordCounterTool from "./pages/WordCounterTool";
import TitleCapitalizationTool from "./pages/TitleCapitalizationTool";
import TextToSpeechTool from "./pages/TextToSpeechTool";
import RelatedKeywordsTool from "./pages/RelatedKeywordsTool";
import Md5 from "./pages/Md5";

function App() {
  return (
    <div>
      <ToastContainer />
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text-to-speech-tool" element={<TextToSpeechTool />} />
            <Route path="/word-counter" element={<WordCounterTool />} />
            <Route
              path="/title-capitalization-tool"
              element={<TitleCapitalizationTool />}
            />
            <Route path="/related-keyword-tool" element={<RelatedKeywordsTool />} />
            <Route path="/md5-generator" element={<Md5 />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
