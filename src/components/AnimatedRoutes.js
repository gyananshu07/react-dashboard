import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { productInputs, userInputs } from "../formSource";

import Home from "../pages/home/Home";
import Login from "../pages/login/login";
import List from "../pages/list/list";
import Single from "../pages/singleUser/single";
import New from "../pages/new/new";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
