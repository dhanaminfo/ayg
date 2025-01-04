import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import financing_banner from "../Images/financing_banner.png";
import insurance_banner from "../Images/insurance_banner.png";
import hurricane_banner from "../Images/hurricane_banner.png";
import tranaportation_banner from "../Images/transportation_banner.png";
import charter_banner from "../Images/charter_banner.png";
import Navbar from "../Components/Navbar";
import { ref, push } from "firebase/database";
import { database } from "../firebase";
import axios from "axios";
import Express_URL from "../Components/Express_URL";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";

const Services = () => {
  const formRef = useRef();
  const [captchaValue, setCaptchaValue] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // State to track CAPTCHA verification

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setIsCaptchaVerified(true); // Set the state to true when CAPTCHA is verified
  };
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const [selectedService, setSelectedService] = useState("");

  const handleButtonClick = (service) => {
    setSelectedService(service);
    setFormData({
      ...formData,
      CA_category: service,
    });
    scrollToForm();
  };

  const formatPhoneNumber = (input) => {
    // Remove non-digit characters
    const phoneNumber = input.replace(/\D/g, "");

    // Apply the desired format
    const formattedPhoneNumber = phoneNumber.replace(
      /^(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3"
    );

    return formattedPhoneNumber;
  };

  const [formData, setFormData] = useState({
    NM_firstName: "",
    NM_lastName: "",
    ID_email: "",
    NO_phoneNumber: "",
    CD_city: "",
    CD_state: "",
    CD_country: "",
    CA_category: "",
    DS_comments1: "",
    DS_comments2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate and limit the length for the phoneNumber field
    if (name === "NO_phoneNumber") {
      const phoneNumber = value.replace(/\D/g, ""); // Remove non-digit characters
      if (phoneNumber.length <= 10) {
        // Limit to 10 digits
        const formattedValue = formatPhoneNumber(phoneNumber);
        setFormData({ ...formData, [name]: formattedValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      console.error("CAPTCHA not completed!");
      return;
    }

    // Get current date and time
    const currentDate = new Date();
    // Format date to MySQL DATETIME format (YYYY-MM-DD HH:MM:SS)
    const formattedDateTime = currentDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    // Prepare formData with the timestamp
    const formDataWithTimestamp = {
      ...formData,
      submitDateTime: formattedDateTime,
    };

    // Reset form fields and show success alert immediately
    setFormData({
      NM_firstName: "",
      NM_lastName: "",
      ID_email: "",
      NO_phoneNumber: "",
      CD_city: "",
      CD_state: "",
      CD_country: "",
      CA_category: "",
      DS_comments1: "",
      DS_comments2: "",
    });

    alert("Form submitted successfully!");

    // Use Promise.all to handle form submission and email sending in parallel
    try {
      await Promise.all([
        axios.post(`${Express_URL}/submit-form`, formDataWithTimestamp),
        axios.post(`${Express_URL}/send-email-service`, {
          ...formData,
          recipientEmail: formData.ID_email,
          subject: "Lead email",
          message: formData,
        }),
      ]);
    } catch (error) {
      console.error("Error processing requests:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Yacht Services</title>
        <meta
          name="description"
          content="At American Yacht Group, we aim to build lasting relationships based on trust and respect—not just sell you a boat. Your journey with us goes beyond the purchase!"
        />
        <meta
          name="keywords"
          content="yacht services, yacht brokerage, yacht maintenance, yacht financing, yacht insurance, yacht hurricane storage, yacht transportation, yacht charter, yacht trade-in, luxury yachts, yacht concierge services, boat services, American Yacht Group, yacht repair, yacht management, yacht repair, yacht detailing, luxury yacht management, yacht brokerage services, yacht charter services, yacht refit and restoration , marine services, yacht captain services, yacht concierge services, yacht financing, yacht survey services, yacht electronics installation, yacht customization, yacht transport services, yacht warranty services,"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Services | American Yacht Group" />
        <meta
          property="og:description"
          content="At American Yacht Group, we aim to build lasting relationships based on trust and respect—not just sell you a boat. Your journey with us goes beyond the purchase!"
        />
        <meta
          property="og:url"
          content="https://www.americanyachtgroup.com/services"
        />
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
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "100px",
        }}
      ></div>

      <section style={{ backgroundColor: "" }}>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Brokerage </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                At American Yacht Group, our expert brokers assist in yacht
                purchases, sales, and liaising with shipyards for optimal
                outcomes. We prioritize your needs, budget, and future plans,
                employing cutting-edge tech and marketing for swift sales. As
                trusted advisors, we're committed to exceeding expectations at
                every stage.
              </p>

              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Brokerage")}
                >
                  Reuest Service <i class="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={financing_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#f4f4f4" }}>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={financing_banner} alt="" className="img-fluid" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Financing </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                Keep your hard-earned money and let the bank’s money finance
                your boating dream. American Yacht Group partners with several
                major financial institutions to assist you in financing your
                yacht purchase. Our partner programs offer flexible financing
                options and competitive loan programs. Contact us today and
                we’ll have one of our yacht finance experts reach out with the
                next steps in the process of getting you approved.
              </p>

              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Finance")}
                >
                  Reuest Service <i class="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Insurance</h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                As a yacht owner, you want to experience the same peace and
                tranquility when thinking about the condition of your vessel, as
                you do when you’re out enjoying it. Our team has relationships
                with the best yacht insurance specialists in the industry that
                tailor your policy to fit your desired coverage. Insurance plans
                for your boat can include products like free towing, trailer
                coverage, fishing equipment coverage, and much more. Ask your
                American Yacht Group broker for an introduction to our
                connections of yacht insurance representatives.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Insurance")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={insurance_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#f4f4f4" }}>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={hurricane_banner} alt="" className="img-fluid" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Hurricane Storage</h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                If you live along the Atlantic Coast or Gulf of Mexico, and
                you’re a boat owner, preparing for a hurricane is a yearly task.
                American Yacht Group offers hurricane storage services for your
                vessel by storing it inside our boat yard. Our protection
                program includes hauling your yacht out of the water and
                securing it inside our facility during a hurricane event. Space
                and availability are limited, so sign up in advance now to
                secure your space before it’s too late.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Hurricane Storage")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center"
            >
              <h1 className="mb-3">The Yacht Transportation </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                Heading up North for the season and want to have your boat
                transported for you? American Yacht Group provides personal
                yacht transportation services to get your vessel where the fish
                are or where you plan to cruise. Our team offers pick-up by land
                or water, supported by our own fleet of specialists. Contact us
                today with your yacht transport request to get pricing and
                availability of services.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Transportation")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={tranaportation_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#f4f4f4" }}>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={charter_banner} alt="" className="img-fluid" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Charter </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                American Yacht Group is excited to present our unmatched Yacht
                Charter Services. Immerse yourself in luxury and adventure with
                our curated selection of exquisite yachts and professional
                crews, guaranteeing an unforgettable experience. Whether for
                relaxation or exploration, our services promise cherished
                memories and cater to your desires. Trust American Yacht Group
                as your go-to yacht broker for the ultimate voyage of opulence
                and tranquility.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Charter")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "" }} id="trade-in">
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Trade-In </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                Not every company offers trade-ins toward a new HCB or pre-owned
                boat. American Yacht Group does. While our brokerage swiftly
                sells your yacht, waiting isn't always ideal. We offer a quick,
                easy trade-in process with our financial capability. Contact us
                for an accurate valuation of your boat in today's market.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Trade-In")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={charter_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#f4f4f4" }}>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={charter_banner} alt="" className="img-fluid" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Repair </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                As an HCB Yachts customer, trust our authorized service center
                for all your needs. Our skilled team handles diagnostics,
                maintenance, warranty work, and customizations. With
                certifications from top brands and conveniently located
                facilities across South Florida, we prioritize your convenience.
                Introducing our Mobile Boat Service for added ease. Your
                satisfaction and swift return to the water are our top
                priorities.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Repair")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="c-contact-us" style={{ backgroundColor: "#ebf0f7" }}>
        <Container fluid className="col-lg-11 py-3">
          <div class="text-center">
            <h4 class="py-2 c-heading">
              Get In Touch for Full-Circle Yacht Ownership Experience
            </h4>
            <hr class="hr-1" />
            <p>
              <small>
                Send us a messages and we will get back to you as soon as
                possible!
              </small>
            </p>
          </div>
          <Row>
            <Col md={12} lg={6} ref={formRef}>
              <Form onSubmit={handleSubmit}>
                <Row className="g-2">
                  <Col lg={6}>
                    <Form.Group controlId="firstName">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        placeholder="First Name"
                        name="NM_firstName"
                        value={formData.NM_firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="lastName">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="NM_lastName"
                        placeholder="Last Name"
                        value={formData.NM_lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2">
                  <Col lg={6}>
                    <Form.Group controlId="email">
                      <Form.Control
                        className="mb-2"
                        type="email"
                        placeholder="Email"
                        name="ID_email"
                        value={formData.ID_email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="phoneNumber">
                      <Form.Control
                        className="mb-2"
                        type="tel"
                        name="NO_phoneNumber"
                        placeholder="Phone (123) 456-7890"
                        value={formData.NO_phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2">
                  <Col lg={4}>
                    <Form.Group controlId="city">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="CD_city"
                        placeholder="City"
                        value={formData.CD_city}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group controlId="state">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        placeholder="State"
                        name="CD_state"
                        value={formData.CD_state}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group controlId="country">
                      {/* Change controlId to "country" */}
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="CD_country"
                        value={formData.CD_country}
                        placeholder="Country"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="selectService">
                  <Form.Control
                    className="mb-2"
                    as="select"
                    value={selectedService}
                    required
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                      // manually selects a service
                      setFormData({
                        ...formData,
                        CA_category: e.target.value,
                      });
                    }}
                  >
                    <option value="">Select service...</option>
                    <option value="Brokerage">Brokerage</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Finance">Finance</option>
                    <option value="Hurricane Storage">Hurricane Storage</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Charter">Charter</option>
                    <option value="Trade-In">Trade-In</option>
                    <option value="Repair">Repair</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="comments">
                  <Form.Control
                    className="mb-2"
                    as="textarea"
                    placeholder="Leave your comments"
                    rows={3}
                    name="DS_comments1"
                    value={formData.DS_comments1}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="comments2">
                  <Form.Control
                    className="mb-2"
                    as="textarea"
                    rows={3}
                    placeholder="Do you currently own a boat? If so, what kind?"
                    name="DS_comments2"
                    onChange={handleChange}
                    value={formData.DS_comments2}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <ReCAPTCHA
                    sitekey="6Ld9cMYpAAAAAM2cKj49PrihjL7IqZ0WUB2vXLqP"
                    onChange={handleCaptchaChange}
                  />
                </div>
                <div className="text-center">
                  <Button
                    className="btn custom-contact-btn text-uppercase"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
            <Col xs={12} md={12} lg={6} className="">
              <img
                src="https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_StarboardStern-Transparetn-Website-1536x675.png"
                alt=""
                className="img-fluid"
              />
              {/* src={my_img} */}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
