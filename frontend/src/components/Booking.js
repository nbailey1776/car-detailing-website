import React, { useState, useEffect } from 'react';
import { Form, Select, DatePicker, TimePicker, Button, message } from 'antd';
import axios from 'axios';
import moment from 'moment';
import './Booking.css';

const { Option } = Select;

const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);

  const disabledDate = (current) => {
    // Disable past dates
    return current && current < moment().endOf('day');
  };

  // Fetch available times based on the selected date and service
  const fetchAvailableTimes = async (date, serviceType) => {
    console.log('Requesting available times:', `${process.env.REACT_APP_BACKEND_URL}/bookings/available-times`, { date: date.format('YYYY-MM-DD'), serviceType });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/bookings/available-times`,
        { params: { date: date.format('YYYY-MM-DD'), serviceType } }
      );
      setAvailableTimes(response.data);
    } catch (error) {
      message.error('Failed to fetch available times.');
    }
  };

  const onDateOrServiceChange = () => {
    const date = form.getFieldValue('appointmentDate');
    const serviceType = form.getFieldValue('serviceType');

    if (date && serviceType) {
      fetchAvailableTimes(date, serviceType);
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    const token = localStorage.getItem('auth-token');
    
    // Log the values before submission
    console.log('Submitting booking with token:', token);
    console.log('Form values:', {
      serviceType: values.serviceType,
      appointmentDate: values.appointmentDate ? values.appointmentDate.format('YYYY-MM-DD') : null,
      appointmentTime: values.appointmentTime, // This should be a string like '09:00'
    });
  
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/bookings`,
        {
          serviceType: values.serviceType,
          appointmentDate: values.appointmentDate.format('YYYY-MM-DD'),
          appointmentTime: values.appointmentTime, // This should be in the correct format
        },
        { headers: { 'auth-token': token } }
      );
      message.success('Booking successful!');
    } catch (error) {
      console.error('Booking failed:', error);
      message.error(
        error.response?.data?.error || 'Booking failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const [form] = Form.useForm();

  return (
    <div className="booking-container">
      <Form
        form={form}
        name="booking"
        onFinish={onFinish}
        className="booking-form"
        onValuesChange={onDateOrServiceChange}
      >
        <h2>Book a Service</h2>

        <Form.Item
          name="serviceType"
          rules={[{ required: true, message: 'Please select a Service Type!' }]}
        >
          <Select placeholder="Select Service Type" size="large">
            <Option value="Exterior Detailing">Exterior Detailing</Option>
            <Option value="Interior Detailing">Interior Detailing</Option>
            <Option value="Full Detailing">Full Detailing</Option>
            <Option value="Ceramic Coating">Ceramic Coating</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="appointmentDate"
          rules={[{ required: true, message: 'Please select a Date!' }]}
        >
          <DatePicker
            placeholder="Select Date"
            size="large"
            disabledDate={disabledDate}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item
          name="appointmentTime"
          rules={[{ required: true, message: 'Please select a Time!' }]}
        >
          <Select placeholder="Select Time" size="large">
            {availableTimes.length > 0 ? (
              availableTimes.map((time) => (
                <Option key={time} value={time}>
                  {time}
                </Option>
              ))
            ) : (
              <Option disabled value="">
                Select a date and service to see available times
              </Option>
            )}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block size="large">
            Confirm Booking
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Booking;
