import React, { useState, useEffect } from "react";
import { BackgroundSVG } from "../BackgroundSVG";
import ReactReadMoreReadLess from "react-read-more-read-less";
import axios from "axios";

import "./About.css";

export const NewAboutUs = (props) => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://qoditdev.herokuapp.com/aboutusChild").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);

  const style = {
    h3: {
      color: "#fff",
    },
  };

  // useEffect(()=>{

  //   if (data.silce)
  // },[])

  return (
    <div id="new-about">
      <BackgroundSVG />
      <div
        className="service-bg cover-background"
        style={{ zIndex: 1, position: " relative", paddingTop: "5rem" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">About</h1>
            </div>
          </div>
        </div>
      </div>

      {data &&
        data.slice(0, 2).map((data, index) =>
          index % 2 == 0 ? (
            <section className="sec-about">
              <div class="element">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-7">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        src={data.image}
                        className="img-responsive"
                        alt="s1"
                      />
                    </div>
                    <div className="col-sm-12 col-md-5">
                      <div className="feature-list">
                        <div className="feature-details">
                          <h1>{data.title}</h1>
                          <p>{data.description}</p>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="about-sec">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="who-we">
                      <h1>{data.title}</h1>
                      <p>{data.description}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={data.image}
                      data-aos={"fade-up"}
                      data-aos-duration="3000"
                      className="img-fluid who-img"
                      alt="whoWe"
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        )}

      {data &&
        data.slice(2, 3).map((data1, index) => (
          <section className="about-sec about-bg">
            <div className="container" key={index == 2}>
              <div className="why-choose">
                <h1>{data1.mainTitle}</h1>
              </div>

              <div className="row pt-5">
                {data &&
                  data.slice(2, 6).map((value, index) => (
                    <div className="col-md-3 choose__us">
                      <div
                        className="img_circle"
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                      >
                        <img src={value.image} className="img-fluid" alt="" />
                      </div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

      {data &&
        data.slice(6, 7).map((data2, index) => (
          <section className="about-sec">
            <div className="container">
              <div className="row">
                {data &&
                  data.slice(6, 9).map((value, index) => (
                    <div className="col-md-4">
                      <div className="vision-mission-content">
                        <img
                          data-aos="zoom-in-up"
                          data-aos-duration="1500"
                          src={value.image}
                          alt="Vision"
                          className="img-fluid"
                        />
                        <h3 style={style.h3}>{value.title}</h3>
                        <p>
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {value.description}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
    </div>
  );
};
export default NewAboutUs;
