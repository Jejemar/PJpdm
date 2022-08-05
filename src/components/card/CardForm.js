import { Box, Button, Input, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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
  const { action, card, onSubmit, onCancel } = props;

  const [title, setTitle] = useState("");
  const [earlyStartDate, setEarlyStartDate] = useState(null);
  const [earlyFinishDate, setEarlyFinishDate] = useState(null);
  const [lateStartDate, setLateStartDate] = useState(null);
  const [lateFinishDate, setLateFinishDate] = useState(null);

  if (action === "edit") {
    const { activity, esd, efd, lsd, lfd } = card;
    setTitle(activity);
    setEarlyStartDate(esd);
    setEarlyFinishDate(efd);
    setLateStartDate(lsd);
    setLateFinishDate(lfd);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === "add") {
      onSubmit({
        id: Math.floor(Math.random() * 1000),
        activity: title,
        esd: earlyStartDate,
        efd: earlyFinishDate,
        lsd: lateStartDate,
        lfd: lateFinishDate,
      });
    }

    if (action === "edit") {
      const { id } = card;
      onSubmit({
        id,
        activity: title,
        esd: earlyStartDate,
        efd: earlyFinishDate,
        lsd: lateStartDate,
        lfd: lateFinishDate,
      });
    }
  };

  const handleCancel = () => {
    if (action === "add") {
      setTitle("");
      setEarlyStartDate(null);
      setEarlyFinishDate(null);
      setLateStartDate(null);
      setLateFinishDate(null);
    }
    // will be called in any case
    onCancel();
  };

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
          onClick={handleCancel}
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
