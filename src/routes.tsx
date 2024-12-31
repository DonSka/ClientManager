// src/routes.ts
import { Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

export const getRoutes = () => {
  const isAuthenticatedState = isAuthenticated();

  return [
    {
      path: "/",
      element: isAuthenticatedState ? (
        <Navigate to="/dashboard" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];
};
