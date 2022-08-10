import "./Navbar.css";

// import * as AiIcons from "react-icons/ai";

import React, { Fragment } from "react";

// import IconButton from "@mui/material/IconButton";
import IconPdm from "./IconPdm.svg";
// import MenuIcon from "@mui/icons-material/Menu";
// import { SidebarData } from "./SideBarData";

// import * as FaIcons from "react-icons/fa";

function Navbar() {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => {
  //   setSidebar(!sidebar);
  // };

  return (
    <Fragment>
      <div className="navbar">
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={showSidebar}
          className="btn-menu"
          padding="20px"
        >
          <MenuIcon />
        </IconButton> */}
        <img src={IconPdm} alt="MainIcon"></img>
        {/* <FaIcons.FaBars onClick={showSidebar}/> */}
      </div>

      {/* <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
        // onMouseLeave={showSidebar}
      >
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={showSidebar}
              className="btn-menu"
            >
              <AiIcons.AiOutlineClose />
            </IconButton>
            <img src={IconPdm} alt="MainIcon"></img>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </nav> */}
    </Fragment>
  );
}

export default Navbar;
