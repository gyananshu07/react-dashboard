import "./App.css";
import { BrowserRouter } from "react-router-dom";

import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/context";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
