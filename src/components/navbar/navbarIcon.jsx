import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ListIcon from "@mui/icons-material/List";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DarkModeContext } from "../../context/context";
import { useContext } from "react";

const NavBarIcon = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="items">
      <div className="item">
        <LanguageIcon />
        English
      </div>
      <div className="item">
        <DarkModeIcon onClick={() => dispatch({ type: "TOGGLE" })} />
      </div>
      <div className="item">
        <FullscreenExitIcon />
      </div>
      <div className="item">
        <CircleNotificationsIcon />
        <div className="counter">1</div>
      </div>
      <div className="item">
        <ChatBubbleOutlineIcon />
        <div className="counter">7</div>
      </div>
      <div className="item">
        <ListIcon />
      </div>
      <div className="item">
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default NavBarIcon;
