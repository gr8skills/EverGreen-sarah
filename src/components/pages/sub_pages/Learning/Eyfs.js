import React from 'react'
import Pex from "../../../../assets/examstudents3.png";
import Exam from "../../../../assets/examstudents4.png";
import Cute from "../../../../assets/cutekids.png";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";


import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Eyfs() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/academics/administrators-message">
          Academics
        </CBreadcrumbItem>
        <CBreadcrumbItem active>creche</CBreadcrumbItem>
      </CBreadcrumb>
      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>ACADEMICS </small>
            <header>Creche</header>
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-9 sen">
              <h4>PreSchool (0 – 5 years)</h4>
              <p>
                From personalized and targeted instruction in the classroom to
                opportunity-based clubs that give our students real-world
                experiences, there is an intentional effort to combine
                challenging programs with a culture that encourages a
                Christ-centered community. We want our students to live up to
                their full God-given potential, and we train them to be
                courageous followers of Christ.
              </p>
              <br />
            </div>
            <div className="col-md-1">&nbsp;</div>

            <div className=" create col-md-2">
              <div className="sub-cover">
                <ul className="sub-menu">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link className="active" to={"/learn/early-years"}>
                      Creche
                    </Link>
                  </li>
                  <li>
                    <Link to={"/learn/nursery"}>Junior Primary</Link>
                  </li>

                  <li>
                    <Link to={"/learn/nursery"}>Higher Primary</Link>
                  </li>
                  <li>
                    <Link to={"/learn/nursery"}>Secondary</Link>
                  </li>

                  <li>
                    <Link to={"/learn/nursery"}>Curriculum</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {}
        </div>

        <div className="col-md-12 flexy mov">
          <div className="col-md-6">
            <img src={Cute} alt="Header" className="img-fluid" />
          </div>

          <div className="col-md-6">
            <img src={Exam} alt="Header" className="img-fluid" />
          </div>
        </div>

        <div className="col-md-12 flexy segments">
          <div className="col-md-4">
            <h3>
              <span>
                <i class="icofont-ui-touch-phone"></i>
              </span>
              E-Learning
            </h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>
          </div>

          <div className="col-md-4">
            <h3>Technology</h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>

            <h3>Technology</h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>
          </div>

          <div className="col-md-4">
            <h3>Tuition</h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eyfs