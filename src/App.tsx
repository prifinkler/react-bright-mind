import "./App.css";

import GrandmaHomepage from "./components/GrandmaHomepage";
import "./styles/feedback.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page components
import FeedbackPage from "./components/FeedbackPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GrandmaHomepage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
