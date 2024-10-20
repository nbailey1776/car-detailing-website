// src/components/Services.js

import React, { useEffect } from 'react';
import { Row, Col, Card, List, Button, Tag, Badge, Tooltip } from 'antd';
import { CarOutlined, CheckOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import serviceData from '../data/servicesData';
import './Services.css';
import servicesBackgroundVideo from '../assets/services-background.mp4.mp4';

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="services-page">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={servicesBackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="services-container">
        {serviceData.map((service) => (
          <div key={service.id} id={`service-${service.id}`} className="service-section">
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} md={24} lg={24}>
                <Badge.Ribbon text={service.popular ? 'Popular' : ''} color="red">
                  <Card
                    hoverable
                    className="services-page-card"
                    cover={
                      <img
                        alt={service.title}
                        src={service.image}
                        className="services-page-card-image"
                      />
                    }
                  >
                    <Card.Meta
                      title={
                        <span>
                          <CarOutlined style={{ marginRight: 8 }} />
                          {service.title}
                        </span>
                      }
                      description={service.fullDescription}
                    />
                    <List
                      className="service-features"
                      dataSource={service.features}
                      renderItem={(item) => (
                        <List.Item>
                          <CheckOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                          <Tooltip title="More details">{item}</Tooltip>
                        </List.Item>
                      )}
                    />
                    <div className="service-card-footer">
                      <Tag color="blue" className="service-price-tag">
                        Price: ${service.price}
                      </Tag>
                      <Button type="primary" href="/booking">
                        Book Now
                      </Button>
                    </div>
                  </Card>
                </Badge.Ribbon>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
