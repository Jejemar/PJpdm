import "./Card.css";

import React, { useContext, useEffect, useState } from "react";
import { formatDate, getDaysDiff } from "../../utils/dateUtils";

import CardForm from "../card/CardForm";
import { CardsContext } from "../app/App";
import { Modal } from "@mui/material";
import img from "../card/charm_menu-meatball.svg";

const Card = (props) => {
  const { id, activity, esd, efd, lsd, lfd } = props.card;

  const { deleteCard } = useContext(CardsContext);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDeleteCard = () => {
    deleteCard(id);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [props]);

  return (
    <div className="cardContainer">
      <div className="header">
        <span>{activity}</span>
        <img src={img} alt="img" onClick={toggleMenu}></img>
      </div>
      {isMenuVisible ? (
        <div className="menu">
          <div className="btn-edit" onClick={handleShow}>
            Edit
          </div>
          <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <CardForm theCard={props} />
          </Modal>
          <div className="btn-delete" onClick={handleDeleteCard}>
            Delete
          </div>
        </div>
      ) : null}
      <div className="top-container">
        <div className="first-block">{formatDate(esd)}</div>
        <div className="second-block">
          {getDaysDiff(esd, efd) < 0
            ? "Please re-enter date"
            : getDaysDiff(esd, efd)}
        </div>
        <div className="third-block">{formatDate(efd)}</div>
      </div>
      <div className="bottom-container">
        <div className="first-block-bot">{formatDate(lsd)}</div>
        <div className="second-block-bot">
          {getDaysDiff(lsd, lfd) < 0
            ? "Please re-enter date"
            : getDaysDiff(lsd, lfd)}
        </div>
        <div className="third-block-bot">{formatDate(lfd)}</div>
      </div>
    </div>
  );
};

export default Card;
