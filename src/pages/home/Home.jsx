import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/navbar";
import Widgets from "./Widgets";
import Featured from "../../components/featured/featured";
import Charts from "../../components/charts/charts";
import List from "../../components/table/Table";

const Home = ({ setDark }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Widgets />
        <div className="charts">
          <Featured />
          <Charts aspect={2 / 1} title="Last 8 Months Graph" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
