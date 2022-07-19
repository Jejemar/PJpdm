import * as React from "react";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

export default function BasicTooltip() {
  return (
    <Tooltip title="Add New Card">
      <AddCircleOutlineIcon style={{color: "Black"}}>
        <DeleteIcon />
      </AddCircleOutlineIcon>
    </Tooltip>
  );
}
