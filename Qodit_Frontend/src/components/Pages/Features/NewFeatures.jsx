import React, { useState, useEffect } from "react";
import { BackgroundSVG } from "../BackgroundSVG";
import axios from "axios";

export const NewFeature = (props) => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://qoditdev.herokuapp.com/featuresChild").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("data", data);

  return (
    <div id="service">
      <BackgroundSVG />
      <div
        className="service-bg cover-background"
        style={{ zIndex: 1, position: " relative", paddingTop: "5rem" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Features</h1>
            </div>
          </div>
        </div>
      </div>
      {data &&
        data.map((data, index) =>
          index % 2 == 0 ? (
            <section className="sec-service">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="web-content">
                      <h2>{data.title}</h2>
                      <p>{data.description}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="web-image">
                      <img
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-duration="1500"
                        src={data.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="sec-service web-bg">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-image">
                      <img
                        data-aos="fade-left "
                        data-aos-duration="1500"
                        data-aos-duration="1500"
                        src={data.image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="web-service">
                      <h2>{data.title}</h2>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        )}
    </div>
  );
};

export default NewFeature;
