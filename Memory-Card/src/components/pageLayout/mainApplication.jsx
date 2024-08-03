import "../../styles/mainApplication.css";
import CardImg from "../cardImg";

export default function MainApplication() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  shuffleArray(array);

  return (
    <div className="mainApplication">
      <div className="card">
        <CardImg cardNo={1} randomImg={array[0]} />
      </div>
      <div className="card">
        <CardImg cardNo={2} randomImg={array[1]} />
      </div>
      <div className="card">
        <CardImg cardNo={3} randomImg={array[2]} />
      </div>
      <div className="card">
        <CardImg cardNo={4} randomImg={array[3]} />
      </div>
      <div className="card">
        <CardImg cardNo={5} crandomImg={array[4]} />
      </div>
      <div className="card">
        <CardImg cardNo={6} randomImg={array[5]} />
      </div>
      <div className="card">
        <CardImg cardNo={7} randomImg={array[6]} />
      </div>
      <div className="card">
        <CardImg cardNo={8} randomImg={array[7]} />
      </div>
      <div className="card">
        <CardImg cardNo={9} randomImg={array[8]} />
      </div>
      <div className="card">
        <CardImg cardNo={10} randomImg={array[9]} />
      </div>
    </div>
  );
}
