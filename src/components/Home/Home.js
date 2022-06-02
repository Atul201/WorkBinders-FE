import React from "react";
import {
  Carousel,
  Container,
  Col,
  Row,
  Button,
  Accordion,
  Tabs,
  Tab,
} from "react-bootstrap";
import {
  FaLaptopCode,
  FaDigitalOcean,
  FaMobileAlt,
  FaReceipt,
  FaSlideshare,
  FaImages,
  FaPlay,
  FaRegClock,
  FaRegUserCircle,
  FaRegComments,
  FaAngleRight,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  const elementorData = [
    { id: "01", name: "WEB DEVELOPMENT", icon: <FaLaptopCode size={50} /> },
    { id: "02", name: "DIGITAL MARKETING", icon: <FaDigitalOcean size={50} /> },
    { id: "03", name: "APP DEVELOPMENT", icon: <FaMobileAlt size={50} /> },
    { id: "04", name: "SEO & CONTENT WRITING", icon: <FaReceipt size={50} /> },
    { id: "05", name: "GRAPHIC DESIGNING", icon: <FaSlideshare size={50} /> },
    { id: "06", name: "UI/UX DESIGN", icon: <FaImages size={50} /> },
  ];

  const showcaseData = [
    {
      id: "01",
      image: "showcase1.png",
      title: "THE ARA EDIT",
      desc: "Clean UI/UX Designed and coded in Shopify | Custom Theme with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "SHOPIFY | CUSTOM THEME PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "02",
      image: "showcase2.png",
      title: "APPS",
      desc: "Clean UI/UX Designed and coded in JS with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "JS CUSTOM WEBSITE PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "03",
      image: "showcase3.png",
      title: "ROGUE & VOGUE",
      desc: "Clean UI/UX Designed and coded in PHP | Woocommerce | Jquery with SEO Optimizaiton and excellent load time and pixel perfection",
      btnTop: { title: "PHP | WOOCOMMERCE | JQUERY PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "04",
      image: "showcase4.png",
      title: "POLLARDI",
      desc: "Clean UI/UX Designed and coded in MySQL | Bootstrap with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "MYSQL | BOOTSTRAP PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "05",
      image: "showcase5.png",
      title: "HOLLOW",
      desc: "Clean UI/UX Designed and coded in JS with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "JS CUSTOM WEBSITE PROJECT", route: "" },
      btnBottom: { route: "" },
    },

    {
      id: "06",
      image: "showcase6.png",
      title: "TAWAKAL AUTOS",
      desc: "Clean UI/UX Designed and coded in React with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "React PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "07",
      image: "showcase7.png",
      title: "OGONNELLOEGAA",
      desc: "Clean UI/UX Designed and coded in Shopify | Custom Theme with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "SHOPIFY | CUSTOM THEME PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "08",
      image: "showcase8.png",
      title: "AJ WATCHES",
      desc: "Clean UI/UX Designed and coded in Magento with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "MAGENTO PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "09",
      image: "showcase9.png",
      title: "WARM NORDIC",
      desc: "Clean UI/UX Designed and coded in Magento with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "MAGENTO PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "10",
      image: "showcase10.png",
      title: "RAFAL BOJAR",
      desc: "Clean UI/UX Designed and coded in PHP with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "PHP PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "11",
      image: "showcase11.png",
      title: "BDESIGN STUDIOS",
      desc: "Clean UI/UX Designed and coded in MySQL with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "MYSQL PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "12",
      image: "showcase12.png",
      title: "DOPAMINE PLANET",
      desc: "Clean UI/UX Designed and coded in React.js with SEO Optimizaiton, Less than 3 seconds of load time, Along with APP Development as per the requirments",
      btnTop: { title: "REACT.JS PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "13",
      image: "showcase13.png",
      title: "LBB.IN",
      desc: "Website converted from WordPress to Angular.Js then to React.js as per the client requirement and converted to an online store with 2000+ visitors every month.",
      btnTop: { title: "REACT.JS PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "14",
      image: "showcase14.png",
      title: "KLICKSG PRODUCTION",
      desc: "Clean UI/UX Designed and coded in React with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "REACT PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "15",
      image: "showcase15.png",
      title: "SEA HARVEST",
      desc: "Clean UI/UX Designed and coded in PHP | WordPress | Jquery with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "PHP | WORDPRESS | JQUERY PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "16",
      image: "showcase16.png",
      title: "CHERRYBERRY CAFE",
      desc: "Clean UI/UX Designed and coded in PHP | WordPress | Jquery with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "PHP | WORDPRESS | JQUERY PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "17",
      image: "showcase17.png",
      title: "MELINDA'S",
      desc: "Clean UI/UX Designed and coded in PHP | WordPress | Jquery with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "PHP | WORDPRESS | JQUERY PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "18",
      image: "showcase18.png",
      title: "AFICIONADOSINC",
      desc: "Clean UI/UX Designed and coded in PHP | WordPress | Jquery with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "PHP | WORDPRESS | JQUERY PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "19",
      image: "showcase19.png",
      title: "GRAPEFUL-LB",
      desc: "Clean UI/UX Designed and coded in PHP | WordPress | Jquery with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "PHP | WORDPRESS | JQUERY PROJECT", route: "" },
      btnBottom: { route: "" },
    },
    {
      id: "20",
      image: "showcase20.png",
      title: "FEMME & FIERCE",
      desc: "Clean UI/UX Designed and coded in Angular | Zone. Js with SEO Optimizaiton and excellent load time and pixel perfection.",
      btnTop: { title: "ANGULAR | ZONE . JS PROJECT", route: "" },
      btnBottom: { route: "" },
    },
  ];

  const newsList = [
    {
      id: "01",
      title: "5 EFFECTIVE EMAIL MARKETING STRATEGIES",
      desc: "Email marketing is the most effective digital marketing strategy to",
      link: "",
      date: "17 JUN",
      author: "ADMIN",
      image: "news1.jpg",
    },
    {
      id: "02",
      title: "WHAT DOES A DIGITAL MARKETING COMPANY DO?",
      desc: "Marketing is a critical process for any company to reach",
      link: "",
      date: "17 JUN",
      author: "ADMIN",
      image: "news2.jpg",
    },
    {
      id: "03",
      title: "WHY SHOULD PEOPLE TRUST WEB DEVELOPMENT COMPANIES?",
      desc: "The bedrock of a professional web developing company is trust.A",
      link: "",
      date: "17 JUN",
      author: "ADMIN",
      image: "news3.jpg",
    },
  ];

  const ElementorCard = ({ Data }) => {
    return (
      <Container
        className="card"
        style={{
          width: window.outerWidth < 768 ? "95%" : "265px",
          marginBottom:
            window.outerWidth > 1500 && (Data.id === "01" || Data.id === "02")
              ? "80px"
              : "0px",
        }}
      >
        <div>
          <h2 className="card-id">{Data.id}</h2>
          <div className="card-name">{Data.name}</div>
        </div>
        <div>{Data.icon}</div>
      </Container>
    );
  };

  const ShowCaseCarousalItem = ({ item }) => {
    return (
      <div className="showcase-item">
        <Col md={11}>
          <Row className="gap-4">
            <Col md={7}>
              <img src={require(`../../assets/${item.image}`)} width="100%" />
            </Col>
            <Col
              md={{ order: "first" }}
              className="d-flex flex-column justify-content-center gap-2"
              style={{
                alignItems: window.outerWidth >= 768 ? "left" : "center",
                textAlign: window.outerWidth >= 768 ? "left" : "center",
              }}
            >
              <div className="d-flex">
                <div className="showcase-item-btn-top">{item.btnTop.title}</div>
              </div>
              <div className="showcase-item-title">{item.title}</div>
              <div className="showcase-item-para">{item.desc}</div>
              <div>
                <Button className="showcase-item-btn">Check Out!</Button>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    );
  };

  const NewsItem = ({ item }) => {
    return (
      <Col lg={4} md={6} sm={12} className="news-item">
        <div>
          <img
            src={require(`../../assets/${item.image}`)}
            className="news-item-image"
          />
        </div>
        <Container className="news-item-lower-box">
          <div className="news-item-post-meta">
            <div className="d-flex gap-3">
              <div className="news-item-post-meta-block">
                <FaRegClock color="#ffaa17" />
                {item.date}
              </div>
              <div className="news-item-post-meta-block">
                <FaRegUserCircle color="#ffaa17" />
                {item.author}
              </div>
            </div>
            <div className="news-item-post-meta-block">
              <FaRegComments color="#ffaa17" />
              LEAVE A COMMENT
            </div>
          </div>

          <h5 className="news-item-title">{item.title}</h5>
          <text className="news-item-desc">{item.desc}</text>
          <div className="news-item-btn">
            <FaAngleRight />
          </div>
        </Container>
      </Col>
    );
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://workbinders.com/wp-content/uploads/2021/05/workbinders-5.jpg"
            alt="First slide"
            style={{ filter: "grayscale(100%)" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://workbinders.com/wp-content/uploads/2021/05/header-image.jpg"
            alt="Second slide"
            style={{ filter: "grayscale(100%)" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://workbinders.com/wp-content/uploads/2021/05/workbinders-5.jpg"
            alt="Third slide"
            style={{ filter: "grayscale(100%)" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container fluid className="elementor-container">
        <Col lg={9}>
          <Row className="gap-3">
            <Col lg={6}>
              <h2 className="elementor-heading-title">
                NOT JUST DEVELOPMENT BUT SO MUCH MORE.
              </h2>
              <p className="elementor-heading-para">
                No matter what business you have, No matter what services you
                provide, We are here for you At Workbinders, we believe in
                results.
              </p>
            </Col>
            {elementorData.map((data, index) => (
              <ElementorCard key={index} Data={data} />
            ))}
          </Row>
        </Col>
      </Container>

      <Container fluid className="about-section-container">
        <Col lg={10}>
          <Row className="gap-5">
            <Col lg={{ order: "last" }} className="d-flex flex-column gap-4">
              <h2 className="about-section-title">
                WE OFFER THE BEST IN CLASS SERVICES{" "}
                <span style={{ color: "#ffaa17" }}>.</span>
              </h2>
              <div className="about-section-title-lower">
                HIGHLY PROFESSIONAL AGENCY AIMED AT BOOSTING YOUR BUSINESS OR
                SERVICES.
              </div>
              <p className="about-section-title-desc">
                You’ll get the best in class services for your website with an
                experienced team of highly trained professionals dedicated to
                giving the most impactful results for your Website or Business.
              </p>
              <Row className="gap-5">
                <Col lg={7} className="d-flex flex-column gap-3">
                  <div>
                    <FiCheck size={20} color="#ffaa17" className="me-4" />
                    Load Time less than 3 Seconds
                  </div>
                  <div>
                    <FiCheck size={20} color="#ffaa17" className="me-4" />
                    1000+ Ironclad and Powerful Backlinks
                  </div>
                  <div>
                    <FiCheck size={20} color="#ffaa17" className="me-4" />
                    1k+ Days Of Training for Staff
                  </div>
                </Col>

                <Col>
                  <div className="since2011">
                    <div className="sincetxt">
                      SINCE
                      <br />
                      2011
                    </div>
                  </div>
                </Col>
              </Row>

              <div>
                <div className="btn-discover-more">
                  <i className="btn-curve"></i>
                  <div style={{ zIndex: 1 }}>DISCOVER MORE</div>
                </div>
              </div>
            </Col>

            <Col lg>
              <div className="d-none d-lg-flex position-relative">
                <div className="image-block-bg"></div>
                <div className="image-block-line" />
                <div>
                  <div>
                    <img
                      className="image-block1"
                      src="https://workbinders.com/wp-content/uploads/2021/05/workbinder2.jpg"
                    />
                  </div>
                  <div>
                    <img
                      className="image-block2"
                      src="https://workbinders.com/wp-content/uploads/2021/05/workbinders-3.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="d-lg-none">
                <div className="d-flex flex-column gap-3">
                  <div>
                    <img
                      className="image-block1"
                      src="https://workbinders.com/wp-content/uploads/2021/05/workbinder2.jpg"
                    />
                  </div>
                  <div>
                    <img
                      className="image-block1"
                      src="https://workbinders.com/wp-content/uploads/2021/05/workbinders-3.jpg"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>

      {/* <Container className="text-align-center">
        <Col lg={10}>
          <h2>
            EXPERIENCE US LIVE <span style={{ color: "#ffaa17" }}>.</span>
          </h2>

          <div className="main-image-block">
            <img
              src="https://workbinders.com/wp-content/uploads/2021/05/workbinders-4.jpg"
              className="live-image-layer"
            />
            <div>
              <div>
                <div className="round-inner">
                  <h3>AGENCY THAT HELPS YOU GROW</h3>
                  <div>DISCOVER MORE</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Container> */}

      <section className="live-section">
        <div className="auto-container">
          <h2 className="sec-title">
            EXPERIENCE US LIVE<span className="dot">.</span>
          </h2>
          <div className="main-image-box">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(https://workbinders.com/wp-content/uploads/2021/05/workbinders-4.jpg)",
              }}
            ></div>
            <div className="inner clearfix">
              <div
                className="round-box wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="round-inner">
                  <div className="vid-link">
                    <a
                      href="https://youtu.be/pdVunzPK4vg"
                      className="lightbox-image"
                    >
                      <div className="play-icon">
                        <FaPlay size={20} />
                        {/* <<span className="flaticon-play-button-1"></span>> */}
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                  <div>
                    <h3 className="live-section-title">
                      Agency that helps you grow
                    </h3>
                  </div>
                  <div className="more-link">
                    <a
                      className="more-link-text"
                      href="https://workbinders.com/about-us/"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container fluid className="area-expertise">
        <Col lg={9} className="area-expertise-block">
          <Row className="gap-4">
            <Col lg>
              <Col lg={10}>
                <h2 className="area-expertise-col1-title">
                  OUR AREAS OF EXPERTISE <span className="dot">.</span>
                </h2>
              </Col>
              <div>
                <div className="expertise-progress-bar">
                  <div className="bar-title">WEB DEVELOPMENT</div>
                  <div className="bar"></div>
                </div>

                <div className="expertise-progress-bar">
                  <div className="bar-title">DIGITAL MARKETING</div>
                  <div className="bar"></div>
                </div>

                <div className="expertise-progress-bar">
                  <div className="bar-title">SEO SERVICES</div>
                  <div className="bar"></div>
                </div>
              </div>
            </Col>

            <Col>
              <Accordion
                flush
                className="d-flex flex-column gap-3"
                defaultActiveKey="2"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="dot">1. &nbsp;</span>PROVEN RESULTS
                  </Accordion.Header>
                  <Accordion.Body>
                    At Superior SEO Services, we believe in yielding the best
                    results. With a team of highly-trained professionals, we aim
                    at achieving the best. We have generated many leads and
                    helped the businesses grow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="dot">2. &nbsp;</span> EASY ROI TRACKING
                  </Accordion.Header>
                  <Accordion.Body>
                    You don't need to bang your head against long spreadsheets
                    figuring out Return on Investments. At Superior SEO
                    Services, we maintain the 100% transparency with our
                    clients.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="dot">3. &nbsp;</span> INCREASING TRAFFIC
                  </Accordion.Header>
                  <Accordion.Body>
                    A website without traffic is of no use to your business or
                    services. We make sure that your website reaches the target
                    audience so that it can drive sales and prove useful for
                    your business instead of bieng worthless.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="dot">4. &nbsp;</span> DESIGN THAT ATTRACTS
                  </Accordion.Header>
                  <Accordion.Body>
                    The first thing that your clients come's across if how your
                    website looks. So we make sure that every inch of the
                    website is looked into and made to look as attractive as
                    possible.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Col>
      </Container>

      <Container className="showcase">
        <Col lg={10}>
          <h2 className="showcase-heading">Work Showcase</h2>
          <Carousel
            controls={window.outerWidth >= 768 ? true : false}
            indicators={window.outerWidth >= 768 ? true : false}
          >
            {showcaseData.map((val, ind) => (
              <Carousel.Item key={ind}>
                <ShowCaseCarousalItem item={val} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Container>

      <div className="parallax-section">
        <img
          src={require("../../assets/workbinders-9.jpg")}
          className="parallax-bg"
        />
        <div className="parallax-icon-container">
          <div className="icon-wrapper"></div>
        </div>
        <Col md={6}>
          <h2 className="parallax-text">
            "COMING TOGETHER IS A BEGINNING. KEEPING TOGETHER IS PROGRESS.
            WORKING TOGETHER IS SUCCESS."{" "}
            <span className="dot">-HENRY FORD.</span>
          </h2>
        </Col>
      </div>

      {/* Agency Section */}

      <div className="agency-section-container">
        <Container className="d-flex justify-content-center mb-5">
          <Col lg={11}>
            <Row className="gap-4">
              <Col lg={6}>
                <h2 className="agency-section-title">
                  BEST DEVELOPMENT AGENCY <span className="dot">.</span>
                </h2>
                <Tabs className="agency-section-tabs">
                  <Tab
                    className="agency-section-tab agency-section-text"
                    eventKey="ourmission"
                    title="OUR MISSION"
                  >
                    We believe to explore new opportunities that maximizes the
                    business value, consistent growth and sustainability of our
                    Clients.
                  </Tab>
                  <Tab
                    className="agency-section-tab agency-section-text"
                    eventKey="ourvision"
                    title="OUR VISION"
                  >
                    Recognizing the need of market and development of in IT
                    sector, I Perfect Online efforts to be a trend setting and
                    globally present your business through internet.
                  </Tab>
                  <Tab
                    className="agency-section-tab agency-section-text"
                    eventKey="workbinders"
                    title="WORK BINDERS"
                  >
                    Work Binders is the professional website development and
                    mobile application company delivering custom web
                    development, mobile application, enterprise portals,
                    e-commerce application, web design, iPhone/iOS/android apps
                    and PPC/SMO/SEO services to our global clients.
                  </Tab>
                </Tabs>
              </Col>
              <Col>
                <div className="agency-section-text">
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected
                  humou or randomised words which don't look even slightly
                  believable.
                </div>
                <Row className="gap-3">
                  <Col md={5} className="agency-section-image-container">
                    <img
                      src={require("../../assets/workbinders-10.jpg")}
                      width="100%"
                      height="auto"
                    />
                  </Col>
                  <Col as="ul">
                    <li className="agency-section-list-item">
                      <div>
                        <FiCheck size={20} color="#ffaa17" className="me-4" />
                      </div>
                      <div>
                        COMPLETELY TRANSPARENT COMPANY AT OF WORK AND
                        COMMUNICATION
                      </div>
                    </li>
                    <li className="agency-section-list-item">
                      <div>
                        <FiCheck size={20} color="#ffaa17" className="me-4" />
                      </div>
                      <div>
                        EXPERTISE IN SEO, PPC MANAGEMENT AND EMAIL MARKETING
                      </div>
                    </li>
                    <li className="agency-section-list-item">
                      <div>
                        <FiCheck size={20} color="#ffaa17" className="me-4" />
                      </div>
                      <div> PROPRIETARY LEAD TRACKING TECHNOLOGY</div>
                    </li>
                    <li className="agency-section-list-item">
                      <div>
                        <FiCheck size={20} color="#ffaa17" className="me-4" />
                      </div>
                      <div>LOCAL SEO SERVICES SPECIALISTS</div>
                    </li>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>

      {/* News Section */}

      <Container className="d-flex justify-content-center mb-5">
        <Col lg={11}>
          <h2 className="news-section-title">
            LATEST NEWS & ARTICLES <span className="dot">.</span>
          </h2>

          <Row>
            {newsList.map((item, ind) => (
              <NewsItem key={ind} item={item} />
            ))}
          </Row>
        </Col>
      </Container>

      {/* Call To Section */}
      <Container className="d-flex justify-content-center">
        <Col lg={11}>
          <Container>
            <Row className="call-to-section">
              <div className="call-to-section-shape-1" />
              <div className="call-to-section-shape-2" />
              <Col
                as="h2"
                md={6}
                className="call-to-section-title text-md-start"
              >
                LET'S GET YOUR PROJECT STARTED!
              </Col>
              <Col md="auto" className="d-flex justify-content-center">
                <div>
                  <div className="btn-contact-us">
                    <i className="btn-curve"></i>
                    <div style={{ zIndex: 1 }}>CONTACT WITH US</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Container>
    </div>
  );
};

export default Home;
