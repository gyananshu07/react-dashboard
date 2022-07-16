import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NavBarIcon from "./navbarIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <NavBarIcon />
      </div>
    </div>
  );
};

export default Navbar;
