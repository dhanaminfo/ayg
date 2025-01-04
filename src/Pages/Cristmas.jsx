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

const Cristmas = () => {
  return (
    <div>
      <NavBar />
      <Helmet>
        <title>That’s a Wrap – 2024!</title>
        <meta
          name="description"
          content="Discover the 2024 Fort Lauderdale International Boat Show (FLIBS) with HCB Yachts & Boats. Get event details, tickets, schedules, and explore luxury yachts!"
        />
        <meta
          name="keywords"
          content="Fort Lauderdale International Boat Show 2024, FLIBS 2024, Fort Lauderdale boat show tickets, FLIBS events, Biggest boat shows in the US, FLIBS 2024 schedule, Progressive Boat Show 2024, Luxury yachts FLIBS 2024, FLIBS 2024 tickets, Boat show USA 2024, Caribee Boats FLIBS, Fort Lauderdale International Boat Show events, FLIBS maps and boats, MegaSails, HCB Yachts , hcb yachts boat show, 2024, HCB Yachts Boat Show FLIBS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Fort Lauderdale International Boat Show | FLIBS "
        />
        <meta
          property="og:description"
          content="Discover the 2024 Fort Lauderdale International Boat Show (FLIBS) with Caribee Boats. Get event details, tickets, schedules, and explore luxury yachts!"
        />
        <meta
          property="og:url"
          content="https://www.americanyachtgroup.com/news-details/flibs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://americanyachtgroup.s3.us-east-2.amazonaws.com/56+poster+print+.jpeg"
        />
        <meta property="og:site_name" content="Americanyachtgroup" />
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
                {/* <p className="mb-1 fw-bold">Jan 23 - 26, 2025</p> */}
                <h2 className="fw-bold text-uppercase">
                  That’s a Wrap – 2024!
                </h2>

                <p className="mb-2">
                  <i className="fa-solid fa-pen-nib" /> Hunter Lajiness
                </p>
                {/* <Link
                  to="..."
                  variant=""
                  className="btn gradient-c1 text-white"
                >
                  BOOK NBS APPOINTMENT<i class="fa-solid fa-angles-right"></i>
                </Link> */}
                {/* <p>
                  For more details contact us at{" "}
                  <span className="fw-bold">VIP@hcbyachts.com</span> or visit
                  our store front in Bayfront, Naples!
                </p> */}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://hcbyachts.com/wp-content/uploads/2024/08/DSC08445-scaled.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md-12 ">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis fw-bold"
              >
                As 2024 comes to a close, we’re proud to celebrate an
                extraordinary year of milestones and achievements. This year,
                HCB Yachts debuted not one, but two groundbreaking models, with
                one earning the prestigious Innovation Award—an accolade that
                highlights our relentless pursuit of excellence.
              </p>
              {/* <h6 className="fw-bold">Two Stunning Locations to Explore </h6> */}
              At the Fort Lauderdale Boat Show, we delivered one of the most
              exciting HCB model debuts in the brand’s history, drawing acclaim
              from industry experts and boating enthusiasts alike
              <ul>
                <li>
                  American Yacht Group and HCB Yachts remain at the forefront of
                  the center console sector, continually pushing boundaries with
                  unparalleled designs, cutting-edge technology, and a
                  dedication to redefining what’s possible on the water. Here's
                  to an incredible year and to even greater horizons ahead!
                </li>
                <li>
                  Thank you for being a part of this remarkable journey. We look
                  forward to continuing to innovate and exceed expectations
                  together in the years to come.
                </li>
              </ul>
            </div>
          </div>

          {/* <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis"
          ></p>
          <div className="row mb-5">
            <div className="col-12 col-md-6">
              <img
                src="https://hcbyachts.com/wp-content/uploads/2024/08/DJI_0095-Enhanced-NR-4-scaled.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center">
              <div>
                <p
                  style={{ textAlign: "justify" }}
                  className="text-primary-emphasis"
                >
                  American Yacht Group is thrilled to be part of the 2025 Naples
                  Boat Show! We’ll be showcasing two of the latest HCB Yachts
                  models, exemplifying cutting-edge design, performance, and
                  comfort. This is your chance to see these remarkable vessels
                  up close and learn more about what sets HCB Yachts apart as
                  the ultimate choice for Center Consoles.
                </p>
                <p
                  style={{ textAlign: "justify" }}
                  className="text-primary-emphasis pt-2"
                >
                  Did you know American Yacht Group has an office conveniently
                  located in Bayfront, Naples? Stop by to meet our team of
                  experts who are ready to answer your questions and guide you
                  in finding your dream yacht. Whether you’re looking to
                  upgrade, buy your first boat, or simply learn more, we’re here
                  to help.
                </p>
              </div>
            </div>

            <p
              style={{ textAlign: "justify" }}
              className="text-primary-emphasis pt-3"
            >
              Mark your calendars for January 23-26, 2025, and join us at the
              Naples Boat Show. Come explore our boats, meet our friendly team,
              and experience the very best in boating luxury.
            </p>
            <p
              style={{ textAlign: "justify" }}
              className="text-primary-emphasis"
            >
              We look forward to seeing you there!
            </p>
            <p
              style={{ textAlign: "justify" }}
              className="text-primary-emphasis"
            >
              Naples Boat Show Naples, FL
            </p>
          </div> */}
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

export default Cristmas;
