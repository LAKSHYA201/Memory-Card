import WebsiteHeader from "../pageLayout/websiteHeader";
import "../../styles/mainApplication.css";
import shuffle from "../../helper/shuffler";
import Board from "../cardImg";
import starCards from "../../helper/cardsIndex";
import { useState } from "react";

export default function MainApplication() {
  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(starCards);
  const [savedCards, setSavedCards] = useState([]);

  const handleGamePlay = (e) => {
    let selectedCard;
    const clickedElem = e.target.closest(".card");
    cards.forEach((cardObj) => {
      if (cardObj.id === clickedElem.id) {
        selectedCard = cardObj;
      }
    });

    if (savedCards.includes(selectedCard)) {
      if (currentScore > bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      setSavedCards([]);
    } else {
      setSavedCards([...savedCards, selectedCard]);
      setCurrentScore(currentScore + 1);
    }

    setCards(shuffle(starCards));
  };

  return (
    <>
      <WebsiteHeader currentScore={currentScore} bestScore={bestScore} />

      <Board cards={cards} onClick={handleGamePlay} />
    </>
  );
}
