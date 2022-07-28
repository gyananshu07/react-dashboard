import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/navbar";
import Widgets from "./Widgets";
import Featured from "../../components/featured/featured";
import Charts from "../../components/charts/charts";
import List from "../../components/table/Table";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
};

export default Home;
