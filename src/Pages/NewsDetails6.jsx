import React from "react";
// import my_logo from "../Images/my-logo-white.png";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";
// import hcb from "../Images/thewharf.jpeg";
// import hcb1 from "../Images/53edit1.jpeg";
import prof from "../Images/ayg-icon.jpg";
import SimilarYacht from "../Components/SimilarYacht";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const NewsDetails6 = () => {
  return (
    <div>
      <NavBar />
      <Helmet>
        <title>Spotlight: 39 Speciale | American Yacht Group</title>
        <meta
          name="description"
          content="Discover the 39 Speciale: family-friendly yacht with HCB comfort, spacious layout, convertible lounge/tackle station, panoramic helm with cross-curved™ glass."
        />
        <meta
          name="keywords"
          content="Brokerage Spotlight, 39 Speciale, American Yacht Group, center console yacht, luxury yacht, HCB comfort, spacious layout, convertible lounge, tackle station, panoramic view, cross-curved glass, smooth ride, luxurious yacht, family-friendly yacht, high-performance center console, premium yacht features, advanced helm, marine luxury, top center console yachts, yacht comfort, upscale boating, elegant yacht design"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Spotlight: 39 Speciale | American Yacht Group"
        />
        <meta
          property="og:description"
          content="Discover the 39 Speciale: family-friendly yacht with HCB comfort, spacious layout, convertible lounge/tackle station, panoramic helm with cross-curved™ glass."
        />
        <meta
          property="og:url"
          content="https://www.americanyachtgroup.com/news-details/39-speciale"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ayg.s3.us-east-2.amazonaws.com/39+Photo.jpg"
        />
        <meta property="og:site_name" content="American Yacht Group" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "100px",
        }}
      ></div>
      <section className="news-details mt-5 mb-2">
        <div className="container p-5 bg-body-tertiary">
          <div className="row mb-5">
            <div className="col-12 col-md-6 d-flex align-items-center text-primary-emphasis">
              <div>
                <p className="mb-1 fw-bold">June, 2024</p>
                <h2 className="fw-bold text-uppercase">Brokerage Spotlight</h2>
                <h2 className="fw-bold text-uppercase">2022 HCB 42’ Lujo</h2>
                <h5
                  style={{ textAlign: "justify" }}
                  className="text-primary-emphasis"
                >
                  <span className="fw-bold">Asking:</span> $699,000
                </h5>
                <Link
                  to="https://www.americanyachtgroup.com/yachtdetails/9414896"
                  variant=""
                  className="btn gradient-c1 text-white"
                >
                  View Full Details <i class="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://images.boatsgroup.com/images/1/48/96/2022-hcb-42-lujo-power-9414896-20240603100332410-1_XLARGE.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md-6 d-flex align-items-center">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                Highlighted features: Upgraded Garmin Electronics, Upgraded JL
                Audio Sound System, Carbon fiber Edson Steering wheel, Gem lux
                18’ Carbon fiber outriggers, and Dolphin grey upholstery.
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center text-primary-emphasis">
              <div class="border-2 border-white bg-white rounded-3 shadow">
                <div class="row g-0">
                  <div class="col-3 p-3">
                    <img
                      src={prof}
                      alt="profile"
                      class="rounded-circle img-fluid"
                    />
                  </div>
                  <div class="col-9 ">
                    <div class="card border-0">
                      <div class="card-body">
                        <h1 class="card-title fw-bold text-uppercase c-contact-h">
                          Brian Ewen
                        </h1>
                        <p class="card-text mb-2 c-contact-p d-none d-md-block d-lg-block">
                          <span>
                            {/* <i class="fa-solid fa-envelope"></i>{" "} */}
                            Brian@hcbyachts.com
                          </span>
                        </p>
                        {/* <p class="card-text mb-2 c-contact-p"> */}
                        {/* <i class="fa-solid fa-location-dot"></i> */}
                        {/* Islamorada, FL
                        </p> */}
                        <p class="card-text mb-1 c-contact-p d-none d-md-block d-lg-block">
                          <span>
                            {/* <i class="fa-solid fa-phone"></i> */}
                            (317) 224-3607
                          </span>
                        </p>
                        <p class="card-text mb-1 c-contact-p d-md-none d-lg-none">
                          <a href="tel:954-802-7474">
                            {/* <i class="fa-solid fa-phone"></i> */}( 352 )
                            361-4835
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis"
          ></p>
          <div className="row mb-5">
            <div className="col-12 col-md-6">
              <img
                src="https://images.boatsgroup.com/images/1/48/96/2022-hcb-42-lujo-power-9414896-20240603095930842-1_XLARGE.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                With Quad Yamaha 425 XTO's this 2022 HCB 42' Lujo is perfect for
                the person who craves performance. This HCB is equipped with
                every feature needed to accommodate your family and friends,
                including a full transom sleigh seat and a rear summer kitchen.
                It was lift-kept its entire life until recently, and now it has
                a fresh coat of bottom paint, making it ready for your viewing!
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              ></p>
              {/* <p className="mb-0">
                <i className="fa-solid fa-pen-nib" /> Hunter Lajiness
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/*Similar Yachts For Sale */}
      <section className="mb-4">
        <Container fluid className="col-lg-11">
          <h4 className="fw-bold text-primary-emphasis">
            Other HCB Yachts For Sale
          </h4>
          <hr />
          <SimilarYacht />
        </Container>
      </section>
    </div>
  );
};

export default NewsDetails6;
