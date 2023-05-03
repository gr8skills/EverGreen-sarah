import React from "react";
import Carousel from "react-bootstrap/Carousel";
import scholar from "../assets/mask2.png";
import Des from "../assets/youngscholars2.jpg";
import Hard from "../assets/dancers.jpg";
import Pex from "../assets/youngscholars.jpg";

import Teacher from "../assets/casual.png";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";

import Vision from "./Vision";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="page-trans ">
        <div className="firstcaro">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid carImg"
                src={scholar}
                alt="Scholar"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="imgCaro  d-block w-100 img-fluid carImg"
                src={Des}
                alt="Student"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid carImg"
                src={Hard}
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid carImg"
                src={Pex}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="hooked-cov ">
          <div className="hooked">
            <div className="search-fixed help">
              {" "}
              <Link>Search</Link>{" "}
            </div>
            <div className="enquire-fixed help">
              <Link to="/Contact">Enquire</Link>
            </div>
            <div className="apply-fixed help">
              <a href="https://evergreen.educare.school/admission-form">
                Apply
              </a>
            </div>
            <div className="visit-fixed help">
              <Link to="/Contact">Visit</Link>
            </div>
          </div>
        </div>

        <div className="intro-container">
          <div className="intro-cover">
            <div className="welcome-img">
              <img className="head-teacher-img " src={Teacher} alt="" />
            </div>
            <div className="col-md-1">&nbsp;</div>

            <div className="welcome-note note1">
              <label2 htmlFor="#">GREETINGS</label2>
              <h1>Welcome to Evergreen Schools</h1>

              <div className="mt-3 greet">
                <p>
                  Evergreen Schools is a faith-based co-curricular institution
                  located is a spacious and serene environment. The school draws
                  from the very best of Cambridge, EYFS and Nigerian curricula
                  designed to equip our learners for global competitiveness and
                  future relevance.
                </p>
              </div>

              <div className="mt-5 flexy ">
                {/* <img className="line d-block " src={Line} alt="" /> */}
                <div className="col-md-4">&nbsp;</div>
                <a href={"/principal"} className="read">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="whitespace">&nbsp;</div> */}

        <div className="gammers col-md-12">
          {/* <div className="flexy">
            <div className="col-md-1">&nbsp;</div>
            <div className="gameb game1 col-md-3"></div>

            <div className="game game2 col-md-2"></div>

            <div className="gameb game3 col-md-3"></div>
          </div> */}
          <div className="game0">
            <h1>
              STILL EVERGREEN <br />
              <span style={{ fontSize: "100px", color: "rgb(32,71,17)" }}>
                @ 10
              </span>{" "}
              <br />
              (Celebrating 10 years of God's goodness).
            </h1>
          </div>
          {/* <div className="flexy">
            <div className="col-md-1">&nbsp;</div>

            <div className="game game4 col-md-2"></div>
            <div className="gameb game5 col-md-3"></div>

            <div className="game game6 col-md-2"></div>

            <div className="gameb game7 col-md-3"></div>
          </div> */}
        </div>

        {/* this is for mobile view */}

        <div
          className="gammers2"
          style={{ textAlign: "center", marginTop: "80px" }}
        >
          {/* <div className="flexyM col-md-12">
            <div className="col-4">&nbsp;</div>
            <div className="col-8 gameM game-1 "></div>
          </div>
          <div className="flexyM col-md-12">
            <div className="col-8 gameM game-2 "></div>

            <div className="col-4">&nbsp;</div>
          </div>
          <div className="flexyM col-md-12">
            <div className="col-4">&nbsp;</div>
            <div className="col-8 gameM game-3 "></div>
          </div> */}
          <div className="game01 ">
            <h1>
              STILL EVERGREEN <br />
              <span style={{ fontSize: "80px", color: "rgb(32,71,17)" }}>
                {" "}
                @ 10
              </span>{" "}
              <br />
              (Celebrating 10 years of God's goodness).
            </h1>
          </div>
          {/* <div className="flexyM col-md-12">
            <div className="col-8 gameM game-4 "></div>

            <div className="col-4">&nbsp;</div>
          </div>{" "}
          <div className="flexyM col-md-12">
            <div className="col-4">&nbsp;</div>
            <div className="col-8 gameM game-5 "></div>
          </div>{" "}
          <div className="flexyM col-md-12">
            <div className="col-8 gameM game-6 "></div>

            <div className="col-4">&nbsp;</div>
          </div>{" "}
          <div className="flexyM col-md-12">
            <div className="col-4">&nbsp;</div>
            <div className="col-8 gameM game-7 "></div>
          </div>{" "} */}
        </div>

        <div className="col-md-12 flexy know">
          <div className="col-md-3">&nbsp;</div>
          <div className="welcome-note col-md-6">
            <label2 htmlFor="#">GET TO KNOW US</label2>
            <h1>Who We Are</h1>

            <div className="mt-3 greet">
              <p>
                Evergreen Schools draw from the very best of British and
                Nigerian curriculum content. The curricula empower the child
              </p>
            </div>
          </div>
        </div>

        <div className="divs">
          <div className="col-md-12 flexy divi">
            <div className="crech division col-md-4">
              <Link to="/learn/early-years">
                <div class="overlay">
                  <h4>Early Years</h4>
                  <p>(0-5 years)</p>
                </div>
              </Link>
            </div>
            <div className="higher division col-md-4">
              <Link to="/learn/primary_school">
                <div class="overlay">
                  <h4>Junior school </h4>
                  <p> (6-11 years) (Grade 1-6)</p>
                </div>
              </Link>
            </div>
            <div className="secondary division col-md-4">
              <Link to="/learn/secondary_school">
                <div class="overlay">
                  <h4>College</h4>
                  <p>(11-17 years)</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Vision />
        {/* <Socials /> */}

        <Testimonial />
      </div>
    </>
  );
}

export default HeroSection;
