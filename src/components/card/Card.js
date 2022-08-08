import "./Card.css";

import React, { useContext, useState } from "react";
import { formatDate, getDaysDiff } from "../../utils/dateUtils";

import CardForm from "../card/CardForm";
import { CardsContext } from "../app/App";
import { Modal } from "@mui/material";
import img from "../card/charm_menu-meatball.svg";

/**
 * This component uses CardForm to edit it's entries
 *
 */
const Card = (props) => {
  const { id, activity, esd, efd, lsd, lfd } = props.card;

  const { editCard, deleteCard } = useContext(CardsContext);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  /**
   * After click on Submit transfer new data to context
   * Close card menu and card form
   */
  const handleEditCard = (updatedCard) => {
    editCard(updatedCard);
    setIsMenuVisible(false);
    setIsFormVisible(false);
  };

  /**
   * After click on Cancel close menu and form
   */
  const handleCancelEdit = () => {
    setIsMenuVisible(false);
    setIsFormVisible(false);
  };

  const handleDeleteCard = () => {
    deleteCard(id);
  };

  /**
   * Close menu and open form
   */
  const openForm = () => {
    // if (isMenuVisible) {
    //   setIsMenuVisible(false);
    // }
    setIsFormVisible(true);
  };

  const closeForm = () => setIsFormVisible(false);

  return (
    <>
      <div className="cardContainer">
        <div className="header">
          <span>{activity}</span>
          <img src={img} alt="img" onClick={toggleMenu}></img>
        </div>
        {isMenuVisible ? (
          <div className="menu">
            <div className="btn-edit" onClick={openForm}>
              Edit
            </div>
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
      {/* < == Card Form == > */}
      <Modal
        open={isFormVisible}
        onClose={closeForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardForm
          action="edit"
          card={props.card}
          onSubmit={handleEditCard}
          onCancel={handleCancelEdit}
        />
      </Modal>
    </>
  );
};

export default Card;
