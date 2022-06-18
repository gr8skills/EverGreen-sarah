import React from 'react';
import Pex from "../../../../assets/stage.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Icofont from "react-icofont";

function Apply() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/academics/how_to_apply">
          Admission
        </CBreadcrumbItem>
        <CBreadcrumbItem active>How to Apply</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>ADMISSION </small>
            <header>How to Apply</header>
          </div>
          <div className="create">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link className="active" to={"/academics/how_to_apply"}>
                    How To Apply
                  </Link>
                </li>
                <li>
                  <Link to={"/academics/school-fees"}>School Fees</Link>
                </li>
                <li>
                  <Link to={"/academics/result_&_scholarships"}>Transfer</Link>
                </li>
              </ul>
            </div>
            <div className="sale">
              <br />
              <h3>Applying from within Nigeria</h3>
              <p>Thank you for your interest in Evergreen School Enugu. </p>
              <p>
                Click <Link to="/International">here </Link>
                if you are applying from outside Nigeria{" "}
              </p>

              <p>
                Continue down the page if you are applying from within Nigeria
              </p>

              <p>
                Evergreen Schools Enugu accepts goal driven students who are
                prepared to embrace the challenges of our academic program and
                Evergreen School's academic session starts in September.
              </p>

              <p>
                <span className="vid">
                  <Icofont icon="icofont-ui-play" />
                </span>
                FIll out and submit your application form online @
                https://evergreen.educare.school/admission-form or visit the
                admissions office <br />
                within the school premises to fill out the form
              </p>

              <p>
                <span className="vid">
                  <Icofont icon="icofont-ui-play" />
                </span>
                Candidate's two recent passport photograph not more than six
                months old
              </p>
              <p>
                <span className="vid">
                  <Icofont icon="icofont-ui-play" />
                </span>
                Candidate's birth certificate or international passport data
                page
              </p>

              <p>
                <span className="vid">
                  <Icofont icon="icofont-ui-play" />
                </span>
                Most recent academic reports from the last two years
              </p>

              <p>
                <span className="vid">
                  <Icofont icon="icofont-ui-play" />
                </span>
                Candidate's Transcripts
                <br />
                Schedule an entrance examination and interview
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apply