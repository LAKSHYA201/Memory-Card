import WebsiteHeader from "../pageLayout/websiteHeader";
import "../../styles/mainApplication.css";
import shuffle from "../../helper/shuffler";
import CardImg from "../cardImg";
import { useState } from "react";

export default function MainApplication() {
  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);

  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  shuffle(array);

  return (
    <>
      <WebsiteHeader currentScore={currentScore} bestScore={bestScore} />
      <div className="mainApplication">
        <div className="card">
          <CardImg cardNo={array[0]} />
        </div>
        <div className="card">
          <CardImg cardNo={array[1]} />
        </div>
        <div className="card">
          <CardImg cardNo={array[2]} />
        </div>
        <div className="card">
          <CardImg cardNo={array[3]} />
        </div>
        <div className="card">
          <CardImg cardNo={array[4]} />
        </div>
        <div className="card">
          <CardImg cardNo={array[5]} />
        </div>
        <div className="card">
          <CardImg cardNo={array[6]} />
        </div>
        <div className="card">
          <CardImg cardNo={array[7]} />
        </div>
        <div className="card">
          <CardImg cardNo={array[8]} />
        </div>
        <div className="card">
          <CardImg cardNo={array[9]} />
        </div>
      </div>
    </>
  );
}
