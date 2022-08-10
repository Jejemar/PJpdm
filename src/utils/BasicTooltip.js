import * as React from "react";

import Tooltip from "@mui/material/Tooltip";
import icon1 from "../components/sideBar/Group1.svg";

export default function BasicTooltip() {
  return (
    <Tooltip title="Add New Card">
      <img src={icon1} alt="icon"></img>
    </Tooltip>
  );
}
