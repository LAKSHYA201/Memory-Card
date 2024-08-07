import "../styles/mainApplication.css";
export default function Board({ cards, onClick }) {
  return (
    <main className="mainApplication">
      {cards.map((card) => {
        return (
          <figure key={card.id} id={card.id} onClick={onClick} className="card">
            <img src={card.src} height="100%" width="100%" />
          </figure>
        );
      })}
    </main>
  );
}
