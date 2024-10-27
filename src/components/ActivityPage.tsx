import "./ActivityPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ActivityPage = () => {
  return (
    <div className="activity-wrapper">
      <div className="activity-header">
        <Link to="/">
          <button className="activity-back-button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
        <div className="progress-header-title">
          <p>Today's Activity</p>
        </div>
      </div>

      <div className="activity-content">
        <div className="activity-title">
          <h2 className="activity-title-h2">Match the Flowers! 🌺</h2>
          <p>Find pairs of matching flowers in the garden</p>
        </div>

        <div className="activity-instruction-box">
          <FontAwesomeIcon icon={faLightbulb} className="instruction-icon" />
          <p>
            Tap on two cards to see if they match. Find all pairs to complete
            the garden!
          </p>
        </div>

        <div className="game-area">
          <div className="memory-grid">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="memory-card"
                  onClick={() => (window.location.pathname = "/feedback")}
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
