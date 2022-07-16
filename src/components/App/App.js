import "./App.css";

import React, { createContext, useState } from "react";

import { CardsList } from "../card/card";
import { FillForm } from "../Fill form/FillForm";

export const CardsContext = createContext({
  cards: [],
  addCard: () => {},
  removeCard: () => {},
});

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (id, activity, esd, efd, lsd, lfd) => {
    const newCard = { id, activity, esd, efd, lsd, lfd };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  return (
    <div className="App">
      <CardsContext.Provider
        value={{
          cards,
          addCard,
          deleteCard,
        }}
      >
        <FillForm />

        <CardsList />
      </CardsContext.Provider>
    </div>
  );
}

export default App;
