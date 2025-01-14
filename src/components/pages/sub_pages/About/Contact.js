import React from 'react';
import Pex from "../../../../assets/kidsing2.png";
import Map from './Map';

import { Link } from 'react-router-dom';
import { useState } from "react";

// import Circle from "../assets/Circle.svg";
import './Style.css'

import Form from "./Form";







function Contact() {
  return (
    <>
      <div></div>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
          <div class="overlay4"></div>
        </div>
      </section>
     
      <section className="container">
        <div className="comments">
          <div className="intro">
           
            <header>Contact </header>
          </div>
          <div className="create">
            <div className="sub-cover">
              <ul className="sub-menu">
                {/* <li>
                  <Link to={"/"}>Home</Link>
                </li> */}
                <li>
                  <Link to={"/about/administrators-message"}>
                    Welcome Address
                  </Link>
                </li>
                <li>
                  <Link to={"/about/proprietors-message"}>
                    Proprietor’s Message
                  </Link>
                </li>
                <li>
                  <Link to={"/about/consult"}>
                    Evergreen Consult
                  </Link>
                </li>
             
                <li>
                  <Link to={"Conduct"}>Parents-code-of conduct</Link>
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
              <div className="col-md-4">
                <h6>Address: </h6>
                <p>
                  Evergreen College: No 3 Presidential close beside Niger
                  Foundation Hospital Independence,
                  <br /> Enugu State, Nigeria.
                </p>
              </div>
              <div>
                <h6>Enquiries Email: </h6>
                <p>
                  {" "}
                  evergreenschoolsenugu2020@gmail.com <br /> Mon-Fri(8am-5pm)
                  <br /> Saturday-Sunday (Closed)
                </p>
              </div>
            </div>
            <div className="col-md-12 flexy">
              {" "}
              <Map />
              <div className="col-md-6">
                <Form />
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