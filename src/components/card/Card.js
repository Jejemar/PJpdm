import "./Card.css";

import { Button, Input } from "@mui/material";
import React, { useContext, useState } from "react";
import { formatDate, getDaysDiff } from "../../utils/dateUtils";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Box from "@mui/material/Box";
import { CardsContext } from "../app/App";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import img from "../card/charm_menu-meatball.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="cardContainer">
      <div className="header">
        <span>{activity}</span>
        <img src={img} alt="img" onClick={toggleMenu}></img>
      </div>
      {isMenuVisible ? (
        <div className="menu">
          <div className="btn-edit" onClick={handleOpen}>
            Edit
          </div>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <h3>Please enter card information</h3>
                <div className="modalBlock1">
                  <span className="modalTitle">Activity name</span>
                  <Input
                    color="primary"
                    value={activity}
                    // onChange={(e) => setActivity(e.target.value)}
                  />
                </div>
                <br />
                <div className="modalBlock1">
                  <span className="modalTitle">Early Start Date (ESD)</span>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Basic example"
                      value={esd}
                      // onChange={(newValue) => {
                      //   setEsd(newValue);
                      // }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <br />
                <div className="modalBlock1">
                  <span className="modalTitle">Early Finish Date (EFD)</span>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Basic example"
                      value={efd}
                      // onChange={(newValue) => {
                      //   setEfd(newValue);
                      // }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <br />
                <div className="modalBlock1">
                  <span className="modalTitle">
                    Late Start
                    <br />
                    Date (LSD)
                  </span>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Basic example"
                      value={lsd}
                      // onChange={(newValue) => {
                      //   setLsd(newValue);
                      // }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <br />
                <div className="modalBlock1">
                  <span className="modalTitle">Late Finish Date (LFD)</span>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Basic example"
                      value={lfd}
                      // onChange={(newValue) => {
                      //   setLfd(newValue);
                      // }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <br />
                <div className="ButtonsBot">
                  <Button
                    // onClick={submit}
                    variant="contained"
                    color="success"
                    size="small"
                  >
                    Submit
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    color="error"
                    size="small"
                  >
                    Cancel
                  </Button>
                </div>
              </Box>
            </Modal>
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
  );
};

export default Card