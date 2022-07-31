import "./FillForm.css";

import { Box, Button, Input, Modal } from "@mui/material";
import React, { useContext, useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import BasicTooltip from "../../utils/BasicTooltip";
import { CardsContext } from "../app/App";
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: 2,
};

export const FillForm = (props) => {
  const { addCard } = useContext(CardsContext);

  // modal functions
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

  return (
    <div>
      <Button onClick={handleOpen} size="small">
        <BasicTooltip></BasicTooltip>
      </Button>
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
              onChange={(e) => setActivity(e.target.value)}
            />
          </div>
          <br />
          <div className="modalBlock1">
            <span className="modalTitle">Early Start Date (ESD)</span>
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
          </div>
          <br />
          <div className="modalBlock1">
            <span className="modalTitle">Early Finish Date (EFD)</span>
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
                onChange={(newValue) => {
                  setLsd(newValue);
                }}
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
                onChange={(newValue) => {
                  setLfd(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <br />
          <div className="ButtonsBot">
            <Button
              onClick={submit}
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
  );
};
