import React from "react";
import Pex from "../../../../assets/examstudents3.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Exam from "../../../../assets/graduationkids.png";
import Safari from "../../../../assets/primarykids.jpg";
import Icofont from "react-icofont";

function Primary() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
          <div class="overlay4"></div>
        </div>
      </section>

      <section className="container">
        <div className="comments col-md-12 flexy">
          <div className="intro col-md-9 sen">
            <header>Primary </header>
            <h4>Evergreen Primary School (Grades 1-6)</h4>
            <p>
              Junior school at Evergreen Secondary School is more than a prelude
              to the high school years. Junior school is an intentional effort
              to combine an individually-customized academic program with a
              Christ-centered culture. Junior school classes build upon the
              foundation of the student’s elementary years, preparing for the
              best of what is to come in high school. With differentiated
              instruction and workshop model classrooms, our teachers Go Beyond,
              ignite academic growth, and help students identify and nurture
              their God-given gifts and talents – one student at a time.{" "}
            </p>
            <br />
            <br />
            <h5>We excel in these ways and more; </h5>
            <br />
            <ul>
              <li>Our robust curriculum and methodology.</li>
              <li>
                Small Class size with teaching according to each child's
                peculiarity and level of understanding.{" "}
              </li>
              <li>
                High level of teachers employed. Consistent training and upgrade
                of methodology to meet up with the new ideas in the society and
                world at large.
              </li>
              <li>
                Extra curricular activities that bring out the best in children.
                Fusing morals, values and etiquette into our daily teaching.
                <li>
                  Evergreen schools is abreast with innovative and best world
                  practices in the educational sector via trainings and
                  mentorship.
                </li>
              </li>
            </ul>
          </div>
          <div className="col-md-1">&nbsp;</div>
          <div className="create col-md-2 ">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/learn/early-years"}>Early Years</Link>
                </li>
                <li>
                  <Link className="active" to={"/learn/nursery"}>
                    Primary
                  </Link>
                </li>

                <li>
                  <Link to={"/learn/secondary_school"}>College</Link>
                </li>

                <li>
                  <Link to={"/learn/nursery"}>Curriculum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 flexy mov">
          <div className="col-md-6">
            <img src={Safari} alt="Header" className="img-fluid" />
          </div>

          <div className="col-md-6">
            <img src={Exam} alt="Header" className="img-fluid" />
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
              </span>
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
              Alumni
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

export default Primary;
