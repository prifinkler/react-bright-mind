import "./App.css";

import GrandmaHomepage from "./components/GrandmaHomepage";
import ActivityPage from "./components/ActivityPage";
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
        <Route path="/activity" element={<ActivityPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
