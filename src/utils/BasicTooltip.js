import * as React from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

export default function BasicTooltip() {
  return (
    <Tooltip title="Add New Card">
      <AddCircleIcon style={{color: "Black"}}>
        <DeleteIcon />
      </AddCircleIcon>
    </Tooltip>
  );
}
