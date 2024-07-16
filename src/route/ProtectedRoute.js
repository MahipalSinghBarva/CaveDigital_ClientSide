import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return null; // Or loading indicator
  }

  return (
    <Route
      {...rest}
      element={
        isAuthenticated && (isAdmin ? user.role === "admin" : true) ? (
          <Element />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
