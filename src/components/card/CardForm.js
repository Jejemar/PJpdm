import { Box, Button, Input, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useContext, useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CardsContext from '../app/App'

const boxStyle = {
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

const CardForm = (props) => {

  const {editCard} = useContext(CardsContext);

  const { card } = props; // provide card
  const {id, activity, esd, efd, lsd, lfd } = card;
  const [title, setTitle] = useState(activity || ''); // good
  const [earlyStartDate, setEarlyStartDate] = useState(esd || null);
  const [earlyFinishDate, setEarlyFinishDate] = useState(efd || null);
  const [lateStartDate, setLateStartDate] = useState(lsd || null);
  const [lateFinishDate, setLateFinishDate] = useState(lfd || null);

  const updatedCard = {id, activity, esd, efd, lsd, lfd}

  const uq_id = props.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    editCard(uq_id, updatedCard);
  }

  return (
    <Box sx={boxStyle}>
      <h3>Please enter card information</h3>
      <div className="modalBlock1">
        <span className="modalTitle">Activity name</span>
        <Input
          color="primary"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div className="modalBlock1">
        <span className="modalTitle">Early Start Date (ESD)</span>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={earlyStartDate}
            onChange={(newValue) => {
              setEarlyStartDate(newValue);
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
            value={earlyFinishDate}
            onChange={(newValue) => {
              setEarlyFinishDate(newValue);
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
            value={lateStartDate}
            onChange={(newValue) => {
              setLateStartDate(newValue);
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
            value={lateFinishDate}
            onChange={(newValue) => {
              setLateFinishDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <br />
      <div className="ButtonsBot">
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="success"
          size="small"
        >
          Submit
        </Button>
        <Button
          // onClick={handleClose}
          variant="contained"
          color="error"
          size="small"
        >
          Cancel
        </Button>
      </div>
    </Box>
  );
};

export default CardForm;
