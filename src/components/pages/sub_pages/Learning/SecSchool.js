import React from 'react'
import Pex from "../../../../assets/happykids.png";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
import Exam from "../../../../assets/examstudents4.png";
import Chess from "../../../../assets/chess2.png";
import Casual from "../../../../assets/casual.png";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Icofont from "react-icofont";
import Subject from "./Subject";
import SeniorSub from "./SeniorSub";
import WassceSub from "./WassceSub";

function SecSchool() {
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
        <CBreadcrumbItem active>Junior Primary</CBreadcrumbItem>
      </CBreadcrumb>
      <section className="container">
        <div className="comments col-md-12 flexy">
          <div className="intro col-md-9 sen sec">
            <small>Learning </small>
            <header>Evergreen College</header>

            <h4>Senior School [grade 10 – grade 12] (15 – 17 years)</h4>
            <p>
              Evergreen College is built upon a futuristic mindset which seeks
              to empower learners with competencies that will enable them take
              on our ever dynamic world.. Therefore, we offer the best of
              national and international curricula with a broad range of
              subjects and options to achieve academic breadth and to provide a
              springboard for A level school and University admissions.
              Evergreen College comprises the Junior Secondary School (JSS) and
              the Senior Secondary School (SSS)
            </p>
          </div>
          {/* <div className="col-md-1">&nbsp;</div> */}
          <div className="create col-md-3 ">
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

        <div className="col-md-12 flexy mov toop">
          <div className="col-md-6">
            <img src={Casual} alt="Header" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <ol>
              <li>
                {" "}
                It is a FAITH based school. We believe in the birth, death and
                resurrection of our Lord Jesus Christ. Based on this foundation,
                children will be groomed to understand their Christian faith and
                be morally upright.
              </li>
              <li>
                Evergreen College uses Cambridge and Nigerian curricula. The
                children will be exposed to examinations like Cambridge
                Checkpoint, BECE and NECO in grade 9, while they will be exposed
                to IGCSE, WAEC, and SAT in grade 12.
              </li>
              <li>
                Evergreen College has a NO MIDSTREAM policy. What this means is
                that the school will not accept students on transfer.
              </li>
              <li>
                Evergreen College is a full boarding school that is starting off
                like a day school because the boarding facility is not ready.
                Once ready, every child MUST board.
              </li>
              <li>The teachers are Cambridge trained and certified.</li>
              <li>
                Evergreen College has a rich, planned and structured pathway to
                university applications. This pathway will be a huge relief to
                parents because they will be ridden by the stress of
                contemplating:
              </li>
            </ol>
            <ul>
              <li>Which university is best suited for my child?</li>
              <li>How do I start the university application? </li>
              <li>How can I access scholarships?</li>
              <li>
                What are Ivy League colleges looking out for in applications?
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-md-12"
          style={{ lineHeight: "30px", fontSize: "19px" }}
        >
          <p>
            This is the school’s Unique Selling Point (USP). The solutions to
            the above questions will be delivered through this USP by engaging
            our training and consulting program tagged, "The pathway". In this
            program, our children will be exposed to all the activities that
            will build their profile and portfolio like Passion Projects,
            Volunteering, Internships, Charity Work, etc.
          </p>
        </div>
        <div className="col-md-12  sec flexy" style={{ marginTop: "150px" }}>
          <div className="col-md-6">
            <h3>Junior Secondary School (JSS)</h3>
            <p>
              The school adopts a uniquely integrated approach in its academic
              content, combining both Nigerian and British curricula (Cambridge
              Checkpoint & KS3). The Cambridge Checkpoint is a final assessment
              given to Key Stage 3 pupils or ninth graders/JSS3. This
              examination is conducted by the University of Cambridge and has
              international recognition and endorsement. The students will also
              sit for the BECE and NECO at the end of grade 9/JSS 3. All
              students from JSS 1 to 2 (grade 7-8) are required to do all the
              foundational subjects listed below. However in JSS 3 (grade 9)
              excluding the core subjects, students will have the option of
              electives.
            </p>
          </div>
          <div className="col-md-6">
            <img src={Exam} alt="Header" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-12 flexy " style={{ marginTop: "180px" }}>
          <div className="col-md-6">
            <img src={Chess} alt="Header" className="img-fluid" />
          </div>
          {/* <div className="col-md-1">&nbsp;</div> */}
          <div className="col-md-6 col-12 ml">
            <Subject />
          </div>
        </div>

        <div className="col-md-12" style={{marginTop:'200px'}}>
          <h1>Senior Secondary School (SSS)</h1>

          <p>
            Students may choose either the National (WASSCE) or the
            International (Cambridge GCE O level) curriculum. They will also
            have to make a well guided choice between 3 different subject
            majors: Science, Social Science and Arts.
          </p>
        </div>

        <div className="col-md-12 flexy" style={{ marginTop: "80px" }}>
          <div className="col-md-6 col-12 ml">
            <h3>CAMBRIDGE SCIENCE SUBJECTS </h3>

            <SeniorSub />
          </div>
          {/* <div className="col-md-2">&nbsp;</div> */}

          <div className="col-md-6 col-12 ml">
            <h3>WASSCE SCIENCE SUBJECTS </h3>

            <WassceSub />
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

export default SecSchool