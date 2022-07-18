import "./card.css";

import React, { useContext } from "react";
import { formatDate, getDaysDiff } from "../../utils/dateUtils";

import { CardsContext } from "../App/App";
import img from "../card/charm_menu-meatball.svg";

export const Card = (props) => {
  const { id, activity, esd, efd, lsd, lfd } = props.card;

  const { deleteCard } = useContext(CardsContext);

  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDeleteCard = () => {
    deleteCard(id);
  };

  return (
    <div className="cardContainer">
      <div className="header">
        <span>{activity || "Activity"}</span>
        <img src={img} alt="img" onClick={toggleMenu}></img>
      </div>
      {isMenuVisible ? (
        <div className="menu">
          <span>Edit</span>
          <div className="btn-delete" onClick={handleDeleteCard}>
            Delete
          </div>
        </div>
      ) : null}
      <div className="top-container">
        <div className="first-block">{formatDate(esd)}</div>
        <div className="second-block">{getDaysDiff(esd, efd)}</div>
        <div className="third-block">{formatDate(efd)}</div>
      </div>
      <div className="bottom-container">
        <div className="first-block-bot">{formatDate(lsd)}</div>
        <div className="second-block-bot">{getDaysDiff(lsd, lfd)}</div>
        <div className="third-block-bot">{formatDate(lfd)}</div>
      </div>
    </div>
  );
};

export const CardsList = () => {
  const { cards } = useContext(CardsContext);
  return (
    <div className="list">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};
