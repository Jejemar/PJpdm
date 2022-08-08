import "./FillForm.css";

import { Button, Modal } from "@mui/material";
import React, { useContext, useState } from "react"; // This is the most correct way to import

import BasicTooltip from "../../utils/BasicTooltip";
import CardForm from "../card/CardForm";
import { CardsContext } from "../app/App";

const FillForm = (props) => {
  const { addCard } = useContext(CardsContext);

  // modal functions
  const [isModalVisible, setVisibility] = useState(false);
  const handleOpen = () => setVisibility(true);
  const handleClose = () => setVisibility(false);

  const handleSubmit = ({ id, activity, esd, efd, lsd, lfd }) => {
    const newCard = { id, activity, esd, efd, lsd, lfd };
    addCard(newCard);
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen} size="small">
        <BasicTooltip></BasicTooltip>
      </Button>
      <Modal
        open={isModalVisible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardForm action="add" onSubmit={handleSubmit} onCancel={handleClose} />
      </Modal>
    </>
  );
};

export default FillForm;
