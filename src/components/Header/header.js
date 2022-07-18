import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import IconPdm from "../App/IconPdm.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

// import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: "50px",
          backgroundImage: "linear-gradient(to bottom, #CFB53B, #FFE76C)",
        }}
        elevation={0}
      >
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={IconPdm} alt="MainIcon"></img>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
