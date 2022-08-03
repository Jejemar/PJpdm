import "./FillForm.css";

import { Button } from "@mui/material";
import React, { useContext, useState } from "react"; // This is the most correct way to import

import BasicTooltip from "../../utils/BasicTooltip";
import { CardsContext } from "../app/App";
import CardForm from "../card/CardForm";

const FillForm = (props) => {
  const { addCard } = useContext(CardsContext);

  // modal functions
  const [isModalVisible, setVisibility] = useState(false);
  const handleOpen = () => setVisibility(true);
  const handleClose = () => setVisibility(false);

  const handleSubmit = ({ id, activity, esd, efd, lsd, lfd }) => {
    addCard(id, activity, esd, efd, lsd, lfd);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} size="small">
        <BasicTooltip></BasicTooltip>
      </Button>
      {isModalVisible ? (
        <CardForm action="add" onSubmit={handleSubmit} onCancel={handleClose} />
      ) : null}
    </div>
  );
};

export default FillForm;
