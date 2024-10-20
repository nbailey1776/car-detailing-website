// src/components/UserAuth.js
import React, { useState, useContext } from 'react';
import { Form, Input, Button, message, Tabs, Alert } from 'antd';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './UserAuth.css';

const UserAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { login } = useContext(AuthContext);

  // Determine the default active tab based on the route
  const getDefaultTab = () => {
    if (location.pathname === '/register') {
      return '2'; // Register tab
    } else {
      return '1'; // Login tab
    }
  };

  // Handle tab change to update the URL
  const handleTabChange = (key) => {
    if (key === '1') {
      navigate('/login');
    } else if (key === '2') {
      navigate('/register');
    }
  };

  const onFinishLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
        values
      );
  
      const { token, user } = response.data;
  
      // Save token and user data
      localStorage.setItem('auth-token', token);
      localStorage.setItem('user', JSON.stringify(user));
      login(user, token); // Call the login function from AuthContext
  
      message.success('Login successful!');
      navigate('/booking');
    } catch (error) {
      message.error(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };
  

  const onFinishRegister = async (values) => {
    setLoading(true);
    try {
      // Include role for admin registration (this could be done securely by checking some access key)
      const role = values.role || 'user'; // Default to 'user'
  
      const { username, email, password } = values; // Exclude 'confirm' field
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,
        { username, email, password, role } // Add role to the registration payload
      );
      message.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      message.error(
        error.response?.data?.message || 'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const loginForm = (
    <Form name="login" onFinish={onFinishLogin} className="login-form">
      <h2>Login</h2>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please input your Email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input placeholder="Email" size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password placeholder="Password" size="large" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          block
          size="large"
        >
          Log In
        </Button>
      </Form.Item>
    </Form>
  );

  const registerForm = (
    <Form
      name="register"
      onFinish={onFinishRegister}
      className="register-form"
    >
      <h2>Register</h2>
      <Form.Item
        name="username"
        rules={[
          { required: true, message: 'Please choose a Username!' },
          { min: 3, message: 'Username must be at least 3 characters!' },
        ]}
      >
        <Input placeholder="Username" size="large" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please input your Email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input placeholder="Email" size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Please choose a Password!' },
          { min: 6, message: 'Password must be at least 6 characters!' },
        ]}
      >
        <Input.Password placeholder="Password" size="large" />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Please confirm your Password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('Passwords do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" size="large" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          block
          size="large"
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <div className="user-auth-container">
      {/* Display the alert message */}
      <Alert
        message="You must be logged in/registered to book an appointment"
        type="info"
        showIcon
        style={{ marginTop: '60px' }}
      />
      <Tabs
        defaultActiveKey={getDefaultTab()}
        onChange={handleTabChange}
        type="card"
        items={[
          {
            key: '1',
            label: 'Login',
            children: loginForm,
          },
          {
            key: '2',
            label: 'Register',
            children: registerForm,
          },
        ]}
      />
    </div>
  );
};

export default UserAuth;
