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
              <h6 className="title">NEWS</h6>
              {/* <h5>HONOURABLE AWARD</h5> */}
            </div>

            <div className="col-md-5 event event2">
              <h6 className="title">NEWS</h6>
              {/* <h5>HONOURABLE AWARD</h5> */}
            </div>
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-5 event event3">
              <h6 className="title">NEWS</h6>
              {/* <h5>HONOURABLE MENTION</h5> */}
            </div>

            <div className="col-md-5 event event4">
              <h6 className="title">NEWS</h6>
              {/* <h5>TEACHER CHAMPION</h5> */}
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <p>
            Progress and success are qualities everyone wants to identify with.
            As a parent, your deepest satisfaction is in knowing your child is
            in a school that is progressive and successful. This story you are
            about to read is about progress and success, both of which are deep
            seated traits of Evergreen Schools. It is the story of our journey
            to the national final of the Annual National Mathematics Competition
            (ANMC) put together by the Nigerian Tulip International Colleges
            (NTIC).
          </p>
          <p>
            This journey didn’t start yesterday. It started in 2021 with the
            18th edition of the competition. It started on a wing and a prayer
            but soon took off to winning heights. This edition produced Nduanya
            Chibuzo who finished first in Enugu State in the first round written
            by at least 8,000 candidates nationwide. The national final of this
            edition eluded us but this did not stop us from producing Uzoewulu
            Kaeto, who finished first place in Enugu state (also written by
            about 8,000 pupils nationwide) and was one of the top 30 nationwide,
            and four others who made the group of the best 5 in the state in the
            first round of the 19th edition. We narrowly missed our spot in the
            national final which takes only the top 20 candidates nationwide
            despite having our top performer score over 90% in the keenly
            contested first round. He finished in 21st position nationwide. We
            considered the near miss an opportunity to prepare better and a
            promise to clinch the spot in the next edition.
          </p>
          <p></p>
        </div>
      </section>
    </>
  );
}

export default SchoolNews;
