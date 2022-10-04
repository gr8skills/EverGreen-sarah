import React from "react";
import Pex from "../../../../assets/outing.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Chess from "../../../../assets/stagespecch.jpg";
import SubjectTable from "./SubjectTable";
import Valedictory from "../../../../assets/valedictory.jpg";

import {
  juniorSubjects,
  scienceSubjects,
  socialScienceSubjects,
  artsSubjects,
} from "./SubjectTableData";
import Pic from "../image";
import Icofont from "react-icofont";

function Module() {
  const { data, cols, bordered, hoverable, striped, isDark } = juniorSubjects(); //for when the component would be rendered just once on the page
  const core = scienceSubjects();
  const social = socialScienceSubjects();
  const art = artsSubjects();
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
          </div>
          <div className="col-md-1">&nbsp;</div>
          <div className="create col-md-2 ">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/learn/early-years"}>Infant School</Link>
                </li>
                <li>
                  <Link to={"/learn/primary_school"}> Primary</Link>
                </li>

                <li>
                  <Link to={"/learn/secondary_school"}>College</Link>
                </li>

                <li>
                  <Link className="active" to={"/learn/school_module"}>
                    Curriculum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 flexy ">
          <div className="col-md-6">
            <img src={Chess} alt="Header" className="img-fluid" />
          </div>
          {/* <div className="col-md-1">&nbsp;</div> */}
          <div className="col-md-6 col-12 ml">
            <h3>Junior Secondary</h3>
            <SubjectTable
              cols={cols}
              data={data}
              isDark={isDark}
              bordered={bordered}
              striped={striped}
              hoverable={hoverable}
            />
          </div>
        </div>
        <div className="col-md-12" style={{ marginTop: "200px" }}>
          <h1>Senior Secondary School (SSS)</h1>

          <p style={{ fontSize: "19px" }}>
            Students may choose either the National (WASSCE) or the
            International (Cambridge GCE O level) curriculum. They will also
            have to make a well guided choice between 3 different subject
            majors: Science, Social Science and Arts.
          </p>
        </div>
        <div className="col-md-12 flexy" style={{ marginTop: "80px" }}>
          <div className="col-md-6 col-12 ml">
            <h3>SCIENCE SUBJECTS </h3>
            <SubjectTable
              cols={core.cols}
              data={core.data}
              isDark={core.isDark}
              bordered={core.bordered}
              striped={core.striped}
              hoverable={core.hoverable}
            />
          </div>
          {/* <div className="col-md-2">&nbsp;</div> */}

          <div className="col-md-6 col-12 ml">
            <h3>SOCIAL SCIENCE SUBJECTS </h3>
            <SubjectTable
              cols={social.cols}
              data={social.data}
              isDark={social.isDark}
              bordered={social.bordered}
              striped={social.striped}
              hoverable={social.hoverable}
            />
          </div>
        </div>
        <div className="col-md-12 flexy " style={{ marginTop: "150px" }}>
          <div className="col-md-6">
            <img src={Valedictory} alt="Header" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12 ">
            <h3>ART SUBJECTS </h3>
            <SubjectTable
              cols={art.cols}
              data={art.data}
              isDark={art.isDark}
              bordered={art.bordered}
              striped={art.striped}
              hoverable={art.hoverable}
            />
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
