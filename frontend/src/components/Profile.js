// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { Descriptions, Card, Row, Col, Typography, Table, message } from 'antd';
import axios from 'axios';
import moment from 'moment';
import './Profile.css';

const { Title } = Typography;

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchAppointments();
  }, []);

  // Fetch the logged-in user's data
  const fetchUserData = async () => {
    const token = localStorage.getItem('auth-token');
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/profile`, {
        headers: { 'auth-token': token },
      });
      setUserData(response.data);
    } catch (error) {
      message.error('Failed to fetch user data.');
    }
  };

  // Fetch user's appointments
  const fetchAppointments = async () => {
    const token = localStorage.getItem('auth-token');
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/bookings`, {
        headers: { 'auth-token': token },
      });

      const upcoming = response.data.filter(appointment =>
        moment(appointment.appointmentDate).isAfter(moment())
      );

      const past = response.data.filter(appointment =>
        moment(appointment.appointmentDate).isBefore(moment())
      );

      setUpcomingAppointments(upcoming);
      setPastAppointments(past);
    } catch (error) {
      message.error('Failed to fetch appointments.');
    }
  };

  const appointmentColumns = [
    { title: 'Service Type', dataIndex: 'serviceType', key: 'serviceType' },
    { title: 'Date', dataIndex: 'appointmentDate', key: 'appointmentDate' },
    { title: 'Time', dataIndex: 'appointmentTime', key: 'appointmentTime' },
  ];

  return (
    <div className="profile-container">
      <Card className="profile-card">
        <Title level={2}>Profile</Title>
        <Descriptions title="User Information" bordered>
          <Descriptions.Item label="Username">{userData.username}</Descriptions.Item>
          <Descriptions.Item label="Email">{userData.email}</Descriptions.Item>
        </Descriptions>
      </Card>

      <Row gutter={[16, 16]} className="appointments-section">
        <Col span={12}>
          <Card title="Upcoming Appointments" className="appointment-card">
            <Table
              columns={appointmentColumns}
              dataSource={upcomingAppointments}
              rowKey="_id"
              pagination={false}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Past Appointments" className="appointment-card">
            <Table
              columns={appointmentColumns}
              dataSource={pastAppointments}
              rowKey="_id"
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
