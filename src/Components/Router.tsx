import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../config/routes";
import Layout from "./Layout";

import { AnimatePresence } from "framer-motion";

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          {Object.entries(routes).map(([path, route]) => (
            <Route
              path={path}
              key={path}
              element={React.createElement(route.page)}
            />
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
