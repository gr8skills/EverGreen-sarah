import React, { useState } from 'react';
import {Link} from "react-router-dom";
import SchLogo from "../assets/evergreen_logo.png";

import WaterMark from "../assets/Group1066.png";

import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/IG.svg";
import Linkedin from "../assets/linkdin.svg";




import "./Footer.css";


function Footer() {
const [isShown, setIsShown] = useState(true);
const [isShown2, setIsShown2] = useState(true);
const [isShown3, setIsShown3] = useState(true);

  return (
    <>
      <div className="container  smooth">
        <div className="join-head">
          <label2 htmlFor="">EXPLORE</label2>
          <h1>Discover More</h1>
        </div>

        <div className="col-md-12 flexy">
          <div className="col-md-4 go">
            <Link to="/Contact" className="go">
              <div
                onMouseEnter={() => setIsShown(false)}
                onMouseLeave={() => setIsShown(true)}
                className={`col-md-12 details ${isShown ? "draw" : ""}`}
                id="draw"
              ></div>
              <div
                onMouseEnter={() => setIsShown(false)}
                onMouseLeave={() => setIsShown(true)}
                className={`enq ${!isShown ? "enqH" : ""}`}
                id="enq"
              >
                <h3>Enquire</h3>
                <div className="emp"></div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 go">
            <Link to="/Gallery" className="go">
              <div
                onMouseEnter={() => setIsShown2(false)}
                onMouseLeave={() => setIsShown2(true)}
                className={`col-md-12 details ${isShown2 ? "draw2" : ""}`}
                id="draw"
              ></div>
              <div
                onMouseEnter={() => setIsShown2(false)}
                onMouseLeave={() => setIsShown2(true)}
                className={`enq ${!isShown2 ? "enqH" : ""}`}
                id="enq"
              >
                <h3>Visit</h3>
                <div className="emp2"></div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <a
              href="https://evergreen.educare.school/admission-form"
              target="_blank"
              className="go"
            >
              <div
                onMouseEnter={() => setIsShown3(false)}
                onMouseLeave={() => setIsShown3(true)}
                className={`col-md-12 details ${isShown3 ? "draw3" : ""}`}
                id="draw"
              ></div>
              <div
                onMouseEnter={() => setIsShown3(false)}
                onMouseLeave={() => setIsShown3(true)}
                className={`enq ${!isShown3 ? "enqH" : ""}`}
                id="enq"
              >
                <h3>Apply</h3>
                <div className="emp3"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer ">
        <div className="col-md-12 flexy">
          <div className="col-md-3 firstc">
            <div class="webform">
              <h6 class="col-md-12 text-light update">
                LET'S KEEP YOU UP TO DATE <br /> WITH OUR LATEST NEWS.
              </h6>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control Linput"
                    placeholder="Your Email Here"
                  />
                  <div className="input-group-prepend">
                    <button
                      className="btn  border border-left-0 Lbutton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <h6 className="folow">FOLLOW US</h6>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a
                  href="https://m.facebook.com/Evergreenschoolsenugu"
                  target="_blank"
                >
                  {" "}
                  <img src={Facebook} alt="stairs " className="fluid" />
                </a>
              </li>
              <li className="list-inline-item">
                <img src={Instagram} alt="stairs " className="fluid" />
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  href=" https://ng.linkedin.com/in/evergreen-school-a526961b8?original_referer=https%3A%2F%2Fwww.google.com%2F"
                  target="_blank"
                  rel="noopener"
                >
                  {" "}
                  <img src={Linkedin} alt="stairs " className="fluid" />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 secondc">
            <h4 style={{ marginBottom: "50px", textAlign: "center" }}>
              Contact Us
            </h4>

            <div className="col-md-12 flexy">
              <div className="col-md-4" style={{ width: "100%" }}>
                <h5>Evergreen College:</h5> <br />
                <p>
                  No 3 Presidential close beside Niger Foundation Hospital
                  Independence Layout Enugu.
                </p>
                <br />
                <h5>Phone</h5>
                08068782862, 09026646424, 09087594476
              </div>

              <div className="col-md-4">
                <h5>Evergreen Primary school:</h5> <br />
                <p>
                  No 8 Aguleri Street Independence Layout, opposite state high
                  Court Enugu.
                </p>
                <br />
                <h5>Email</h5>
                evergreenschoolsenugu2020@gmail.com
              </div>
              <div className="col-md-4">
                <h5>Evergreen Creche:</h5> <br />
                <p>No 8 Alvan Ikoku Street Independence Layout Enugu</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 last1">
            <h6> USEFUL LINKS</h6>
            <div className="row">
              <div className="col-md-12 flexy">
                <div className="col-md-6 weblist flexyM">
                  <ul class="list-unstyled">
                    <li>
                      <a
                        href="https://evergreen.educare.school/admission-form"
                        target="_blank"
                      >
                        Apply
                      </a>
                    </li>
                    <li>
                      <a href="/news/school_news">News and Events</a>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="student.html">Student Life</a>
                    </li>
                  </ul>
                  <div className="w-mark">
                    <a
                      href={"http://educare.school/"}
                      target={"_blank"}
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src={WaterMark}
                        alt="educare"
                        className="img-fluid"
                      ></img>
                    </a>
                  </div>
                </div>

                <div className="col-md-6 ">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/about/history">About Us</a>
                    </li>
                    <li>
                      <a href="/about/Conduct">Code of Conduct</a>
                    </li>
                    <li>
                      <a href="/learn/secondary_school">College</a>
                    </li>
                    {/* <li className="list-inline-item">
                      <a
                        href="https://evergreenschools.educare.school/enquiry"
                        target="_blank"
                      >
                        Inquiry
                      </a>
                    </li> */}
                    <li className="list-inline-item">
                      <a href="/learn/primary_school">Primary School</a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        <span className=" col-md-12 flexy">
          <div className="col-md-11">&nbsp;</div>
          <a
            href="#top"
            onclick="topFunction()"
            title="Go to top"
            id="scroll-up"
            className="col-md-1"
          >
            <span className="up">
              <span className="up2">^</span>
              <span className="up3">Top </span>
            </span>
          </a>
        </span>

        <div className="col-md-12 flexy boda">
          <div className="col-md-3 copi">
            <p>&copy; 2022 Evergreen School-All RIghts</p>
          </div>
          <div className="col-md-7">&nbsp;</div>
          <div className="col-md-2 lastcopi">
            <p>
              <a href="/Contact">Contact Us</a> <span>|</span> Data Production
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer