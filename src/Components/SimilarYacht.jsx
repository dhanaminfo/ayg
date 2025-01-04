import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Express_URL from "../Components/Express_URL";

const SimilarYacht = () => {
  const [yachts, setYachts] = useState([]);
  const make = "HCB";
  const condition = "New";
  const fetchData = (start, rows) => {
    let apiUrl = `${Express_URL}/documents/?{start}&rows=${rows}&make=${make}&condition=${condition}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const yachtsArray = data.data.results;
        setYachts(yachtsArray);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData(0, 3);
  }, []);
  return (
    <div>
      <Row className="g-3">
        {yachts.map((yacht) => (
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
                      {yacht.MakeString}{" "}
                      <span className="text-dark">{yacht.Model}</span>
                    </h5>
                  </div>
                  <p class="text-dark mb-0 ">
                    {/* <i className="fa-solid fa-location-dot text-secondary"></i>{" "} */}
                    {yacht.ModelYear} | {yacht.BoatLocation.BoatCityName},{" "}
                    {yacht.BoatLocation.BoatStateCode},{" "}
                    {yacht.BoatLocation.BoatCountryID}
                  </p>
                  <div class="d-flex justify-content-between">
                    <div>
                      <p className="mb-0 fw-bold">
                        {yacht.Price ? `${yacht.Price}` : "$ Call For Price"}
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
        ))}
      </Row>
      {yachts.length === 0 && <Alert variant="warning">No yachts found.</Alert>}
    </div>
  );
};

export default SimilarYacht;
