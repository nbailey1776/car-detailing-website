// src/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // Check if user is authenticated by looking for a token
    const token = localStorage.getItem('auth-token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      setAuthState({
        isAuthenticated: true,
        user: user,
      });
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('auth-token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setAuthState({
      isAuthenticated: true,
      user: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
