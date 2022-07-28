import Datatable from "../../components/dataTable/DataTable";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

import { motion } from "framer-motion";

const list = () => {
  return (
    <motion.div
      className="list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </motion.div>
  );
};

export default list;
