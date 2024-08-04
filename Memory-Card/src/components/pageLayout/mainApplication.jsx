import WebsiteHeader from "../pageLayout/websiteHeader";
import "../../styles/mainApplication.css";
import shuffle from "../../helper/shuffler";
import CardImg from "../cardImg";
import { useState } from "react";

export default function MainApplication() {
  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [card1Click, setCard1CLick] = useState(0);
  let [card2Click, setCard2Click] = useState(0);
  let [card3Click, setCard3Click] = useState(0);
  let [card4Click, setCard4Click] = useState(0);
  let [card5Click, setCard5Click] = useState(0);
  let [card6Click, setCard6Click] = useState(0);
  let [card7Click, setCard7Click] = useState(0);
  let [card8Click, setCard8Click] = useState(0);
  let [card9Click, setCard9Click] = useState(0);
  let [card10Click, setCard10Click] = useState(0);

  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  shuffle(array);

  return (
    <>
      <WebsiteHeader />
      <div className="mainApplication">
        <div className="card">
          <CardImg
            cardNo={array[0]}
            onClick={() => {
              if (card1Click == 0) {
                setCard1CLick(1);
                setCurrentScore(currentScore++);
                if (currentScore >= bestScore) setBestScore(currentScore);
              }
            }}
          />
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
