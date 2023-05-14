import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Violin from "../assets/perform.png";
import Interhouse from "../assets/valedictory.jpg";
import Church from "../assets/stagesing.jpg";
import { Link } from "react-router-dom";

import "./Vision.css";

function Vision() {
  return (
    <>
      <div className="box-event">
        <div className="box-event-cont">
          <label htmlFor="">NEWS + EVENTS</label>
          <h4>Featured News And Activities</h4>
          <p>
            We're stronger because of you. We're inspired by who you are, what
            you do, and what you care about. Discover all the ways you can
            become more involved with ES from attending events, to organizing
            reunions, or being part of #EVERGREENDay — we'd love to see more of
            you!
          </p>
        </div>
      </div>

      <div className="vision-cont">
        <Carousel itemsToShow={1}>
          <Item>
            <div className="moreEvents">
              <ul className="event-list col-md-12 flexy">
                <li>
                  <img src={Violin} alt="" className="img-fluid" />
                  <button className="event-btn">EVENT</button>
                </li>
                <li>
                  <img src={Interhouse} alt="" className="img-fluid" />
                  <button className="event-btn">EVENT</button>
                </li>
                <li className="v-hide ">
                  <img src={Church} alt="" className="img-fluid" />
                  <button className="event-btn">EVENT</button>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/News" className="more-news1">
                <button>More News + Events</button>
              </Link>
            </div>
          </Item>
          <Item>
            <div className="yellow-stand moreEvents">
              <ul className="event-list">
                <li>
                  <img src={Violin} alt="" className="img-fluid" />
                  <button className="event-btn">EVENT</button>
                </li>
                <li>
                  <img src={Interhouse} alt="" className="img-fluid" />
                  <button className="event-btn">EVENT</button>
                </li>
                <li className="v-hide">
                  <img src={Church} alt="" className="img-fluid" />
                  <button className="event-btn">EVENT</button>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/News" className="more-news1">
                <button>More News + Events</button>
              </Link>
            </div>
          </Item>
          <Item>
            <div className="moreEvents">
              <ul className="event-list">
                <li>
                  <img src={Violin} alt="" className="img-fluid" />
                  <button className="event-btn">EVENT</button>
                </li>
                <li>
                  <img src={Interhouse} alt="" className="img-fluid" />
                  <button className="event-btn">EVENT</button>
                </li>
                <li className="v-hide">
                  <img src={Church} alt="" className="img-fluid" />
                  <button className="event-btn">EVENT</button>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/News" className="more-news1">
                <button>More News + Events</button>
              </Link>
            </div>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default Vision;
