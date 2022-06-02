import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaSkype,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneVolume,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row className="gap-4">
          <Col lg className="footer-col">
            <img src={logo} style={{ marginLeft: -30 }} />
            <p className="footer-col1-text">
              World Believes in Results and So Do We.
            </p>
            <div className="footer-col1-logo">
              <FaFacebook size={27} color="gray" />
              <FaTwitter size={27} color="gray" />
              <FaYoutube size={27} color="gray" />
              <FaLinkedin size={27} color="gray" />
              <FaInstagram size={27} color="gray" />
              <FaSkype size={27} color="gray" />
              <FaWhatsapp size={27} color="gray" />
              <FaEnvelope size={27} color="gray" />
            </div>
          </Col>

          <Col lg>
            <h6 className="footer-heading">EXPLORE</h6>
            <Row className="gap-3">
              <Col
                md={6}
                sm={12}
                className="d-flex flex-column align-items-start gap-3"
              >
                <Link to="" className="footer-text-item footer-text-item-link">
                  Home
                </Link>
                <Link to="" className="footer-text-item footer-text-item-link">
                  Services
                </Link>
                <Link to="" className="footer-text-item footer-text-item-link">
                  About Us
                </Link>
                <Link to="" className="footer-text-item footer-text-item-link">
                  Contact Us
                </Link>
                <Link to="" className="footer-text-item footer-text-item-link">
                  Testimonials
                </Link>
              </Col>
              <Col className="d-flex align-items-start flex-column gap-3">
                <Link to="" className="footer-text-item footer-text-item-link">
                  Portfolio
                </Link>
                <Link to="" className="footer-text-item footer-text-item-link">
                  Latest News
                </Link>
                <Link to="" className="footer-text-item footer-text-item-link">
                  Privacy Policy
                </Link>
                <Link to="" className="footer-text-item footer-text-item-link">
                  Terms Of Use
                </Link>
                <Link to="" className="footer-text-item footer-text-item-link">
                  Help
                </Link>
              </Col>
            </Row>
          </Col>

          <Col lg>
            <h6 className="footer-heading">CONTACT</h6>
            <Row className="gap-4">
              <div className="d-flex gap-3">
                <Col lg="auto">
                  <FaMapMarkerAlt size={20} color="#ffaa17" />
                </Col>
                <Col className="footer-text-item">
                  B-100, Kirti Nagar, Tonk Road, Jaipur - 302018
                </Col>
              </div>

              <div className="d-flex gap-3">
                <Col lg="auto">
                  <FaPhoneVolume size={20} color="#ffaa17" />
                </Col>
                <Col>
                  <a
                    className="footer-text-item footer-text-item-link"
                    href="tel:+1 (786)-677-7638"
                  >
                    +1 (786)-677-7638
                  </a>
                  <br />
                  <a
                    className="footer-text-item footer-text-item-link"
                    href="tel:+91 96-808182-34"
                  >
                    +91 96-808182-34
                  </a>
                </Col>
              </div>

              <div className="d-flex gap-3">
                <Col lg="auto">
                  <FaEnvelope size={20} color="#ffaa17" />
                </Col>
                <Col>
                  <a
                    className="footer-text-item footer-text-item-link"
                    href="mailto:workbinders@gmail.com"
                  >
                    workbinders@gmail.com
                  </a>
                </Col>
              </div>
            </Row>
          </Col>

          <Col lg>
            <h6 className="footer-heading">NEWSLETTER</h6>

            <Row className="gap-4">
              <Container>
                <Form className="newsletter-form">
                  <Form.Control
                    className="newsletter-form-control"
                    type="email"
                    placeholder="Email Address"
                    color="red"
                  />
                  <Button
                    variant="light"
                    type="submit"
                    className="newsletter-submit-btn"
                  >
                    <FaEnvelope color="black" size={15} />
                  </Button>
                </Form>
              </Container>

              <div className="footer-text-item footer-signup-text">
                Sign up for our latest news & articles.
              </div>
            </Row>
          </Col>
        </Row>

        <div className="footer-hr" />

        <Container className="d-flex flex-column">
          <div
            className="footer-hr align-self-center"
            style={{ width: "80%" }}
          />
          <div className="footer-text-item mb-5 align-self-center">
            © Copyright 2021 by Workbinders.com
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
