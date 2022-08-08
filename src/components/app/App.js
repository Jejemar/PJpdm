import "./App.css";

import React, { createContext, useState } from "react";

import AppBar from "@mui/material/AppBar";
import ButtonAppBar from "../header/Header";
import CardsList from "../card/CardsList";
import FillForm from "../fillForm/FillForm";
import Toolbar from "@mui/material/Toolbar";

const defaultCards = [
  {
    id: "1",
    activity: "Test 1",
    esd: "07/14/2022",
    efd: "07/15/2022",
    lsd: "07/15/2022",
    lfd: "07/16/2022",
  },
  {
    id: "2",
    activity: "Test 2",
    esd: "07/16/2022",
    efd: "07/17/2022",
    lsd: "07/17/2022",
    lfd: "07/18/2022",
  },
  {
    id: "3",
    activity: "Test 3",
    esd: "07/17/2022",
    efd: "07/18/2022",
    lsd: "07/18/2022",
    lfd: "07/19/2022",
  },
  {
    id: "4",
    activity: "Test 4",
    esd: "07/18/2022",
    efd: "07/19/2022",
    lsd: "07/19/2022",
    lfd: "07/20/2022",
  },
  {
    id: "5",
    activity: "Test 5",
    esd: "07/19/2022",
    efd: "07/20/2022",
    lsd: "07/21/2022",
    lfd: "07/22/2022",
  },
  {
    id: "6",
    activity: "Test 6",
    esd: "07/19/2022",
    efd: "07/20/2022",
    lsd: "07/21/2022",
    lfd: "07/22/2022",
  },
  {
    id: "7",
    activity: "Test 7",
    esd: "07/19/2022",
    efd: "07/20/2022",
    lsd: "07/21/2022",
    lfd: "07/22/2022",
  },
  {
    id: "8",
    activity: "Test 8",
    esd: "07/19/2022",
    efd: "07/20/2022",
    lsd: "07/21/2022",
    lfd: "07/22/2022",
  },
];

export const CardsContext = createContext({
  cards: [],
  addCard: () => {},
  removeCard: () => {},
  editCard: () => {},
});

function App() {
  const [cards, setCards] = useState(defaultCards);

  const addCard = (newCard) => setCards((prevCards) => [...prevCards, newCard]);

  const deleteCard = (id) => setCards(cards.filter((card) => card.id !== id));

  const editCard = (updatedCard) =>
    setCards(
      cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );

  return (
    <div className="App">
      <CardsContext.Provider
        value={{
          cards,
          addCard,
          deleteCard,
          editCard,
        }}
      >
        <div className="one">
          <ButtonAppBar />
        </div>
        <div className="two">
          <AppBar
            position="static"
            sx={{ background: "#FFE76C" }}
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
        {/* <div className="four">
          <CardForm />
        </div> */}
      </CardsContext.Provider>
    </div>
  );
}

export default App;
