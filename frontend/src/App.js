// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserAuth from './components/UserAuth';
import Booking from './components/Booking';
import About from './components/About';
import Services from './components/Services';
import Profile from './components/Profile';
import AdminBookings from './components/AdminBookings';
import PrivateRoute from './PrivateRoute';
import PrivateAdminRoute from './PrivateAdminRoute';
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import './App.css';

function App() {
  return (
    <AuthProvider> {/* Wrapping the app with AuthProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserAuth />} />
          <Route path="/register" element={<UserAuth />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/booking"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <PrivateAdminRoute>
                <AdminBookings />
              </PrivateAdminRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
