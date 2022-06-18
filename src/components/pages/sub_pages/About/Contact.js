import React from 'react';
import Pex from "../../../../assets/kidsing2.png";
import Map from './Map';
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import { Link } from 'react-router-dom';
import { useState } from "react";

// import Circle from "../assets/Circle.svg";
import './Style.css'

// import MyForm from "./MyForm";







function Contact() {
  return (
    <>
      <div></div>
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
        <CBreadcrumbItem active>Contact</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>ADMISSION </small>
            <header>Contact </header>
          </div>
          <div className="create">
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
                  <Link to={"/about/history"}>History Of The School</Link>
                </li>
                <li>
                  <Link className="active" to={"contact-us"}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="happy">We’re Happy To Hear From You</h6>
              <h6 className="happy1">Evergreen Secondary School Enugu</h6>
            </div>
            <div className="telecont flexy">
              <div>
                <h6>Telephone: </h6>
                <p>
                  (+234) 8068782862
                  <br /> 09026646424, 09087504476
                </p>
              </div>
              <div>
                <h6>Address: </h6>
                <p>
                  {" "}
                  Temporal Site-#4 Ukwa Street, <br /> Independence Layout,
                  Enugu State, Nigeria
                  <br />
                  Permanent Site-#8 Aguleri Street, Opposite <br />
                  High Court, Independence Layout, Enugu State, Nigeria.
                </p>
              </div>
              <div>
                <h6>Enquiries Email: </h6>
                <p>
                  {" "}
                  evergreenschoolng@gmail.com Mon-Fri(8am-5pm)
                  <br /> Saturday-Sunday (Closed)
                </p>
              </div>
            </div>
            <div className="col-md-12 flexy">
              {" "}
              <Map />
              <div className="col-md-6">
                <h3>Enquiry Form</h3>
                {/* <MyForm /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="overlay-page"></div>
    </>
  );
}

export default Contact