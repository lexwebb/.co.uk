import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../config/routes";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  );
};

export default Router;
