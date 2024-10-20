import React from 'react';
import { Row, Col, Card, Carousel, BackTop, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';
import { Fade, Zoom } from 'react-reveal';
import serviceData from "../data/servicesData";
import galleryPic1 from '../assets/Gallery1.png';
import galleryPic2 from '../assets/Gallery2.avif';
import galleryPic3 from '../assets/Gallery3.avif';
import galleryPic4 from '../assets/Gallery4.png';
import galleryPic5 from '../assets/Gallery5.avif';
import galleryPic6 from '../assets/Gallery6.png';
import galleryPic7 from '../assets/Gallery7.avif';
import galleryPic8 from '../assets/Gallery8.avif';
import testimonialImage from '../assets/ReviewImage.jpg';



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

const pricing = [
  {
    service: 'Exterior Detailing',
    price: '$150',
    features: ['Hand Wash', 'Wax Application', 'Wheel Cleaning'],
  },
  {
    service: 'Interior Detailing',
    price: '$130',
    features: ['Deep Cleaning', 'Leather Conditioning', 'Odor Removal'],
  },
  {
    service: 'Full Detailing',
    price: '$250',
    features: ['Exterior & Interior', 'Engine Bay Cleaning', 'Polishing'],
  },
  {
    service: 'Ceramic Coating',
    price: '$500',
    features: ['Paint Protection', 'Gloss Finish', 'Long-Lasting'],
  },
];

const Home = () => (
  <div className="home-container">

    {/* Hero Section with Zoom Animation */}
    <Zoom>
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Experience Luxury Detailing</h1>
          <p>Your car deserves the best care.</p>
          <Link to="/booking">
            <Button type="primary" size="large">Book Now</Button>
          </Link>
        </div>
      </div>
    </Zoom>

    {/* Services Section */}
    <Fade bottom>
      <div className="home-services-section" id="services">
        <h2>Our Services</h2>
        <p className="section-intro">
          We offer a range of premium services to keep your vehicle looking its best. Explore our services below.
        </p>
        <Row gutter={[32, 32]} justify="center">
          {serviceData.map((service, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                cover={<img alt={service.title} src={service.image} />}
                className="home-service-card"
              >
                <Card.Meta title={service.title} description={service.shortDescription} />
                <div style={{ marginTop: '10px' }}>
                  <Button type="primary">
                    <Link smooth to={`/services#service-${service.id}`}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Fade>

    {/* Gallery Section with Fade Animation */}
    <Fade bottom>
      <div className="gallery-section" id="gallery">
        <h2>Our Work</h2>
        <p className="section-intro">
          Take a look at some of the vehicles we've transformed.
        </p>
        <Row gutter={[16, 16]}>
          {[galleryPic1, galleryPic2, galleryPic3, galleryPic4, galleryPic5, galleryPic6, galleryPic7, galleryPic8].map((pic, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <img src={pic} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </Col>
          ))}
        </Row>
      </div>
    </Fade>

    {/* Testimonials Section with Carousel and Fade */}
    <Fade bottom>
    <div className="testimonials-section">
      <Row gutter={32} className="testimonial-row">
        {/* Left Column: Testimonials */}
        <Col xs={24} md={12} className="testimonial-content">
          <h2>What Our Clients Say</h2>
          <Carousel autoplay>
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="card">
                  <div className="stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <div className="infos">
                    <p className="date-time">{testimonial.date}</p>
                    <p className="description">{testimonial.description}</p>
                  </div>
                  <div className="author">— {testimonial.author}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>

        {/* Right Column: Background Image */}
        <Col xs={24} md={12} className="testimonial-image-col">
          <div
            className="testimonial-bg-image"
            style={{ backgroundImage: `url(${testimonialImage})` }}
          />
        </Col>
      </Row>
    </div>
  </Fade>

    {/* Pricing Section with Zoom */}
    <Zoom>
      <div className="pricing-section" id="pricing">
        <h2>Our Pricing</h2>
        <Row gutter={[32, 32]} justify="center">
          {pricing.map((item, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <div className="plan-card">
                <h2>
                  {item.service}
                  <span>Premium Service Package</span>
                </h2>
                <div className="etiquet-price">
                  <p>{item.price}</p>
                </div>
                <div className="benefits-list">
                  <ul>
                    {item.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8z" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="button-get-plan">
                  <Link to="/booking">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-rocket">
                      <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9z" />
                    </svg>
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Zoom>

    {/* Contact Section with Fade */}
    <Fade bottom>
      <div className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or want to schedule a service? Reach out to us!</p>
        <Row justify="center">
          <Col xs={24} sm={16} md={12}>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <Button type="primary" size="large">Submit</Button>
            </form>
          </Col>
        </Row>
      </div>
    </Fade>

    {/* Footer */}
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} FC Detailing. All rights reserved.</p>
      <div className="social-icons">
        {/* Add social media icons here if needed */}
      </div>
    </div>

    <BackTop />
  </div>
);

export default Home;
