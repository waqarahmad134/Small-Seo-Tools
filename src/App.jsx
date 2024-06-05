import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./errors/error-page";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import WordCounterTool from "./pages/WordCounterTool";
import TitleCapitalizationTool from "./pages/TitleCapitalizationTool";
import TextToSpeechTool from "./pages/TextToSpeechTool";

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
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
