import React from "react";
import Pex from "../../../../assets/stagedance.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Icofont from "react-icofont";

function International() {
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
            
            <header>International Application</header>
          </div>

          <h4>Applying from Outside Nigeria</h4>
          <div className="create">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/academics/how_to_apply"}>How To Apply</Link>
                </li>
                <li>
                  <Link to={"/academics/International"} className="active">
                    International Application
                  </Link>
                </li>
               
                
              </ul>
            </div>

            <p>Thank you for your interest in Evergreen Schools Enugu.</p>

            <p>
              Evergreen School Enugu accepts goal driven students who are
              prepared to embrace the challendges of our demanding academic
              program Evegreen School academic session starts in September.
            </p>
            <p>
              <span className="vid">
                <Icofont icon="icofont-ui-play" />
              </span>
              Complete the entrance examination and interview. Admission
              Committee decision will be communicated to you within five
              business days.
            </p>

            <p>
              <span className="vid">
                <Icofont icon="icofont-ui-play" />
              </span>
              Email your transcripts to the admissions office
              (evergreenschoolenugu2020@gmail.com) and schedule an entrancen
              examination and we also conduct examinations and interviews via
              our school portal.
            </p>
            <p>
              <span className="vid">
                <Icofont icon="icofont-ui-play" />
              </span>
              fill out and submit your examination form online
              @https://evergreen.educare.school/admission-form.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default International;
