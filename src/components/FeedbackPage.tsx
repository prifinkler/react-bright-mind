import { Link } from "react-router-dom";

function FeedbackPage() {
  return (
    <div className="winer-wrapper">
      <div className="celebration">
        <img className="trophy" src="/images/win.gif" />
        <h1>Well Done!</h1>
      </div>
      <h2 style={{ display: "flex" }}>Do you want to Continue?</h2>
      <div className="action-button">
        <Link to="/activity" style={{background: "var(--cucumber)", color: "var(--blas-blue)", width: "300px"}}>
            <img src="/images/puzzle.png" />
            Try Another Puzzle
        </Link>
        <Link to="/"style={{background: "var(--acapulco-blue)", color: "white", width: "220px", height: "100px"}}>
          <img src="/images/patient.png" />
         Have a Rest
        </Link>
      </div>
    </div>
  );
}

export default FeedbackPage;
