import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getRoutes } from "./routes";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {getRoutes().map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
