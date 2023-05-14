import React from "react";
import Pex from "../../../../assets/recycle2.png";

// import Circle from "../../../assets/circle2.png";

import "./News.css";
// import Circle from "../../assets/Circle.svg";

function SchoolNews() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
          <div class="overlay4"></div>
        </div>
      </section>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <header>News & Events</header>
            {/* <img className="circle img-fluid " src={Circle} alt="" /> */}
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-5 event event1">
              <h6 className="title">EVENT</h6>
              <h5>HONOURABLE AWARD</h5>
            </div>

            <div className="col-md-5 event event2">
              <h6 className="title">EVENT</h6>
              <h5>HONOURABLE AWARD</h5>
            </div>
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-5 event event3">
              <h6 className="title">EVENT</h6>
              <h5>HONOURABLE MENTION</h5>
            </div>

            <div className="col-md-5 event event4">
              <h6 className="title">EVENT</h6>
              <h5>TEACHER CHAMPION</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SchoolNews;
