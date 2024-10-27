import { Link } from "react-router-dom";
import {
  faPuzzlePiece,
  faBed,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FeedbackPage.css';


function FeedbackPage() {
  return (
    <div className="winner-wrapper">
      <div className="celebration">
        <img className="trophy" src="/images/win.gif" />
        <h1>Well Done!</h1>
      </div>

      <div className="new-flower">
        <a>A new flower has grown <br/> in your garden!</a>
      </div>

      <h2>What would you like to do next?</h2>
      <div className="action-button">
        <Link
          to="/garden"
          style={{ background: "var(--cucumber)", color: "var(--mid-blue)" }}
        >
          <FontAwesomeIcon icon={faLeaf} className="star-icon" />
          View Garden
        </Link>
        <Link
          to="/activity"
          style={{ background: "var(--clear-sky)", color: "var(--mid-blue)" }}
        >
          <FontAwesomeIcon icon={faPuzzlePiece} className="star-icon" />
          Another Puzzle
        </Link>
        <Link
          to="/"
          style={{ background: "#5f6ca1", color: "white" }}
        >
          <FontAwesomeIcon icon={faBed} className="star-icon" />
          Have a Rest
        </Link>
      </div>
    </div>
  );
}

export default FeedbackPage;
