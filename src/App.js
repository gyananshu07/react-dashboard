import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import Single from "./pages/singleUser/single";
import New from "./pages/new/new";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
