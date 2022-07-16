import "./FillForm.css";

import { Box, Button, Input, Modal } from "@mui/material";
import React, { useContext, useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CardsContext } from "../App/App";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";

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

export const FillForm = (props) => {
  const { addCard } = useContext(CardsContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activity, setActivity] = useState("");

  const [esd, setEsd] = useState(null);
  const [efd, setEfd] = useState(null);
  const [lsd, setLsd] = useState(null);
  const [lfd, setLfd] = useState(null);

  const submit = () => {
    addCard(Math.floor(Math.random() * 1000), activity, esd, efd, lsd, lfd);
    setActivity("");
    setEsd(null);
    setEfd(null);
    setLsd(null);
    setLfd(null);
    handleClose();
  };

  // const { setCard } = useContext(CreateCardContext);

  // const handleActivityInput = (event) => {
  //   setCardObj({ ...cardObj, activity: event.target.value });
  // };

  // const handleESDInput = (event) => {
  //   setCardObj({ ...cardObj, esd: event.target.value });
  // };

  // const handleEFDInput = (event) => {
  //   setCardObj({ ...cardObj, efd: event.target.value });
  // };

  // const handleLSDInput = (event) => {
  //   setCardObj({ ...cardObj, lsd: event.target.value });
  // };

  // const handleLFDInput = (event) => {
  //   setCardObj({ ...cardObj, lfd: event.target.value });
  // };

  // const addCard = () => {

  //   addCardObj(prevCards => [...prevCards, {}]);
  // };

  return (
    <div>
      <Button onClick={handleOpen}>Add New Card</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Please enter card information</h3>
          <div className="modalBlock1">
            <span className="modalTitle">Activity</span>
            <Input
              color="primary"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
          </div>
          <br />
          <div className="modalBlock1">
            <span className="modalTitle">ESD</span>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={esd}
                onChange={(newValue) => {
                  setEsd(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* <Input
            color="secondary"
            value={esd}
            onChange={(e) => setEsd(e.target.value)}
          /> */}
          </div>
          <br />
          <div className="modalBlock1">
            <span className="modalTitle">EFD</span>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={efd}
                onChange={(newValue) => {
                  setEfd(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* <Input
              color="secondary"
              value={efd}
              onChange={(e) => setEfd(e.target.value)}
            /> */}
          </div>
          <br />
          <div className="modalBlock1">
            <span className="modalTitle">LSD</span>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={lsd}
                onChange={(newValue) => {
                  setLsd(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* <Input
              color="secondary"
              value={lsd}
              onChange={(e) => setLsd(e.target.value)}
            /> */}
          </div>
          <br />
          <div className="modalBlock1">
            <span className="modalTitle">LFD</span>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={lfd}
                onChange={(newValue) => {
                  setLfd(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* <Input
              color="secondary"
              value={lfd}
              onChange={(e) => setLfd(e.target.value)}
            /> */}
          </div>
          <br />
          <div className="ButtonsBot">
            <Button onClick={submit}>Add</Button>
            <Button onClick={handleClose}>Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
