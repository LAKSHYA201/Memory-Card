import "../../styles/websiteHeader.css";
export default function WebsiteHeader({ currentScore, bestScore }) {
  return (
    <div className="websiteHeader">
      <h1>STAR CARDS</h1>
      <div className="scoreHolder">
        <h3>Current Score : {currentScore}</h3>
        <h3>Best Score : {bestScore}</h3>
      </div>
    </div>
  );
}
