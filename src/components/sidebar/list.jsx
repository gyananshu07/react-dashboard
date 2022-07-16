import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import "./list.scss";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <ul>
      <p className="title">MAIN</p>
      <li>
        <DashboardIcon className="icon" />
        <span>Dashboard</span>
      </li>
      <p className="title">LIST</p>

      <Link className="link" to="/users">
        <li>
          <CategoryIcon className="icon" />
          <span>Users</span>
        </li>
      </Link>

      <Link className="link" to="/products">
        <li>
          <CategoryIcon className="icon" />
          <span>Products</span>
        </li>
      </Link>

      <Link className="link" to="/orders">
        <li>
          <CreditCardIcon className="icon" />
          <span>Orders</span>
        </li>
      </Link>

      <Link className="link" to="/delivery">
        <li>
          <LocalShippingIcon className="icon" />
          <span>Delivery</span>
        </li>
      </Link>

      <p className="title">USEFUL</p>
      <Link className="link" to="/stats">
        <li>
          <BarChartIcon className="icon" />
          <span>Stats</span>
        </li>
      </Link>
      <Link className="link" to="/notifications">
        <li>
          <CircleNotificationsIcon className="icon" />
          <span>Notifications</span>
        </li>
      </Link>

      <p className="title">SERVICE</p>
      <Link className="link" to="/system">
        <li>
          <HealthAndSafetyIcon className="icon" />
          <span>System Health</span>
        </li>
      </Link>
      <li>
        <PsychologyIcon className="icon" />
        <span>Logs</span>
      </li>
      <li>
        <SettingsIcon className="icon" />
        <span>Settings</span>
      </li>
      <p className="title">USER</p>
      <li>
        <AccountCircleIcon className="icon" />
        <span>Profile</span>
      </li>
      <li>
        <LogoutIcon className="icon" />
        <span>Logout</span>
      </li>
    </ul>
  );
};

export default List;
