import "../../styles/mainApplication.css";
import CardImg from "../cardImg";

export default function MainApplication() {
  return (
    <div className="mainApplication">
      <div className="card">
        <CardImg cardNo={1} />
      </div>
      <div className="card">
        <CardImg cardNo={2} />
      </div>
      <div className="card">
        <CardImg cardNo={3} />
      </div>
      <div className="card">
        <CardImg cardNo={4} />
      </div>
      <div className="card">
        <CardImg cardNo={5} />
      </div>
      <div className="card">
        <CardImg cardNo={6} />
      </div>
      <div className="card">
        <CardImg cardNo={7} />
      </div>
      <div className="card">
        <CardImg cardNo={8} />
      </div>
      <div className="card">
        <CardImg cardNo={9} />
      </div>
      <div className="card">
        <CardImg cardNo={10} />
      </div>
    </div>
  );
}
