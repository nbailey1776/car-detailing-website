// src/components/AdminBookings.js
import React, { useState, useEffect } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const token = localStorage.getItem('auth-token');
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/bookings/all`,
        { headers: { 'auth-token': token } }
      );
      setBookings(response.data);
    } catch (error) {
      message.error('Failed to fetch bookings.');
    }
  };

  const columns = [
    { title: 'User', dataIndex: ['userId', 'username'], key: 'user' },
    { title: 'Service Type', dataIndex: 'serviceType', key: 'serviceType' },
    { title: 'Date', dataIndex: 'appointmentDate', key: 'appointmentDate' },
    { title: 'Time', dataIndex: 'appointmentTime', key: 'appointmentTime' },
  ];

  return (
    <div>
      <h2>All Bookings</h2>
      <Table columns={columns} dataSource={bookings} rowKey="_id" />
    </div>
  );
};

export default AdminBookings;
