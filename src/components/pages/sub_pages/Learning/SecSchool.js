import React from 'react'
import Pex from "../../../../assets/mask3.png";
import Icon from "../../../../assets/niceicon.png";
import DotIcon from "../../../../assets/dot.png";

import Exam from "../../../../assets/examstudents4.png";
import Chess from "../../../../assets/valedictory.jpg";
import Casual from "../../../../assets/casual.png";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Icofont from "react-icofont";

import SubjectTable from './SubjectTable';
import {
  juniorSubjects,
  scienceSubjects,
  socialScienceSubjects,
  artsSubjects,
} from "./SubjectTableData";
import Pic from '../image';




function SecSchool() {
  const {data, cols, bordered, hoverable, striped, isDark }= juniorSubjects()//for when the component would be rendered just once on the page
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
          <div className="intro col-md-9 sen sec">
            <header>Evergreen College</header>

            <h4>Senior School [grade 10 – grade 12] (15 – 17 years)</h4>
            <p>
              Evergreen College is built upon a futuristic mindset which seeks
              to empower learners with competencies that will enable them take
              on our ever dynamic world. Academic work in Evergreen College is
              based on a sublime blend of the Cambridge Curriculum and the
              Nigerian National Curriculum, driven by the Thinking School
              philosophy (Thinking Matters, University of Exeter, United
              Kingdom). <br />
              <br />
              <strong>
                The Cambridge Curriculum offers the following benefits:
              </strong>
            </p>
          </div>
          {/* <div className="col-md-1">&nbsp;</div> */}
          <div className="create col-md-3 ">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/learn/early-years"}>Early Years</Link>
                </li>
                <li>
                  <Link to={"/learn/primary_school"}> Primary</Link>
                </li>

                <li>
                  <Link className="active" to={"/learn/secondary_school"}>
                    College
                  </Link>
                </li>

                <li>
                  <Link to={"/learn/school_module"}>Curriculum</Link>
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
            <ol className="list-unstyled">
              <li>
                <img src={Icon} alt="Header" className="img-fluid icon" />
                It simplifies the teacher’s work by providing access to teaching
                aids and classroom activities thus deepening and enriching the
                learner’s experience.
              </li>
              <li>
                <img src={Icon} alt="Header" className="img-fluid icon" />
                Offers assessments that both prove and improve learners.
              </li>
              <li>
                <img src={Icon} alt="Header" className="img-fluid icon" />
                It can elicit entrepreneurial mindset in learners.
              </li>
              <li>
                <img src={Icon} alt="Header" className="img-fluid icon" />
                The core skills contained in it help both learners and teachers
                to become creative, analytic, innovative, reflective and
                responsible.
              </li>
              <li>
                <img src={Icon} alt="Header" className="img-fluid icon" />
                It prepares learners for life by equipping them for now and
                transiting them seamlessly into the future.
              </li>
              <li>
                <img src={Icon} alt="Header" className="img-fluid icon" />
                Through differentiated learning and assessment, irrespective of
                learners’ performance levels, every child has the feeling of an
                academic champion.
              </li>
              Mock exams start as early as one year or more before any final
              exam
            </ol>
            <ul className="list-unstyled">
              <li>
                <img src={DotIcon} alt="Header" className="img-fluid icon2" />
                Which university is best suited for my child?
              </li>
              <li>
                <img src={DotIcon} alt="Header" className="img-fluid icon2" />
                How do I start the university application?{" "}
              </li>
              <li>
                <img src={DotIcon} alt="Header" className="img-fluid icon2" />
                How can I access scholarships?
              </li>
              <li>
                <img src={DotIcon} alt="Header" className="img-fluid icon2" />
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
            The Nigerian National Curriculum offers local content which provides
            an introspective experience and an understanding for the learner, of
            the immediate environment by providing a local context to a global
            experience.
          </p>
          <p>
            Evergreen College comprises the Junior Secondary School (JSS) and
            the Senior Secondary School (SSS)
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

        <div className="flexy evergreen-facts">
          <div className="col-md-6">
            <img src={Chess} alt="Header" className="img-fluid" />
          </div>
          <div className="col-md-6 ml evergreen-facts">
            <h4>QUICK FACTS ABOUT EVERGREEN COLLEGE</h4>
            <ol>
              <li>
                It is a FAITH based school. We believe in the birth, death and
                resurrection of our Lord Jesus Christ. Based on this foundation,
                children will be groomed to understand their Christian faith and
                be morally upright.
              </li>
              <li>
                Evergreen College uses Cambridge and Nigerian curricula. The
                children will be exposed to examinations like Cambridge
                Checkpoint, BECE and NECO in grade 9, while they will be exposed
                to IGCSE in grade 11, WAEC and SAT in grade 12.
              </li>
              <li>
                Evergreen College has a NO MIDSTREAM ADMISSION policy. What this
                means is that the school will not accept students on transfer.
              </li>
              <li>
                Evergreen College is a day and boarding school but our boarding
                facilities are yet to be completely ready, once ready, any child
                who wants to board will board.
              </li>
              <li>The teachers are Cambridge trained and certified.</li>
              <li>
                Evergreen College has a rich, planned and structured pathway to
                university applications. This pathway will be a huge relief to
                parents because they will be ridden by the stress of
                contemplating:
                <ul>
                  <li>Which university is best suited for my child?</li>
                  <li>How do I start the university application? </li>
                  <li>How can I access scholarships?</li>
                  <li>
                    What are Ivy League colleges looking out for in
                    applications?
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        <p style={{fontSize:'19px'}}>
          This is the school’s Unique Selling Point (USP). The solutions to the
          above questions will be delivered through this USP by engaging our
          training and consulting program tagged, "The pathway". In this
          program, our children will be exposed to all the activities that will
          build their profile and portfolio like Passion Projects, Volunteering,
          Internships, Charity Work, etc.
        </p>
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
        {/* <Pic /> */}
      </section>
    </>
  );
}

export default SecSchool