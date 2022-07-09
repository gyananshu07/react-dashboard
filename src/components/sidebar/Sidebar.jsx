import "./sidebar.scss";

import List from "../../pages/list/list";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">helloadmin</span>
      </div>
      <hr />
      <div className="center">
        <List />
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
