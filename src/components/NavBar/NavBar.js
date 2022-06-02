import React from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Offcanvas,
  Dropdown,
  Col,
} from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { FaSearch, FaComments } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container fluid className="d-flex justify-content-center">
        <Col md={11} className="d-flex align-items-center">
          <Navbar.Brand href="\">
            <img src={logo} width={200} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                style={{
                  gap: 15,
                }}
              >
                <Nav.Link className="navlinks">HOME</Nav.Link>
                <NavDropdown
                  className="navlinks"
                  title="SERVICES"
                  renderMenuOnMount={true}
                >
                  <Dropdown drop="end" autoClose="true">
                    <Dropdown.Toggle className="dropdown-sub">
                      Development
                    </Dropdown.Toggle>

                    <Dropdown.Menu renderMenuOnMount={true}>
                      <Dropdown.Item className="dropdown-sub">
                        ReactJs Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        NodeJs Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Angular Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Laravel Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        PHP Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        HTML Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        CSS Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        MySQL Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Mongodb Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Javascript Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Java Development
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown drop="end">
                    <Dropdown.Toggle className="dropdown-sub">
                      CMS
                    </Dropdown.Toggle>

                    <Dropdown.Menu renderMenuOnMount={true}>
                      <Dropdown.Item className="dropdown-sub">
                        WordPress Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Magento Development
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Shopify Development
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown drop="end">
                    <Dropdown.Toggle className="dropdown-sub">
                      Mobile Development
                    </Dropdown.Toggle>

                    <Dropdown.Menu renderMenuOnMount={true}>
                      <Dropdown.Item className="dropdown-sub">
                        IOS
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Android
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Flutter
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Ionic
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        React Native
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Xamarin
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown drop="end">
                    <Dropdown.Toggle className="dropdown-sub">
                      Marketing
                    </Dropdown.Toggle>

                    <Dropdown.Menu renderMenuOnMount={true}>
                      <Dropdown.Item className="dropdown-sub">
                        Facebook Marketing
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Ecommerce Marketing
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Instagram Marketing
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Snapchat Marketing
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Linkedin Marketing
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Email Marketing
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown drop="end">
                    <Dropdown.Toggle className="dropdown-sub">
                      Design
                    </Dropdown.Toggle>

                    <Dropdown.Menu renderMenuOnMount={true}>
                      <Dropdown.Item className="dropdown-sub">
                        UI/UX Services
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-sub">
                        Graphic Designing
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown>
                <NavDropdown
                  className="navlinks"
                  title="INDUSTRIES"
                  id={`offcanvasNavbarDropdown-expand-md`}
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item className="dropdown-sub">
                    AGRICULTURE
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    AUTOMATIVE
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    AVIATION
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    BUSINESS SERVICES
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    COMPUTING AND TECHNOLOGY
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    CONSTRUCTION
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    EDUCATION
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    ENTERTAINMENT & RECREATION
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    FINANCIAL SERVICES
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    MEDICAL & HEALTH
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    INDUSTRIAL
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    FOOD & BEVERAGE
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    FRANCHISES
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    HOME SERVICES
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    LOGISTICS ANS SUPPLY CHAIN
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    HR & RECRUITING
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    MANUFACTURING
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    LEGAL
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    PERSONAL SERVICES
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    PACKAGING
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    MARINE
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    NONPROFITS
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    RETAIL & E-COMMERCE
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    REAL ESTATE
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    PHARMACEUTICAL
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    SOFTWARE & TECHNOLOGY
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    TOURISM & HOSPITALITY
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    SPORTS & ATHLETICS
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="navlinks"
                  title="PORTFOLIO"
                  id={`offcanvasNavbarDropdown-expand-md`}
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item className="dropdown-sub">
                    ABOUT US
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    OUT TEAM
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    TESTIMONIALS
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-sub">
                    FAQ
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="navlinks">BLOG</Nav.Link>
                <Nav.Link className="navlinks">CONTACT US</Nav.Link>

                <FaSearch
                  color="white"
                  size={18}
                  style={{ alignSelf: "center" }}
                />
              </Nav>
              {/* <div
              className="d-none d-md-block"
              style={{ width: "2px", background: "white", height: "90px" }}
            /> */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                {/* <FaComments color="white" size={45} /> */}
                <img src={require("../../assets/chat-icon.png")} />
                <div>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="tel:+91%2096-808182-34"
                  >
                    <span class="icon"></span>
                    <span class="sub-text">USA +1 (786)-677-7638</span>
                    <br />
                    <span class="number">INDIA +91 96-808182-34</span>
                  </a>
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Col>
      </Container>
    </Navbar>
  );
};

export default NavBar;
