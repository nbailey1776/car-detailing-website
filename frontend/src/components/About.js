// src/components/About.js

import React from 'react';
import { Row, Col, Timeline, Collapse, Carousel } from 'antd';
import { CheckCircleOutlined, TrophyOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Fade } from 'react-awesome-reveal';
import './About.css';
import aboutPic from "../assets/about-us.jpg";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

// Import gallery images from Home.js
import galleryPic1 from '../assets/Gallery1.png';
import galleryPic2 from '../assets/Gallery2.avif';
import galleryPic3 from '../assets/Gallery3.avif';
import galleryPic4 from '../assets/Gallery4.png';
import galleryPic5 from '../assets/Gallery5.avif';
import galleryPic6 from '../assets/Gallery6.png';
import galleryPic7 from '../assets/Gallery7.avif';
import galleryPic8 from '../assets/Gallery8.avif';

// Testimonials data from Home.js
const testimonials = [
  {
    id: 1,
    date: '2 days ago',
    description:
      'I brought my car in for a full detailing, and I was blown away by the results! It looks better than when I first bought it. The attention to detail is incredible. Highly recommend!',
    author: 'James Anderson',
  },
  {
    id: 2,
    date: '1 week ago',
    description:
      'Amazing service! I had both the interior and exterior detailed, and they did an outstanding job. The car looks brand new, and the staff was super friendly and professional.',
    author: 'Sarah Mitchell',
  },
  {
    id: 3,
    date: '2 week ago',
    description:
      'The ceramic coating they applied to my car has worked wonders. My car stays cleaner for longer, and the shine is incredible. Worth every penny!',
    author: 'Michael Johnson',
  },
  {
    id: 4,
    date: '5 days ago',
    description:
      'I spilled coffee on my seats, and these guys made it like it never happened! The interior smells fresh, and the leather looks immaculate. Very pleased with the results.',
    author: 'Emily Robinson',
  },
];

const { Panel } = Collapse;

const About = () => (
  <div className="about-container">
    {/* Header Section */}
    <header className="about-header">
      <h1>About Us</h1>
      <p className="mission-statement">
        Our mission is to provide unparalleled car detailing services with a commitment to quality, attention to detail, and customer satisfaction.
        We strive to transform every vehicle into a pristine reflection of its owner's style and pride.
      </p>
    </header>

    {/* About Content Section */}
    <section className="about-content">
      <Fade>
        <p>
          At First Class Auto Detailing, we are passionate about delivering the highest quality car care services.
          Our team of experienced professionals uses state-of-the-art equipment and premium products to ensure
          your vehicle looks its absolute best.
        </p>
        <img src={aboutPic} alt="About Us" className="about-image" />
      </Fade>
    </section>

    {/* Core Values Section */}
    <section className="values-section">
      <h2>Our Core Values</h2>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Fade>
            <div className="value-item">
              <CheckCircleOutlined className="value-icon" />
              <h3>Quality</h3>
              <p>We never compromise on the quality of our services and products.</p>
            </div>
          </Fade>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Fade delay={100}>
            <div className="value-item">
              <SafetyCertificateOutlined className="value-icon" />
              <h3>Integrity</h3>
              <p>We operate with honesty and integrity in all that we do.</p>
            </div>
          </Fade>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Fade delay={200}>
            <div className="value-item">
              <TrophyOutlined className="value-icon" />
              <h3>Excellence</h3>
              <p>We strive for excellence in every detail and interaction.</p>
            </div>
          </Fade>
        </Col>
      </Row>
    </section>

    {/* Company History Section */}
    <section className="history-section">
      <h2>Our Journey</h2>
      <Fade>
        <Timeline mode="alternate">
          <Timeline.Item color="green">
            <h3>2010</h3>
            <p>Founded First Class Auto Detailing with a vision to redefine car care.</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <h3>2012</h3>
            <p>Expanded our services to include ceramic coating and paint protection.</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <h3>2015</h3>
            <p>Opened our second location to serve more clients.</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <h3>2018</h3>
            <p>Introduced eco-friendly products and practices.</p>
          </Timeline.Item>
        </Timeline>
      </Fade>
    </section>

    {/* Meet the Professionals Section */}
    <section className="team-section">
      <h2>Meet the Professionals</h2>
      <div className="team-members">
        <Fade cascade>
          <div className="team-member">
            <img src={person1} alt="John Doe" className="team-image" />
            <h3>John Doe</h3>
            <p>Senior Detailer with over 10 years of experience in automotive detailing.</p>
          </div>
          <div className="team-member">
            <img src={person3} alt="Jane Smith" className="team-image" />
            <h3>Jane Smith</h3>
            <p>Expert in ceramic coatings and paint restoration.</p>
          </div>
          <div className="team-member">
            <img src={person2} alt="Mike Johnson" className="team-image" />
            <h3>Mike Johnson</h3>
            <p>Specialist in interior detailing and leather conditioning.</p>
          </div>
        </Fade>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <Fade>
        <Carousel autoplay>
          {testimonials.map((testimonial) => (
            <div className="testimonial-item" key={testimonial.id}>
              <p>"{testimonial.description}"</p>
              <h4>- {testimonial.author}</h4>
            </div>
          ))}
        </Carousel>
      </Fade>
    </section>

    {/* Gallery Section */}
    <section className="gallery-section">
      <h2>Our Work</h2>
      <Fade>
        <Row gutter={[16, 16]}>
          {[galleryPic1, galleryPic2, galleryPic3, galleryPic4, galleryPic5, galleryPic6, galleryPic7, galleryPic8].map((pic, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <img src={pic} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
            </Col>
          ))}
        </Row>
      </Fade>
    </section>

    {/* FAQ Section */}
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <Fade>
        <Collapse accordion className="faq-collapse">
          <Panel header="What services do you offer?" key="1">
            <p>We offer a wide range of car detailing services including interior and exterior detailing, ceramic coatings, paint correction, and more.</p>
          </Panel>
          <Panel header="Do you use eco-friendly products?" key="2">
            <p>Yes, we use eco-friendly and biodegradable products to minimize environmental impact.</p>
          </Panel>
          <Panel header="How can I book an appointment?" key="3">
            <p>You can book an appointment online through our website or by calling us at (123) 456-7890.</p>
          </Panel>
        </Collapse>
      </Fade>
    </section>

    {/* Contact Information */}
    <section className="contact-section">
      <h2>Get in Touch</h2>
      <Fade>
        <p>We'd love to hear from you! Reach out to us for any inquiries or to book an appointment.</p>
        <p>Email: info@firstclassautodetailing.com</p>
        <p>Phone: (123) 456-7890</p>
      </Fade>
    </section>
  </div>
);

export default About;
