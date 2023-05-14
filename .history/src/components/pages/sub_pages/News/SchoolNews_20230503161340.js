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

      <div className="col-md-10 offset-md-1">
        <div className="comments">
          <div className="intro">
            <header>News & Events</header>
            {/* <img className="circle img-fluid " src={Circle} alt="" /> */}
          </div>
          <br />
          <br />
          <h4>GOD HAS DONE IT AGAIN!!!</h4>{" "}
          <h6>
            Raising quality learners who stand out in all fields is the pursuit
            of any serious institution.
          </h6>{" "}
          <p>
            We are delighted to let you know that Evergreen Schools is on the
            stage again! This time, we are celebrating the superb performance of
            our pupils in the TSL 2023 International Student Essay Competition
            titled: HOW CAN YOUNG PEOPLE BE BETTER SUPPORTED TO THRIVE IN GREEN
            JOBS?
          </p>
          <p>
            Students were asked to share their views on how they feel they can
            be better supported to succeed in the green jobs market, and they
            didn’t disappoint! TSL (Trust for Sustainable Living) received 1,215
            essay entries, from 227 schools in 65 different countries.{" "}
          </p>
          <ul>
            <h6>
              Evergreen Schools produced four Honourable Mentions (awards of
              recognition) as follows:
            </h6>
            <li>
              Egbo Osinachi Emmanuel – Honourable Mention (in both Primary and
              Secondary school categories)
            </li>
          </ul>
          <div className="col-md-12 flexy">
            <div className="col-md-6 event event1">
              <h6 className="title">NEWS</h6>
              {/* <h5>HONOURABLE AWARD</h5> */}
            </div>

            <div className="col-md-6 event event2">
              <h6 className="title">NEWS</h6>
              {/* <h5>HONOURABLE AWARD</h5> */}
            </div>
          </div>
          <div className="col-md-12 flexy">
            <div className="col-md-6 event event3">
              <h6 className="title">NEWS</h6>
              {/* <h5>HONOURABLE MENTION</h5> */}
            </div>

            <div className="col-md-6 event event4">
              <h6 className="title">NEWS</h6>
              {/* <h5>TEACHER CHAMPION</h5> */}
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="col-md-12">
          <h3>Progress and Success; deep seated traits of Evergreen Schools</h3>
          <br />
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
          <p>
            Then it was time for 20th edition (2023). The first round happened,
            and true to form, we produced the top 4 performers in the state, two
            of whom clinched spots in the national finals – Chiemeka Favour
            finished in the 12th position nationwide with an aggregate score of
            93.99% (1st position in Enugu) and Onwubiko Ebube finished in the
            19th position nationwide with an aggregate score of 91.64% (2nd
            position in Enugu).This in itself was a phenomenal accomplishment
            but the job was not yet done.{" "}
          </p>
          <p>
            On the 5th of April, these gallant representatives put Evergreen
            Schools and Enugu State on the map with their stellar performance in
            the national final examinations with Onwubiko Ebube finishing 4th in
            Nigeria, returning with a gold medal and 100% scholarship to NTIC
            after scoring 95.29%, and Chiemeka Favour finishing in 14th place in
            Nigeria, returning with a bronze medal and 50% scholarship to NTIC
            after scoring 92.43%. Their scholarships are worth over 45 million
            Naira in total. Our distinguished parents identify with Evergreen
            Schools as a progressive and successful school. Every well-meaning
            parent identifies with progress and success for their children. The
            new session is at hand. A visit to our office can begin a new story
            of progress and success for your ward.
          </p>
        </div>
      </div>
    </>
  );
}

export default SchoolNews;
