import React from 'react';
import { Link } from 'react-router-dom';
import Pex from "../../../../assets/kidsing2.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'

function AgeCons() {
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
        <CBreadcrumbItem active>School Fees</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>ADMISSION </small>
            <header>Tuition & Fees</header>
          </div>
          <div className=" create">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/academics/how_to_apply"}>How To Apply</Link>
                </li>
                <li>
                  <Link to={"/academics/International"}>
                    International Application
                  </Link>
                </li>
                <li>
                  <Link to={"/academics/result_&_scholarships"}>
                    Appy Online
                  </Link>
                </li>
                <li>
                  <Link to={"/academics/school-fees"} className="active">
                    Tuition & Fees
                  </Link>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AgeCons