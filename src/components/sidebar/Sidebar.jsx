import "./sidebar.scss";

import List from "./list";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/context";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="logoLink">
          <span className="logo">helloadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <List />
      </div>
      <p className="title1">THEME</p>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
