import React from 'react';
import { Link } from 'react-router-dom';
import Pex from "../../../../assets/about.png";
import Happy from "../../../../assets/mofty2.png";
import Hood from "../../../../assets/hood.png";

import Act from "../../../../assets/act.png";
import Maime from "../../../../assets/maime.png";
import Dance from "../../../../assets/stagedance3.png";

import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
// import Circle2 from "../assets/Circle.png";

import './Style.css';


function History() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/about/administrators-message">
          About
        </CBreadcrumbItem>
        <CBreadcrumbItem active>about Evergreen</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>About </small>
            <header>About Evergreen</header>
          </div>
          <div className=" create">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about/administrators-message"}>
                    Administrator’s Message
                  </Link>
                </li>
                <li>
                  <Link to={"/about/proprietors-message"}>
                    Proprietor’s Message
                  </Link>
                </li>
                <li>
                  <Link className="active" to={"/about/history"}>
                    History Of The School
                  </Link>
                </li>
                <li>
                  <Link to={"contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <p style={{ paddingTop: "0", margin: "0" }}>
              What is now known as Evergreen Secondary School emanated from Rev
              Mother Arcade, OLA of blessed memory, who prayed to our Lady that
              the land (Evergreen Compound) be given to the Catholic Mission to
              establish a School? She promised our Lady that if her request was
              granted the school would be named after her. Thus, came the name
              “Evergreen” in 1950 – a name that has now, become the landmark in
              the fast-spreading Lagos Metropolis of today.
            </p>

            <h4 className="bio" style={{ marginTop: "60px" }}>
              Our Mission
            </h4>
            <p style={{ paddingTop: "0", margin: "0", width: "50%" }}>
              What is now known as Evergreen Secondary School emanated from Rev
              Mother Arcade, OLA of blessed memory, who prayed to our Lady that
              the land (Evergreen Compound) be given to the Catholic Mission to
              establish a School? She promised our Lady that if her request was
              granted the school would be named after her. Thus, came the name
              “Evergreen” in 1950 – a name that has now, become the landmark in
              the fast-spreading Lagos Metropolis of today.
            </p>
          </div>
        </div>

        <div className="col-md-12 flexy mov2">
          <div className="col-md-6">
            <img src={Hood} alt="Header" className="img-fluid" />
          </div>

          <div className="col-md-6">
            <h4>Our Vision</h4>
            <p>
              To be the educational cradle of choice in our area of operation
            </p>
            <img src={Happy} alt="Header" className="img-fluid" />
          </div>
        </div>

        <div className="col-md-12 flexy" style={{ marginTop: "50px" }}>
          <div className="col-md-6">
            <h4>Our Values</h4>
            <p>
              To be the educational cradle of choice in our area of operation
            </p>
            <img src={Dance} alt="Header" className="img-fluid" />
          </div>

          <div className="col-md-6" style={{ marginTop: "90px" }}>
            <h4>Our Curriculum</h4>
            <p>
              To be the educational cradle of choice in our area of operation
              What is now known as Evergreen Secondary School emanated from Rev
              Mother Arcade, OLA of blessed memory, who prayed to our Lady that
              the land (Evergreen Compound) be given to the Catholic Mission to
              establish a School? She promised our Lady that if her request was
              granted the school would be named after her. Thus, came the name
              “Evergreen” in 1950 – a name that has now, become the landmark in
              the fast-spreading Lagos Metropolis of today.
            </p>
            <p>
              {" "}
              What is now known as Evergreen Secondary School emanated from Rev
              Mother Arcade, OLA of blessed memory, who prayed to our Lady that
              the land (Evergreen Compound) be given to the Catholic Mission to
              establish a School? She promised our Lady that if her request was
              granted the school would be named after her. Thus, came the name
              “Evergreen” in 1950 – a name that has now, become the landmark in
              the fast-spreading Lagos Metropolis of today.
            </p>
          </div>
        </div>

        <div className="col-md-12 flexy" style={{ marginTop: "90px" }}>
          <div className="col-md-6">
            {" "}
            <img src={Act} alt="Header" className="img-fluid" />
          </div>

          <div className="col-md-6">
            {" "}
            <img src={Maime} alt="Header" className="img-fluid" />
          </div>
        </div>
      </section>
    </>
  );
}

export default History