// src/PrivateAdminRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateAdminRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (authState.user.role !== 'admin') {
    return <Navigate to="/" />; // Redirect non-admin users
  }

  return children;
};

export default PrivateAdminRoute;
