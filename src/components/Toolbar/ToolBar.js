import "./ToolBar.css";

import AppBar from "@mui/material/AppBar";
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import IconButton from "@mui/material/IconButton";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import React from "react";
import RedoIcon from "@mui/icons-material/Redo";
import Toolbar from "@mui/material/Toolbar";
import UndoIcon from "@mui/icons-material/Undo";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

const ToolBar = () => {
  return (
    <AppBar position="static" sx={{ background: "#FFE76C" }} elevation={0}>
      <Toolbar variant="dense" margin="dense">
        
        <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <NavigationOutlinedIcon style={{ color: "Black" }} />
        </IconButton>
        <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <PanToolOutlinedIcon style={{ color: "Black" }} />
        </IconButton>
        <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <UndoIcon style={{ color: "Black" }} />
        </IconButton>
        <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <RedoIcon style={{ color: "Black" }} />
        </IconButton>
        <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <ZoomInIcon style={{ color: "Black" }} />
        </IconButton>
        <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <ZoomOutIcon style={{ color: "Black" }} />
        </IconButton>
        <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <MessageOutlinedIcon style={{ color: "Black" }} />
        </IconButton>
        <IconButton size="small" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <FormatColorFillOutlinedIcon style={{ color: "Black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ToolBar;
