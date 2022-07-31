import React, { useContext } from "react";

import Card from "./Card";
import { CardsContext } from "../app/App";

const CardsList = () => {
  const { cards } = useContext(CardsContext);
  return (
    <div className="list">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default CardsList;
