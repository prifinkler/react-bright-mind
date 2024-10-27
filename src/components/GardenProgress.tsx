import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './GardenProgress.css';

const GardenProgress = () => {
  return (
    <div className="garden-page">
      {/* Header */}
      <div className="garden-header">
        <button className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="header-title">Your Garden</h1>
      </div>

      {/* Progress Box */}
      <div className="info-box">
        <div className="lightbulb-icon">🌱</div>
        <p>Your garden grows with every activity you complete!</p>
      </div>

      {/* Garden Display */}
      <div className="garden-grid">
        <div className="plant-box">
          <div className="plant">🌸</div>
          <p>Memory Game</p>
        </div>
        <div className="plant-box">
          <div className="plant">🌺</div>
          <p>Pattern Match</p>
        </div>
        <div className="plant-box empty">
          <div className="plant-placeholder"></div>
          <p>Complete more activities</p>
        </div>
        <div className="plant-box empty">
          <div className="plant-placeholder"></div>
          <p>Complete more activities</p>
        </div>
        <div className="plant-box empty">
          <div className="plant-placeholder"></div>
          <p>Complete more activities</p>
        </div>
        <div className="plant-box empty">
          <div className="plant-placeholder"></div>
          <p>Complete more activities</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <p className="progress-text">2 more activities until a new flower grows!</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '66%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default GardenProgress;
