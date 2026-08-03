import "./Card.css";

function Card({ title, children }) {
  console.log("Card Rendered");
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Card;
