import React, { useState, useContext } from 'react';
import { Menu, Drawer, Button, Dropdown } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  MenuOutlined,
  UserOutlined,
  CarOutlined,
  LogoutOutlined,
  DashboardOutlined, // Add a new icon for the admin panel
} from '@ant-design/icons';
import homeIcon from '../assets/fcDetailing.png';
import { AuthContext } from '../AuthContext'; // Import AuthContext
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const { authState, logout } = useContext(AuthContext); // Get auth state and logout function

  // Show and hide the drawer
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // Account menu for logged-in users
  const accountMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">
          <UserOutlined /> Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={logout}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {/* Regular Navbar */}
      <div className="navbar-container">
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[location.pathname]}
          className="navbar-menu"
        >
          <Menu.Item key="/" className="menu-item-home">
            <Link to="/">
              <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
          </Menu.Item>

          <Menu.Item key="/services">
            <Link to="/services">
              <CarOutlined /> Services
            </Link>
          </Menu.Item>

          <Menu.Item key="/about">
            <Link to="/about">About Us</Link>
          </Menu.Item>

          <Menu.Item key="/booking">
            <Link to="/booking">Book Now</Link>
          </Menu.Item>

          {/* Only show Admin Panel link if the user is an admin */}
          {authState.user?.role === 'admin' && (
            <Menu.Item key="/admin/bookings">
              <Link to="/admin/bookings">
                <DashboardOutlined /> Admin Panel
              </Link>
            </Menu.Item>
          )}

          <div className="menu-right">
            {authState.isAuthenticated ? (
              // If user is authenticated, show account menu
              <Dropdown overlay={accountMenu} placement="bottomRight">
                <Button type="link" className="account-button">
                  <UserOutlined /> {authState.user.username}
                </Button>
              </Dropdown>
            ) : (
              // If not authenticated, show Login/Register links
              <Menu.Item key="/login">
                <Link to="/login">
                  <UserOutlined /> Login/Register
                </Link>
              </Menu.Item>
            )}
          </div>
        </Menu>

        {/* Hamburger Menu Button for Small Screens */}
        <Button
          className="mobile-menu-icon"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>

        {/* Drawer for Mobile Menu */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="inline" selectedKeys={[location.pathname]}>
            <Menu.Item key="/" onClick={onClose}>
              <Link to="/">
                <img src={homeIcon} alt="Home" className="home-icon" />
              </Link>
            </Menu.Item>

            <Menu.Item key="/services" onClick={onClose}>
              <Link to="/services">
                <CarOutlined /> Services
              </Link>
            </Menu.Item>

            <Menu.Item key="/about" onClick={onClose}>
              <Link to="/about">About Us</Link>
            </Menu.Item>

            <Menu.Item key="/booking" onClick={onClose}>
              <Link to="/booking">Book Now</Link>
            </Menu.Item>

            {/* Only show Admin Panel in mobile view if the user is an admin */}
            {authState.user?.role === 'admin' && (
              <Menu.Item key="/admin/bookings" onClick={onClose}>
                <Link to="/admin/bookings">
                  <DashboardOutlined /> Admin Panel
                </Link>
              </Menu.Item>
            )}

            {authState.isAuthenticated ? (
              <>
                <Menu.Item key="/profile" onClick={onClose}>
                  <Link to="/profile">
                    <UserOutlined /> {authState.user.username}
                  </Link>
                </Menu.Item>
                <Menu.Item key="/logout" onClick={logout}>
                  <LogoutOutlined /> Logout
                </Menu.Item>
              </>
            ) : (
              <Menu.Item key="/login" onClick={onClose}>
                <Link to="/login">
                  <UserOutlined /> Login/Register
                </Link>
              </Menu.Item>
            )}
          </Menu>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
