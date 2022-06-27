import React from 'react';
import { Link } from 'react-router-dom';
import Teacher from "../../../../assets/admin.png";
import Pex from "../../../../assets/examstudents2.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import './Style.css'

function PrincipalsDesk() {
  return (
    <>
      <div className="page-trans">
        <section>
          <div className="header-img ">
            <img src={Pex} alt="Header" className="img-fluid" />
                       <div class="overlay4"></div>

          </div>
        </section>
        <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
          <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
          <CBreadcrumbItem href="/about/administrators-message">
            About
          </CBreadcrumbItem>
          <CBreadcrumbItem active>Administrator’s Message</CBreadcrumbItem>
        </CBreadcrumb>

        <section className="container">
          <div className="comments">
            <div className="intro">
              <small>About </small>
              <header>Welcome Address</header>
            </div>
            <div className=" create">
              <div className="sub-cover">
                <ul className="sub-menu">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link
                      className="active"
                      to={"/about/administrators-message"}
                    >
                      Welcome to Evergreen Schools
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about/proprietors-message"}>
                      Proprietor’s Message
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about/history"}>History Of The School</Link>
                  </li>{" "}
                  <li>
                    <Link to={"/about/history"}>About Evergreen</Link>
                  </li>{" "}
                  <li>
                    <Link to={"/about/conduct"}>Parents Code-of-Conduct</Link>
                  </li>
                  <li>
                    <Link to={"contact-us"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <img src={Teacher} alt="" className="principals-img" />
            </div>

            <div className="col-md-12 toop">
              <p style={{ lineHeight: "35px" ,fontSize:'20px'}}>
                Evergreen Schools is a faith-based co-curricular institution
                located is a spacious and serene environment. The school draws
                from the very best of Cambridge, EYFS and Nigerian curricula
                designed to equip our learners for global competitiveness and
                future relevance. <br />
                <br />
                We are a Thinking School, certified to use thinking
                methodologies developed by Thinking Matters, University of
                Exeter, United Kingdom. We run an environment where everyone in
                the school community pays conscious attention to thought, words
                and actions. Our learners are primed with strategic thinking
                tools to become optimal life-long learners. <br />
                <br />
                Our top-of-the-shelf Management and academic team ensure that
                you have that unique Evergreen experience that has made hundreds
                of parents repose their faith in us. Evergreen Schools is a
                place for all and a brand you can trust. Have you had an
                Evergreen experience today?
              </p>
            </div>
            <div className="rev">
              <h4>MRS DORIS CHINEDU OKORO </h4>
              <h4>ADMINISTRATOR</h4>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PrincipalsDesk