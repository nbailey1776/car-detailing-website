import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('auth-token') ? true : false;

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
}

export default ProtectedRoute;
