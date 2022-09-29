import React from 'react'
import Pex from "../../../../assets/cutekids.png";
import Exam from "../../../../assets/playkids.png";
import Cute from "../../../../assets/cutekids.png";


import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Eyfs() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
          <div class="overlay4"></div>
        </div>
      </section>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <header>Early Years</header>
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-9 sen">
              <h4>PreSchool (0 – 5 years)</h4>
              <p>
                The children are taught in fun ways by the use of so many
                activities such as; Sand tray, sandpool, building blocks,
                pre-writing and learning materials. Our children are also taught
                are sound identification of jolly phonics sound using our jolly
                phonics rhyme. Shape rhymes are also taught, our mind-blowing
                termly themes are used by our children to explore their
                environment. We equally prepare our children for nursery by
                potty training them. <br />
                <br />
                Our day care comprises of ages:
                <br />
                <br /> Baby class; 0-11 months <br />
                Preschool 1; 1year - 1year 11 months <br />
                Preschool 2; 2 years
              </p>
              <br />

              <h3>Nursery</h3>
              <p>
                In Evergreen nursery section we take in our; Ability to make
                children read at age 3. Our structured handwriting and vast
                vocabulary. Well grounded in our ability to work with numbers ie
                numbers before and after, association of numbers to
                quantity,number names, place value everything about numbers. We
                also run EYFS hence our curriculum is enriched with lots of
                hands on activities to make children enjoy learning and love
                coming to school.
              </p>
            </div>
            <div className="col-md-2">&nbsp;</div>

            <div className=" create col-md-2">
              <div className="sub-cover">
                <ul className="sub-menu">
                  <li>
                    <Link className="active" to={"/learn/early-years"}>
                     Early Years
                    </Link>
                  </li>
                  <li>
                    <Link to={"/learn/primary_school"}> Primary</Link>
                  </li>

                  <li>
                    <Link to={"/learn/secondary_school"}>College</Link>
                  </li>

                  <li>
                    <Link to={"/learn/school_module"}>Curriculum</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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