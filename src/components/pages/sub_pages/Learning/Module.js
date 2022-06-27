import React from "react";
import Pex from "../../../../assets/outing.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
import Icofont from "react-icofont";

function Module() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
                     <div class="overlay4"></div>

        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/academics/administrators-message">
          Academics
        </CBreadcrumbItem>
        <CBreadcrumbItem active>Junior Primary</CBreadcrumbItem>
      </CBreadcrumb>
      <section className="container">
        <div className="comments col-md-12 flexy">
          <div className="intro col-md-9 sen">
            <small>Learning </small>
            <header>Curriculum</header>
            <h4>Nigerian And British Curriculum</h4>
            <p>
              Junior school at Evergreen Secondary School is more than a prelude
              to the high school years. Junior school is an intentional effort
              to combine an individually-customized academic program with a
              Christ-centered culture. Junior school classes build upon the
              foundation of the student’s elementary years, preparing for the
              best of what is to come in high school. With differentiated
              instruction and workshop model classrooms, our teachers Go Beyond,
              ignite academic growth, and help students identify and nurture
              their God-given gifts and talents – one student at a time.
            </p>
            <h4>Nigerian And British Curriculum</h4>
            <p>
              Junior school at Evergreen Secondary School is more than a prelude
              to the high school years. Junior school is an intentional effort
              to combine an individually-customized academic program with a
              Christ-centered culture. Junior school classes build upon the
              foundation of the student’s elementary years, preparing for the
              best of what is to come in high school. With differentiated
              instruction and workshop model classrooms, our teachers Go Beyond,
              ignite academic growth, and help students identify and nurture
              their God-given gifts and talents – one student at a time.
            </p>{" "}
            <h4>Nigerian And British Curriculum</h4>
            <p>
              Junior school at Evergreen Secondary School is more than a prelude
              to the high school years. Junior school is an intentional effort
              to combine an individually-customized academic program with a
              Christ-centered culture. Junior school classes build upon the
              foundation of the student’s elementary years, preparing for the
              best of what is to come in high school. With differentiated
              instruction and workshop model classrooms, our teachers Go Beyond,
              ignite academic growth, and help students identify and nurture
              their God-given gifts and talents – one student at a time.
            </p>
          </div>
          <div className="col-md-1">&nbsp;</div>
          <div className="create col-md-2 ">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/learn/early-years"}>Creche</Link>
                </li>
                <li>
                  <Link className="active" to={"/learn/nursery"}>
                    Higher Primary
                  </Link>
                </li>

                <li>
                  <Link to={"/learn/nursery"}>Junior Primary</Link>
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

        <div className="col-md-12 flexy segments">
          <div className="col-md-4">
            <h3>
              <span className="fon">
                <Icofont icon="icofont-ui-touch-phone" />
              </span>
              E-Learning
            </h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>
          </div>

          <div className="col-md-4">
            <h3>
              <span className="fon">
                <Icofont icon="icofont-test-bulb" />
              </span>{" "}
              Technology
            </h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>

            <h3>
              <span className="fon">
                <Icofont icon="icofont-graduate" />
              </span>
              Technology
            </h3>
            <p>
              Our E-Learning Educational Platform and resources aims to help
              parents, teachers and pupils relate and make learning easier.
            </p>
          </div>

          <div className="col-md-4">
            <h3>
              <span className="fon">
                <Icofont icon="icofont-bars" />
              </span>
              Tuition
            </h3>
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

export default Module;
