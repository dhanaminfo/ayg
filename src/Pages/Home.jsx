import React from "react";
import Navbar from "../Components/Navbar";
import HomeHCB from "../Components/HomeHCB";
//import HomeIKON from "../Components/HomeIKON";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Popup from "../Components/PopUP";
import { Img_URL1, Img_URL3, Img_URL5 } from "../Components/Ads_URL";
import hcbads from "../Images/hcbads.jpg";
import { Helmet } from "react-helmet";
import InstagramLogin from "../Components/InstagramLogin";
const Home = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Helmet>
        <title>World's Largest Exclusive HCB Yachts - Boats Dealer</title>
        <meta
          name="description"
          content="American Yacht Group is the world’s largest exclusive HCB dealer, representing luxury center-console yachts across South Florida, including Fort Lauderdale, Miami, Naples, Palm Beach, and beyond. "
        />
        <meta
          name="keywords"
          content="American Yacht Group, yacht brokers Florida, boats for sale, Fort Lauderdale yacht brokers, Fort Lauderdale yacht sales, yachts for sale, HCB yachts, HCB boats, American yachts, used HCB yachts for sale, American Yacht, American sells boats, used HCB boats for sale, yacht broker Naples, yacht broker Ft Lauderdale, yacht brokerage Florida, Fort Lauderdale yacht broker, yacht brokers in Florida, Ft Lauderdale yacht sales, American yacht sales, yacht group, who owns HCB yachts, yacht broker Palm Beach, yacht group, HCB boat for sale, USA yacht sales, Palm Beach yacht sales, yacht brokers Ft Lauderdale, yacht brokers Fort Lauderdale, yachts for sale Palm Beach Florida, yacht broker Fort Lauderdale "
        />
        <meta
          name="keywords"
          content="Center Console Yachts, HCB 39 Speciale, HCB 42 Siesta, HCB 53 Sueños, HCB 65 Estrella, HCB 48 Lujo, HCB 39 Speciale for sale, HCB 42 Siesta for sale, HCB 53 Sueños for sale, HCB 65 Estrella for sale, HCB 48’, Lujo for sale,39 Speciale,42 Siesta,53 Sueños,65 Estrella,48 Lujo,39 HCB Speciale,42 HCB Siesta,53 HCB Sueños,65 HCB Estrella,48 HCB Lujo, HCB yachts for sale in Florida, HCB Yachts for sale in Florida, HCB yachts for sale in Fort Lauderdale, HCB yachts for sale in Miami, HCB yachts for sale in the USA, HCB yachts near me, best prices on HCB yachts, HCB yacht financing options, HCB yacht specifications and prices, HCB yachts with advanced features, where to buy HCB yachts, HCB luxury fishing yachts, custom HCB yachts for sale, HCB offshore yachts for sale, fishing boats for sale in Hawaii, saltwater fishing boats for sale in Hawaii, HCB 39 Speciale for sale, HCB 39 Speciale review, Luxury center console HCB 39,High-performance HCB 39 Speciale, Offshore fishing boat HCB 39,HCB 39 Speciale specs, Customizable HCB 39,HCB Yachts 39 Speciale price, HCB 42 Siesta for sale, HCB 42 Siesta walkthrough, HCB 42 Siesta offshore boat, Luxury sport fishing yacht HCB 42,HCB 42 Siesta price, HCB 42 Siesta performance, High-performance center console HCB 42,HCB 42 Siesta review, HCB 53 Sueños for sale, HCB 53 Sueños walkthrough, Largest luxury center console HCB 53,HCB 53 Sueños specs, HCB 53 Sueños review, HCB 53 Sueños offshore fishing, HCB 53 Sueños price, High-performance HCB 53 Sueños, HCB 65 Estrella for sale, HCB 65 Estrella walkthrough, HCB 65 Estrella yacht review, World’s largest center console HCB 65,HCB 65 Estrella specs, HCB 65 Estrella luxury yacht, HCB 65 Estrella price, Ultimate offshore HCB 65 Estrella, HCB 48 Lujo for sale, HCB 48 Lujo walkthrough, HCB 48 Lujo center console, HCB 48 Lujo price, HCB 48 Lujo performance, HCB 48 Lujo specs, High-performance center console HCB 48,HCB 48 Lujo luxury yacht, Best HCB Yachts dealer in the world, 65 Estrella World’s largest HCB dealer "
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="WORLD’s LARGEST EXCLUSIVE HCB DEALER"
        />
        <meta
          property="og:description"
          content=" American Yacht Group is the world’s largest exclusive HCB dealer, representing luxury center-console yachts across South Florida, including Fort Lauderdale, Miami, Naples, Palm Beach, and beyond. "
        />
        <meta property="og:url" content="https://www.americanyachtgroup.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ayg.s3.us-east-2.amazonaws.com/homepage-image-1-1.webp"
        />
        <meta property="og:site_name" content="American Yacht Group" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <Navbar />
      <Popup />
      <div>
        {/* HCB Content  */}
        <HomeHCB />
        {/* IKON Content  */}
        {/* <HomeIKON /> */}
      </div>

      <section class="container-fluid col-lg-11 py-4">
        <div class="text-center">
          <h4 class="mb-3 c-heading fw-bold py-2">
            World's Largest Exclusive HCB Dealer - Setting the Standard in
            Maritime Excellence.
          </h4>

          <p>
            American Yacht Group is the World's Largest Exclusive HCB Dealer.
            Located in Jupiter and serving Naples, Miami, Fort Lauderdale, Palm
            Beach, Stuart, the Bahamas, and beyond, we redefine yachting. As a
            leading yacht brokerage, we specialize in smooth experiences for
            buying and selling boats, motor yachts, cruising vessels, and
            center-consoles. At American Yacht Group, we're Info than dealers;
            we're passionate navigators dedicated to elevating your yachting
            dreams.
          </p>
        </div>
        <div class="row g-0 mt-3">
          <div class="col-sm-12 col-md-4">
            <div class="c-ayg-effect-1">
              <div class="c-ayg-effect-img">
                <img
                  src="https://ayg.s3.us-east-2.amazonaws.com/services-4.webp"
                  alt="Image"
                />
              </div>
              <div class="c-ayg-effect-text">
                <h2>Why Choose Us</h2>
                <p>
                  As a leading yacht brokerage, we specialize in smooth
                  experiences for buying and selling boats, motor yachts,
                  cruising vessels, and center-consoles.
                </p>
                {/* <div class="c-ayg-effect-btn">
                <a class="c-ayg-btn" href="#">Read More</a>
              </div> */}
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="c-ayg-effect-1">
              <div class="c-ayg-effect-img">
                <img
                  src="https://ayg.s3.us-east-2.amazonaws.com/hcb-image-1-1.webp"
                  alt="Image"
                />
              </div>
              <div class="c-ayg-effect-text">
                <h2>What We Do</h2>
                <p>
                  American Yacht Group is your exclusive home for everything HCB
                  YACHTS in South Florida.
                </p>
                {/* <div class="c-ayg-effect-btn">
                <a class="c-ayg-btn" href="#">Read More</a>
              </div> */}
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="c-ayg-effect-1">
              <div class="c-ayg-effect-img">
                <img
                  src="https://ayg.s3.us-east-2.amazonaws.com/homepage-image-1-1.webp"
                  alt="Image"
                />
              </div>
              <div class="c-ayg-effect-text">
                <h2>Who We Are</h2>
                <p>
                  American Yacht Group, South Florida's top HCB Yachts dealer.
                  Based in Jupiter and serving Naples, Miami, Fort Lauderdale,
                  Palm Beach, Stuart, the Bahamas, and beyond, we redefine
                  yachting.
                </p>
                {/* <div class="c-ayg-effect-btn">
                <a class="c-ayg-btn" href="#">Read More</a>
              </div> */}
              </div>
            </div>
          </div>
                
        </div>
      </section>

      <section>
        <Container fluid className="col-lg-11 py-4">
          <Row className="g-0">
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/79/1/2024-hcb-53-suenos-power-9427901-20240613095742172-1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/yachts-for-sale?make=HCB`}
                    className="text-white fs-5"
                  >
                    <h2>HCB YACHTS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/75/56/8617556_20231114143456262_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/yachts-for-sale?className=Catamaran`}
                    className="text-white fs-5"
                  >
                    <h2>CATAMARANS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/8/1/8760801_0_010720231043_0.png"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/yachts-for-sale?className=Cuddy Cabin`}
                    className="text-white fs-5"
                  >
                    <h2>CUDDY CABIN</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/40/72/9134072_20231130084733155_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/yachts-for-sale?className=Center Consoles`}
                    className="text-white fs-5"
                  >
                    <h2>CENTER CONSOLE</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/81/99/9018199_950373073_0_280820230947_0.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/yachts-for-sale?className=Motor Yachts`}
                    className="text-white fs-5"
                  >
                    <h2>MOTOR YACHTS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="effect-1">
                <div class="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/15/26/8631526_20221219081834493_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div class="effect-text">
                  <Link
                    to={`/yachts-for-sale?className=High Performance Boats`}
                    className="text-white fs-5"
                  >
                    <h2>HIGH PERFORMANCE BOATS</h2>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Link to={`/yachts-for-sale?make=HCB`}>
          <Container fluid className="col-lg-11 py-3">
            <Col key="advertisement" xs={12}>
              <Card
                className="border-0"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <Card.Body className="p-2">
                  <Card.Text>
                    <div className="text-center">
                      {/* Mobile: Display Image 1 */}
                      <Row className="d-md-none">
                        <Col>
                          <img
                            src={Img_URL1}
                            alt="Mobile"
                            className="img-fluid"
                          />
                        </Col>
                      </Row>

                      {/* Tablet: Display Image 2 */}
                      <Row className="d-none d-md-flex d-lg-none">
                        <Col>
                          <img
                            src={hcbads}
                            alt="Tablet"
                            className="img-fluid"
                          />
                        </Col>
                      </Row>

                      {/* Desktop: Display Image 3 */}
                      <Row className="d-none d-lg-flex">
                        <Col>
                          <img
                            src={Img_URL3}
                            alt="Desktop"
                            className="img-fluid"
                          />
                        </Col>
                      </Row>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Container>
        </Link>
      </section>

      {/* <section>
        <InstagramLogin />
      </section> */}

      <section class="container-fluid col-lg-11 pb-5">
        <div class="col-lg-12 hr-line">
          <div class="d-flex justify-content-start">
            <h5 className="text-dark fw-bold ">Our Yacht Services</h5>
          </div>
        </div>
        <div class="row mt-3 g-2">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-handshake"></i> Brokerage
              </h5>
              <p class="mb-1">
                With AYG: Experience Your premier yacht brokerage for seamless
                buying and selling.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-money-bill"></i> Financing
              </h5>
              <p class="mb-1">
                AYG secures flexible yacht financing through premier financial
                partnerships for you.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-shield-alt"></i> Insurance
              </h5>
              <p class="mb-1">
                Insure your yacht seamlessly with tailored marine insurance from
                AYG Insurance Broker.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-truck"></i> Transportation
              </h5>
              <p class="mb-1">
                We offers expert Yacht Transportation: land or water, your
                choice.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-wind"></i> Hurricane Storage
              </h5>
              <p class="mb-1">
                Secure yacht hurricane storage available at AYG. Reserve your
                space!
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="border rounded-3 p-3">
              <h5 class="text-primary-emphasis fw-bold">
                <i class="fas fa-exchange-alt"></i> Trade-In
              </h5>
              <p class="mb-1">
                We Offer effortless yacht upgrade: trade-in your boat for a
                better vessel.
              </p>
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/services#trade-in`} className=" text-white fw-bold">
                  View More{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
