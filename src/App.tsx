import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GrandmaHomepage from './components/GrandmaHomepage';
import ActivityPage from './components/ActivityPage';
import SuccessPage from './components/SuccessPage';
import GardenProgress from './components/GardenProgress';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GrandmaHomepage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/garden" element={<GardenProgress />} />
      </Routes>
    </Router>
  );
}

export default App;
