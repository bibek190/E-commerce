import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  return user?.uid ? children : <Navigate to="/" />;
};

export default PrivateRoute;
