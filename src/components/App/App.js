import "./App.css";

import React, { createContext, useState } from "react";

import AppBar from "@mui/material/AppBar";
import ButtonAppBar from "../Header/header";
import { CardsList } from "../card/card";
import { FillForm } from "../Fill form/FillForm";
import Toolbar from "@mui/material/Toolbar";

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

  const editCard = () => {
    
  }

  return (
    <div className="App">
      <CardsContext.Provider
        value={{
          cards,
          addCard,
          deleteCard,
        }}
      >
        <div className="one">
          <ButtonAppBar />
        </div>
        <div className="two">
          <AppBar
            position="static"
            sx={{  background: "#EFEFEF" }}
            elevation={0}
          >
            <Toolbar variant="dense">
              <FillForm />
            </Toolbar>
          </AppBar>
        </div>
        <div className="three">
          
          <CardsList />
        </div>
        <div className="four"></div>
      </CardsContext.Provider>
    </div>
  );
}

export default App;
