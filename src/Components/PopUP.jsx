import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import i48 from "../Images/48.png";

const Popup = () => {
  useEffect(() => {
    //3 seconds ON
    const showPopup = setTimeout(() => {
      document.getElementById("popup-container").style.display = "block";
    }, 4000);

    //7 seconds OFF
    const closePopup = setTimeout(() => {
      document.getElementById("popup-container").style.display = "none";
    }, 16000);

    return () => {
      clearTimeout(showPopup);
      clearTimeout(closePopup);
    };
  }, []);

  return (
    <div id="popup-container">
      <span
        id="close-btn"
        onClick={() => {
          document.getElementById("popup-container").style.display = "none";
        }}
      >
        <i className="fa-solid fa-circle-xmark text-secondary"></i>
      </span>

      <Link to={`/news-details/nyr`}>
        <img
          src="https://ayg.s3.us-east-2.amazonaws.com/NY2025.png"
          alt="hcbyachts@AYG"
          className="img-fluid"
        />
      </Link>

      {/* <div
        class="card m-0 border-0 "
        style={{
          maxWidth: "840px",
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
        }}
      >
        <Link to={`/news-details/flibs`}>
          <div class="row g-0 p-2">
            <div class="col-lg-6">
              <img src={flibs} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-lg-6">
              <div class="card-body">
                <small class="text-primary">
                  <img
                    src="https://www.flibs.com/content/markets/na/fort-lauderdale-international-boatshow/en/home/_jcr_content/root/content/content/responsivegrid_16755_1893687323/image.coreimg.100.1024.png/1709656015808/flibs-dates-2024.png"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </small>
                <h5 class="card-title text-white text-uppercase">
                  A SPLASH OF INSPIRATION
                </h5>

                <Link
                  to="https://hcbyachts.com/flibs-boat-show/?wst_prospect=88EF7DED-9CF3-4A09-B24E-5FAE45227B62&wst_wtu=ce76ad91-4301-4628-9538-50625073a5b4&utm_campaign=Boat+Show&utm_source=Email"
                  variant=""
                  className="btn btn-sm gradient-c1 text-white"
                >
                  BOOK FLIBS APPOINTMENT<i class="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Popup;
