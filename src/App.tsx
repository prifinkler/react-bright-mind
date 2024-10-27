import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GrandmaHomepage from './components/GrandmaHomepage';
import ActivityPage from './components/ActivityPage';
import FeedbackPage from "./components/FeedbackPage";
import GardenProgress from './components/GardenProgress';

import './App.css';
import "./styles/feedback.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GrandmaHomepage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/garden" element={<GardenProgress />} />
      </Routes>
    </Router>
  );
}
export default App;
