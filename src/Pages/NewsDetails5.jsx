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

const NewsDetails5 = () => {
  return (
    <div>
      <Helmet>
        <title>42 Lujo | American Yacht Group</title>
        <meta
          name="description"
          content="Explore featured yachts in the Brokerage Spotlight at American Yacht Group. Discover detailed specs, high-quality images, and unique features with expert guidance."
        />
        <meta
          name="keywords"
          content="Brokerage Spotlight, American Yacht Group, featured yachts, premium yachts, yacht specifications, high-quality images, unique features, latest additions, expert guidance, luxury yachts, yacht brokerage, yacht highlights, top yachts, yacht details, luxury yacht listings, yacht features, yacht showcases, premium boat listings, luxury marine, yacht experts, exclusive yacht features, yacht market updates, elite yacht selection"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Brokerage Spotlight | American Yacht Group"
        />
        <meta
          property="og:description"
          content="Explore featured yachts in the Brokerage Spotlight at American Yacht Group. Discover detailed specs, high-quality images, and unique features with expert guidance."
        />
        <meta
          property="og:url"
          content="https://www.americanyachtgroup.com/news-details/brokerage-spotlight"
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
      <NavBar />
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
                <p className="mb-1 fw-bold">May, 2024</p>
                <h2 className="fw-bold text-uppercase">Brokerage Spotlight</h2>
                <h2 className="fw-bold text-uppercase">2021 HCB 53’ Sueños</h2>
                <h5
                  style={{ textAlign: "justify" }}
                  className="text-primary-emphasis"
                >
                  <span className="fw-bold">Asking:</span> $1,250,000
                </h5>
                <Link
                  to="https://www.americanyachtgroup.com/yachtdetails/9281529"
                  variant=""
                  className="btn gradient-c1 text-white"
                >
                  View Full Details <i class="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://hcbyachts.com/wp-content/uploads/2022/02/DSC_6133.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                This 2021 HCB 53’ Sueños “Executive Decision” is a phenomenal
                example of luxury and fishability. Being one of the most custom
                tournament ready 53’s ever built - she is more than ready to
                take on any offshore adventure. This vessel has been
                meticulously maintained by its owner and captain they’re even
                offering a re-power of Quad Yamahas to the next happy owner.
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
                          Anthony Paglia
                        </h1>
                        <p class="card-text mb-2 c-contact-p d-none d-md-block d-lg-block">
                          <span>
                            {/* <i class="fa-solid fa-envelope"></i>{" "} */}
                            Anthony@hcbyachts.com
                          </span>
                        </p>
                        <p class="card-text mb-2 c-contact-p">
                          {/* <i class="fa-solid fa-location-dot"></i> */}
                          Islamorada, FL
                        </p>
                        <p class="card-text mb-1 c-contact-p d-none d-md-block d-lg-block">
                          <span>
                            {/* <i class="fa-solid fa-phone"></i> */}( 352 )
                            361-4835
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
                src="https://images.boatsgroup.com/images/1/15/29/9281529_20240301064056347_1_XLARGE.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-12 col-md-6">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                She is outfitted with all the essential features to extend your
                time on the water, including a Seakeeper stabilizer, rear-facing
                mezzanine, and dual 60-gallon transom live wells. “Executive
                Decision” boasts an extensive array of options and upgrades,
                such as a full custom tower, an upgraded Garmin electronics
                package, and fully insulated hatches.
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                The HCB 53’ Sueños offers ample space for guests in its fully
                equipped cabin, featuring a freshwater sink, refrigerator, air
                conditioning, microwave, enclosed head, and a full queen-size
                berth. The interior exudes luxury, with high-gloss teak flooring
                and countertops enhancing its elegant appeal.
              </p>
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

export default NewsDetails5;
