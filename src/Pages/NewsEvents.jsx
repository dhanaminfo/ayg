import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";
import hcb from "../Images/thewharf.jpeg";
import imgg from "../Images/56p.jpeg";
import { Helmet } from "react-helmet";

const NewsEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Helmet>
        <title>News & Events | HCB Dealer Special</title>
      </Helmet>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "100px",
        }}
      ></div>
      <img
        src="https://hcbyachts.com/wp-content/uploads/2021/12/53-A1Z-19_Running-Shots29.jpeg"
        alt=""
        style={{
          height: "450px",
          width: "100%",
          objectFit: "cover",
        }}
        className="img-fluid"
      />

      <Container fluid>
        <Row className="g-3 py-3">
          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://ayg.s3.us-east-2.amazonaws.com/NBS.png"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Jan 23 - 26, 2025</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis"
                  >
                    Join Us at the 2025 Naples Boat Show!
                  </Card.Title>
                  <Link to={`/news-details/nbs`} variant="" className="btn">
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://hcbyachts.com/wp-content/uploads/2021/12/03-2018-HydraSport-1116.jpeg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Nov, 2024</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis text-uppercase"
                  >
                    Brokerage Spotlight. 2024 HCB 53’ Sueños.
                  </Card.Title>
                  <Link
                    to={`/news-details/brokerage-spotlight-53`}
                    variant=""
                    className="btn"
                  >
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src={imgg}
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Oct 30-Nov 03, 2024</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis"
                  >
                    Get Ready for the 2024 Fort Lauderdale International Boat
                    Show
                  </Card.Title>
                  <Link to={`/news-details/flibs`} variant="" className="btn">
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://images.boatsgroup.com/images/1/48/96/2022-hcb-42-lujo-power-9414896-20240603095930842-1_XLARGE.jpg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">June, 2024</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis text-uppercase"
                  >
                    Brokerage Spotlight. 2022 HCB 42’ Lujo.
                  </Card.Title>
                  <Link
                    to={`/news-details/brokerage-spotlight-42`}
                    variant=""
                    className="btn"
                  >
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://images.boatsgroup.com/images/1/15/29/9281529_20240301064056347_1_XLARGE.jpg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">May, 2024</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis text-uppercase"
                  >
                    Brokerage Spotlight. 2021 HCB 53’ Sueños.
                  </Card.Title>
                  <Link
                    to={`/news-details/brokerage-spotlight`}
                    variant=""
                    className="btn"
                  >
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://aimbaseimage.blob.core.windows.net/hcbyachts/Images/39%20Z%20Running.jpg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Apirl, 2024</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis text-uppercase"
                  >
                    The HCB 39' Speciale best under the 40' sector.
                  </Card.Title>
                  <Link
                    to={`/news-details/39-speciale`}
                    variant=""
                    className="btn"
                  >
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src={hcb}
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">March, 2024</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis text-uppercase"
                  >
                    HCB Yachts & American Yacht Group set sights on grand
                    opening of new office
                  </Card.Title>
                  <Link
                    to={`/news-details/opening-of-new-office`}
                    variant=""
                    className="btn"
                  >
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://hcbyachts.com/wp-content/uploads/2024/03/48-sunrise-scaled.jpg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Feb 24, 2024</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis text-uppercase"
                  >
                    New HCB Campeon Wins Prestigious Innovation Award!
                  </Card.Title>
                  <Link
                    to={`/news-details/campeon-innovation-award`}
                    variant=""
                    className="btn"
                  >
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://ayg.s3.us-east-2.amazonaws.com/hurricane-season.jpeg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">Aug 28, 2023</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis"
                  >
                    PREPARING YOUR BOAT FOR HURRICANE
                  </Card.Title>
                  <Link
                    to={`/news-details/preparing-for-hurricane`}
                    variant=""
                    className="btn"
                  >
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="p-3 bg-light">
              <Card className="rounded-0 border-0">
                <Card.Img
                  variant="top"
                  src="https://ayg.s3.us-east-2.amazonaws.com/hcb-fishing.jpg"
                  className="bg-dark rounded-0"
                  height={"250px"}
                />
                <Card.Body className="p-0 py-3 bg-light">
                  <Card.Text className="mb-2">August 3, 2023</Card.Text>
                  <Card.Title
                    style={{ height: "65px" }}
                    className="text-primary-emphasis"
                  >
                    HCB 39′ SPECIALE TURNS HEADS AT THE 24TH ANNUAL MBGFC
                    BILLFISH LIMITED TOURNAMENT
                  </Card.Title>
                  <Link
                    to={`/news-details/39-turns-head`}
                    variant=""
                    className="btn"
                  >
                    Read Now <i class="fa-solid fa-angles-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsEvents;
