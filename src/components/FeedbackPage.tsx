import { Link } from "react-router-dom";
import {
  faPuzzlePiece,
  faBed,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeedbackPage() {
  return (
    <div className="winer-wrapper">
      <div className="celebration">
        <img className="trophy" src="/images/win.gif" />
        <h1>Well Done!</h1>
      </div>
      <h2 style={{ display: "flex" }}>Do you want to Continue?</h2>
      <div className="action-button">
        <Link
          to="/"
          style={{ background: "var(--cucumber)", color: "var(--blas-blue)" }}
        >
          <FontAwesomeIcon icon={faLeaf} className="star-icon" />
          A new flower in the garden!
        </Link>
        <Link
          to="/"
          style={{ background: "var(--cucumber)", color: "var(--blas-blue)" }}
        >
          <FontAwesomeIcon icon={faPuzzlePiece} className="star-icon" />
          Try another Puzzle
        </Link>
        <Link
          to="/"
          style={{ background: "var(--acapulco-blue)", color: "white" }}
        >
          <FontAwesomeIcon icon={faBed} className="star-icon" />
          Have a Rest
        </Link>
      </div>
    </div>
  );
}

export default FeedbackPage;
