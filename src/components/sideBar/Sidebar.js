import "./Sidebar.css";

import React, { Fragment, useState } from "react";

import FillForm from "../fillForm/FillForm"
import icon1 from "./shape-square-plus.svg";
import icon2 from "./Vector.svg";
import icon3 from "./Vector2.svg";
import icon4 from "./Vector3.svg";
import icon6 from "./Group2.svg";
import icon7 from "./Group3.svg";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Fragment>
      <div className="sidebar">
        <img
          src={icon1}
          alt="first-icon"
          className="icon"
          onClick={showSidebar}
        />
        <img src={icon2} alt="first-icon" className="icon" />
        <img src={icon3} alt="first-icon" className="icon" />
        <img src={icon4} alt="first-icon" className="icon" />
      </div>
      <div className={sidebar ? "slide-bar active" : "slide-bar"}>
        <FillForm />
        {/* <img
          src={icon5}
          alt="first-icon"
          className="icon"
          onClick={showSidebar}
        /> */}
        <img
          src={icon6}
          alt="first-icon"
          className="icon"
          onClick={showSidebar}
        />
        <img
          src={icon7}
          alt="first-icon"
          className="icon"
          onClick={showSidebar}
        />
      </div>
    </Fragment>
  );
};

export default Sidebar;
