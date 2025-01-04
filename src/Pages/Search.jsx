import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  Card,
  Spinner,
} from "react-bootstrap";
import { makeStringNames } from "../Components/MakeStringCollection";
import { classNames } from "../Components/ClassNameCollections";
import NavBar from "../Components/Navbar";
import { Link, useLocation } from "react-router-dom";
import Express_URL from "../Components/Express_URL";
import { Img_URL1, Img_URL3 } from "../Components/Ads_URL";
import hcbads from "../Images/hcbads.jpg";
import { Helmet } from "react-helmet";

const extractNumber = (str) => {
  const match = str.match(/\d+/);
  return match ? match[0] : "";
};

function Search() {
  const location = useLocation();
  const initialMake = new URLSearchParams(location.search).get("make") || "All";
  const [yachts, setYachts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [make, setMake] = useState(initialMake);
  const [condition, setCondition] = useState("All");
  const initialClassName =
    new URLSearchParams(location.search).get("className") || "";
  const [className, setClassName] = useState(initialClassName);

  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = (start, rows) => {
    let conditionParam = condition;
    // If 'All' is selected, include both 'New' and 'Used'
    if (condition === "All") {
      conditionParam = "New,Used";
    }

    let apiUrl = `${Express_URL}/documents/?start=${start}&rows=${rows}`;

    // Append selected parameters to the API URL
    if (make !== "All") {
      apiUrl += `&make=${make}`;
    }

    if (condition !== "All") {
      apiUrl += `&condition=${conditionParam}`;
    }

    if (className !== "All") {
      apiUrl += `&boatClass=${className}`;
    }

    if (minLength && maxLength) {
      apiUrl += `&length=${minLength}:${maxLength}|feet`;
    }

    if (minYear && maxYear) {
      apiUrl += `&year=${minYear}:${maxYear}`;
    }

    if (minPrice && maxPrice) {
      apiUrl += `&price=${minPrice}:${maxPrice}|USD`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.results.length === 0) {
          setError(true);
          setYachts([]);
        } else {
          const yachtsArray = data.data.results;
          setYachts(yachtsArray);
          setTotalPages(Math.ceil(data.data.numResults / rows));
          setError(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const state = location.state;
    if (state && state.chatbotMessageData) {
      const { pathParams, queryParams, response } = state.chatbotMessageData;

      setYachts(response.data.results);
      setTotalPages(Math.ceil(response.data.numResults / 24));

      if (queryParams.make) setMake(queryParams.make);

      if (queryParams.length) {
        const [minL, maxL] = queryParams.length.split(":").map(extractNumber);
        setMinLength(minL);
        setMaxLength(maxL);
      }

      if (queryParams.price) {
        const [minP, maxP] = queryParams.price.split(":");
        setMinPrice(minP);
        setMaxPrice(maxP);
      }

      if (queryParams.ModelYear) {
        const [minY, maxY] = queryParams.ModelYear.split(":");
        setMinYear(minY);
        setMaxYear(maxY);
      }

      if (queryParams.condition) setCondition(queryParams.condition);

      if (queryParams.BoatClassCode) {
        setClassName(queryParams.BoatClassCode);
      }
      setLoading(false);
    } else {
      fetchData(0, 24);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(0, 24);
    setPage(1);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * 24;
    fetchData(start, 24);
    setPage(nextPage);
    handleClick();
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;
    const start = (prevPage - 1) * 24;
    fetchData(start, 24);
    setPage(prevPage);
    handleClick();
  };

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  // Display advertisement after every 6 yachts
  const adInterval = (() => {
    if (
      window.matchMedia("(min-width: 767px) and (max-width: 950px)").matches
    ) {
      return 5; // Tablet
    } else {
      return 8; // Mobile, Desktop
    }
  })();
  //const adInterval = 8;
  const advertisementCol = (
    <Col key="advertisement" xs={12} md={12} lg={12}>
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
                  <img src={Img_URL1} alt="Mobile" className="img-fluid" />
                </Col>
              </Row>

              {/* Tablet: Display Image 2 */}
              <Row className="d-none d-md-flex d-lg-none">
                <Col>
                  <img src={hcbads} alt="Tablet" className="img-fluid" />
                </Col>
              </Row>

              {/* Desktop: Display Image 3 */}
              <Row className="d-none d-lg-flex">
                <Col>
                  <img src={Img_URL3} alt="Desktop" className="img-fluid" />
                </Col>
              </Row>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
  const advertisementCol1 = (
    <Col key="advertisement" xs={12} md={6} lg={4}>
      <Card
        className="border-0"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <Card.Body className="px-2 py-4">
          <Card.Text>
            <div class="border-0  ">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Img_URL1}
                  alt="Advertisement"
                  height={"305px"} // Adjust the height of the image as needed
                  width={"auto"}
                />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Helmet>
        <title>HCB Yachts for sale - New & Used Yachts for sale</title>
        <meta
          name="description"
          content="HCB Boats for sale - Explore luxury HCB yachts like the 53 Sueños, 65 Estrella, and 42 Siesta at American Yacht Group. High-performance vessels built for adventure. Find your dream yacht today!"
        />
        <meta
          name="keywords"
          content=" Center Console Yachts, HCB 39 Speciale, HCB 42 Siesta, HCB 53 Sueños, HCB 65 Estrella, HCB 48 Lujo,39 Speciale,42 Siesta,53 Sueños,65 Estrella,48 Lujo,39 HCB Speciale,42 HCB Siesta,53 HCB Sueños,65 HCB Estrella,48 HCB Lujo, HCB yachts for sale, buy HCB yachts, HCB yachts dealer, new HCB yachts for sale, pre-owned HCB yachts for sale, used HCB yachts, HCB center console yachts,HCB Yachts for sale in Florida, HCB fishing yachts for sale, luxury HCB yachts for sale, HCB custom yachts, HCB 39 Speciale for sale, HCB 42 Siesta for sale, HCB 53 Sueños for sale, HCB 65 Estrella for sale, HCB 48’ Lujo for sale, HCB yachts for sale in Florida, HCB yachts for sale in Fort Lauderdale, HCB yachts for sale in Miami, HCB yachts for sale in the USA, HCB yachts near me, best prices on HCB yachts, HCB yacht financing options, HCB yacht specifications and prices, HCB yachts with advanced features, where to buy HCB yachts, HCB luxury fishing yachts, custom HCB yachts for sale, HCB offshore yachts for sale, HCB 39 Speciale for sale, HCB 39 Speciale review, Best HCB Yachts dealer, Luxury center console HCB 39,High-performance HCB 39 Speciale, Offshore fishing boat HCB 39,HCB 39 Speciale specs, Customizable HCB 39,HCB Yachts 39 Speciale price, HCB 42 Siesta for sale, HCB 42 Siesta walkthrough, HCB 42 Siesta offshore boat, Luxury sport fishing yacht HCB 42,HCB 42 Siesta price, HCB 42 Siesta performance, High-performance center console HCB 42,HCB 42 Siesta review, HCB 53 Sueños for sale, HCB 53 Sueños walkthrough, Largest luxury center console HCB 53,HCB 53 Sueños specs, HCB 53 Sueños review, HCB 53 Sueños offshore fishing, HCB 53 Sueños price, High-performance HCB 53 Sueños, HCB 65 Estrella for sale, HCB 65 Estrella walkthrough, HCB 65 Estrella yacht review, World’s largest center console HCB 65,HCB 65 Estrella specs, HCB 65 Estrella luxury yacht, HCB 65 Estrella price, Ultimate offshore HCB 65 Estrella, HCB 48 Lujo for sale, HCB 48 Lujo walkthrough, HCB 48 Lujo center console, HCB 48 Lujo price, HCB 48 Lujo performance, HCB 48 Lujo specs, High-performance center console HCB 48,HCB 48 Lujo luxury yacht, 65 Estrella World’s largest HCB dealer "
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HCB Yachts for sale | New and Used Yachts"
        />
        <meta
          property="og:description"
          content="American Yacht Group offers thousands of new and pre-owned boats for sale. Explore the most complete collection of yachts from the leading marine MLS services!"
        />
        <meta
          property="og:url"
          content="https://www.americanyachtgroup.com/yachts-for-sale"
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
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "100px",
        }}
      ></div>
      <div className="px-2 py-4" style={{ backgroundColor: "#ebf0f7" }}>
        <Container fluid>
          <Form onSubmit={handleSubmit}>
            <Row className="g-1">
              <Col xs={12} md={4} lg={2}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-0">Make</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    value={make}
                    onChange={(e) => {
                      setMake(e.target.value);
                      setClassName("All");
                    }}
                  >
                    <option value="All">All</option>
                    {makeStringNames.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group>
                  <Form.Label className="mb-0">Condition</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  >
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                    <option value="All">All</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group>
                  <Form.Label className="mb-0">Class Names</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    value={className}
                    onChange={(e) => {
                      setClassName(e.target.value);
                      setMake("All");
                    }}
                  >
                    <option value="All">All</option>
                    {classNames.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">Length</Form.Label>
                  <Row className="g-0">
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="min"
                        value={minLength}
                        onChange={(e) => setMinLength(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="max"
                        value={maxLength}
                        onChange={(e) => setMaxLength(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">Year</Form.Label>
                  <Row className="g-0">
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="min"
                        value={minYear}
                        onChange={(e) => setMinYear(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="max"
                        value={maxYear}
                        onChange={(e) => setMaxYear(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label className="mb-0">Price</Form.Label>
                  <Row className="g-0">
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button
                className="btn-sm custom-contact-btn p-2 text-white"
                type="submit"
              >
                <i class="fa-solid fa-magnifying-glass"></i> Advanced Search
              </Button>
            </div>
          </Form>
        </Container>
      </div>
      <Container fluid className="col-lg-11">
        <Row className="g-3 mt-4">
          {error && (
            <div className="text-center">
              <h2>No matches found.</h2>
              <p>Retry adjusting your search filters or contact us</p>{" "}
              <p class="card-text mb-1 c-contact-p d-none d-md-block d-lg-block">
                <span>
                  <i class="fa-solid fa-phone"></i> (954) 802-7474
                </span>
                {"  "}/ sales@americanyachtgroup.com
              </p>
              <p class="card-text mb-1 c-contact-p d-md-none d-lg-none">
                <a href="tel:954-802-7474">
                  <i class="fa-solid fa-phone"></i> (954) 802-7474
                </a>
                {"  "}/ sales@americanyachtgroup.com
              </p>
            </div>
          )}
          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {yachts.map((yacht, index) => (
            <>
              <Col xs={12} md={6} lg={4}>
                <Link to={`/yachtdetails/${yacht.DocumentID}`} className="">
                  <div
                    class="card border-0"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    }}
                  >
                    <img
                      src={yacht.Images[0].Uri}
                      class="card-img-top"
                      alt="..."
                      loading="lazy"
                      height={"260px"}
                    />
                    <div class="card-body p-2">
                      <div className="text-start">
                        <h5 class="fw-bold mb-1">
                          {truncateText(
                            `${yacht.MakeString} ${yacht.Model}`,
                            25
                          )}
                        </h5>
                      </div>
                      <p class="text-dark mb-0 ">
                        {/* <i className="fa-solid fa-location-dot text-secondary"></i>{" "} */}
                        {truncateText(
                          `${yacht.ModelYear} | ${yacht.BoatLocation.BoatCityName}, ${yacht.BoatLocation.BoatStateCode}, ${yacht.BoatLocation.BoatCountryID}`,
                          30
                        )}
                      </p>
                      <div class="d-flex justify-content-between">
                        <div>
                          <p className="mb-0 fw-bold">
                            {yacht.Price
                              ? `${yacht.Price}`
                              : "$ Call For Price"}
                          </p>
                        </div>
                        <div className="text-dark fw-bold">
                          View Details{"  "}
                          <i class="fa-solid fa-angles-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              {/* First advertisement after every 9 yachts */}
              {(index + 1) % adInterval === 0 &&
                index !== yachts.length - 1 && (
                  <React.Fragment key={`advertisement-${index}`}>
                    {advertisementCol}
                  </React.Fragment>
                )}

              {/* Second advertisement inside every 9 yachts */}
              {(index + 1) % adInterval === 3 &&
                index !== yachts.length - 1 && (
                  <React.Fragment key={`second-advertisement-${index}`}>
                    {advertisementCol1}
                  </React.Fragment>
                )}
            </>
          ))}
        </Row>

        <div className="d-flex justify-content-center py-4">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              class="btn custom-contact-btn fw-bold p-2 fs-6"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              <i class="fa-solid fa-angles-left"></i> Prev
            </button>
            <button type="button" class="btn custom-contact-btn  p-2 fs-6">
              Page {page} of {totalPages}
            </button>
            <button
              type="button"
              class="btn custom-contact-btn fw-bold p-2 fs-6"
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              Next <i class="fa-solid fa-angles-right "></i>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Search;
