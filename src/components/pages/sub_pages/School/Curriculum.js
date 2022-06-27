import React from 'react'
import Pex from "../../../../assets/draw2.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import Rev from "../../../../assets/party.png";
import Pray from "../../../../assets/mofty2.png";
import Arts from "../../../../assets/recycle3.png";
import Leadership from "../../../../assets/champ2.png";
import Activities from "../../../../assets/hood2.png";
import Xmas from "../../../../assets/maime.png";
import Academics from "../../../../assets/examstudents4.png";
import Sing from "../../../../assets/sing.png";
import Sing2 from "../../../../assets/act2.png";
import Zoo from "../../../../assets/zoo2.png";

function Curriculum() {
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
        <CBreadcrumbItem active>Student Life</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>HOME </small>
            <header>Student Life</header>
          </div>
          <div className="create">
            <h5 className="shift">Sportsmanship.Community. Camaraderie.</h5>

            <p>
              When our students describe their Evergreen School experience,
              these words emerge first and foremost—and they stem in large part
              from opportunities to learn and grow outside the classroom. On any
              given day, Evergreen School's historic hallways hum as students
              participate in a wide range of activities where they are
              encouraged to pursue their individual interests, develop their
              diverse talents, and remain open to growth as they become lifelong
              learners.
            </p>
            <div className="hideAcc">
              <ul className="col-md-12 ">
                <h2 className="accTitle">Annual Student Traditions</h2>

                <input type="checkbox" id="title1" className="hideI"/>
                <label for="title1">
                  Evergreen School Thanksgiving & Young Alumni Luncheon
                </label>

                <div className="content flexy col-md-12">
                  <div className="col-md-4">
                    {" "}
                    <img src={Rev} alt="" className="house-img accImg" />
                  </div>
                  <p classname="col-md-7">
                    Thanksgiving at Evergreen School as one of the school’s
                    longstanding traditions—gives students, faculty, staff, and
                    alumni alike one of the fullest Evergreen School experiences
                    possible. On this day, the community gathers for a
                    celebratory Service, homeroom parties, an alumni luncheon,
                    and a massive community service rally.
                  </p>
                </div>

                <input type="checkbox" id="title2" className="hide"/>
                <label for="title2">Retreats</label>

                <div className="content flexy col-md-12">
                  <p classname="col-md-7">
                    Students get to immerse themselves in even more formative
                    experiences on Evergreen School's myriad retreat offerings
                    on and off 16th Street. Across all six years,Students of
                    Evergreen embark on the Freshman Retreat, Easter Retreat,
                    and a host of others—experiencing prayer, reflection,
                    companionship, and God’s love and forgiveness.
                  </p>
                  <div className="col-md-4">
                    {" "}
                    <img src={Pray} alt="" className="house-img accImg" />
                  </div>
                </div>

                <input type="checkbox" id="title3" className="hide"/>
                <label for="title3" className="">
                  Christmas At Evergreen School
                </label>

                <div className="content flexy col-md-12">
                  <div className="col-md-4">
                    {" "}
                    <img src={Xmas} alt="" className="house-img accImg" />
                  </div>
                  <p classname="col-md-7">
                    The holiday celebrations continue at Christmas at Evergreen
                    School—a day the community gathers to participate in a
                    beautiful Service in The School Chapel, sing Christmas
                    Carols, watch Christmas classics with their homerooms, and
                    spread overwhelming Christmas cheer and excitement to one
                    another through the halls. The day serves as a delightfully
                    holly, jolly sendoff to students before their Christmas
                    break.
                  </p>
                </div>

                <input type="checkbox" id="title4" className="hide"/>
                <label for="title4" className="">
                  Charity
                </label>

                <div className="content flexy col-md-12">
                  <p classname="col-md-7">
                    It is usually an exciting experience as students and
                    management of Evergreen School embark on charity work- A
                    move set up by the school in order to find an avenue to give
                    back to the community, help the needy around us and
                    inculcate in our students the life long virtue of rendering
                    help and benevolence.
                  </p>
                  <div className="col-md-4">
                    {" "}
                    <img src={Pray} alt="" className="house-img accImg" />
                  </div>
                </div>
              </ul>

              <ul className="col-md-12">
                <h2 className="accTitle">Clubs & Activities</h2>

                <input type="checkbox" id="title5" className="hide"/>
                <label for="title5">Activities</label>

                <div className="content flexy col-md-12">
                  <div className="col-md-5">
                    {" "}
                    <img src={Activities} alt="" className="house-img accImg" />
                  </div>
                  <div className="col-md-4">&nbsp;</div>

                  <ul classname="col-md-3">
                    <li>Birding Club</li>
                    <li>Board Game Club</li>

                    <li>Boxing Club</li>

                    <li>Chess Club</li>

                    <li>Culinary Club</li>
                    <li>Sports Club</li>

                    <li>Paintball Club</li>

                    <li>Science Club</li>
                  </ul>
                </div>

                <input type="checkbox" id="title6" className="hide"/>
                <label for="title6">Academic & Competition CLub</label>

                <div className="content flexy col-md-12">
                  <ul classname="col-md-3">
                    <li>Engineering Club</li>
                    <li>League of Computer Scientists</li>

                    <li>Math Club</li>

                    <li>Medical Science Club</li>

                    <li>Microfinance Club</li>
                    <li>National Junior Classical League</li>

                    <li>Philosophy and Ethics Club</li>

                    <li>Speech and Debate</li>
                  </ul>

                  <div className="col-md-4">&nbsp;</div>

                  <div className="col-md-5">
                    {" "}
                    <img src={Academics} alt="" className="house-img accImg" />
                  </div>
                </div>

                <input type="checkbox" id="title7" className="hide"/>
                <label for="title7" className="">
                  Leadership Clubs
                </label>

                <div className="content flexy col-md-12">
                  <div className="col-md-5">
                    {" "}
                    <img src={Leadership} alt="" className="house-img accImg" />
                  </div>
                  <div className="col-md-4">&nbsp;</div>

                  <ul classname="col-md-3">
                    <li>Academic and Leadership Team</li>
                    <li>Student Alumni Ambassadors</li>

                    <li>Student Leadership Council</li>
                  </ul>
                </div>

                <input type="checkbox" id="title8" className="hide"/>
                <label for="title8" className="">
                  Production, Arts & Performance
                </label>

                <div className="content flexy col-md-12">
                  <ul classname="col-md-3">
                    <li>Book Club</li>
                    <li>Cultural Arts Club</li>

                    <li>Dramatics Society</li>

                    <li>Film Club</li>

                    <li>Freshman Drama</li>
                    <li>Lexicon</li>

                    <li>Photography Club</li>

                    <li>Podcast Club</li>
                    <li>Poetry Club</li>
                  </ul>

                  <div className="col-md-4">&nbsp;</div>

                  <div className="col-md-5">
                    {" "}
                    <img src={Arts} alt="" className="house-img accImg" />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy">
          <div className="col-md-4">
            {" "}
            <img src={Xmas} alt="" className="house-img accImg" />
          </div>

          <div className="col-md-4">
            {" "}
            <img src={Zoo} alt="" className="house-img accImg" />
          </div>

          <div className="col-md-4">
            {" "}
            <img src={Sing2} alt="" className="house-img accImg" />
          </div>
        </div>
      </section>

      <div className=" webhide">
        <div className="col-12">
          <h2 className="accTitle">Annual Student Traditions</h2>
          <h5> Evergreen School Thanksgiving & Young Alumni Luncheon</h5>
          <img src={Rev} alt="" className="house-img accImg" />
          Thanksgiving at Evergreen School as one of the school’s longstanding
          traditions—gives students, faculty, staff, and alumni alike one of the
          fullest Evergreen School experiences possible. On this day, the
          community gathers for a celebratory Service, homeroom parties, an
          alumni luncheon, and a massive community service rally.
        </div>

        <div className="col-12">
          <h5>Retreats</h5>
          <img src={Pray} alt="" className="house-img accImg" />
          <p>
            {" "}
            Students get to immerse themselves in even more formative
            experiences on Evergreen School's myriad retreat offerings on and
            off 16th Street. Across all six years,Students of Evergreen embark
            on the Freshman Retreat, Easter Retreat, and a host of
            others—experiencing prayer, reflection, companionship, and God’s
            love and forgiveness.
          </p>
        </div>

        <div className="col-md-12">
          <h5>Christmas At Evergreen School</h5>
          <div>
            {" "}
            <img src={Xmas} alt="" className="house-img accImg" />
          </div>
          <p>
            The holiday celebrations continue at Christmas at Evergreen School—a
            day the community gathers to participate in a beautiful Service in
            The School Chapel, sing Christmas Carols, watch Christmas classics
            with their homerooms, and spread overwhelming Christmas cheer and
            excitement to one another through the halls. The day serves as a
            delightfully holly, jolly sendoff to students before their Christmas
            break.
          </p>
        </div>

        <div className="col-md-12">
          <h5 className="">Charity</h5>
          <p>
            It is usually an exciting experience as students and management of
            Evergreen School embark on charity work- A move set up by the school
            in order to find an avenue to give back to the community, help the
            needy around us and inculcate in our students the life long virtue
            of rendering help and benevolence.
          </p>
          <div>
            {" "}
            <img src={Pray} alt="" className="house-img accImg" />
          </div>
        </div>

        <div className=" col-md-12">
          <h2 className="accTitle">Clubs & Activities</h2>

          <h5 for="title5">Activities</h5>

          <div>
            {" "}
            <img src={Activities} alt="" className="house-img accImg" />
          </div>

          <ul classname="col-md-12">
            <li>Birding Club</li>
            <li>Board Game Club</li>

            <li>Boxing Club</li>

            <li>Chess Club</li>

            <li>Culinary Club</li>
            <li>Sports Club</li>

            <li>Paintball Club</li>

            <li>Science Club</li>
          </ul>
        </div>

        <div className="col-md-12">
          <h5 for="title6">Academic & Competition CLub</h5>

          <ul classname="col-md-12">
            <li>Engineering Club</li>
            <li>League of Computer Scientists</li>

            <li>Math Club</li>

            <li>Medical Science Club</li>

            <li>Microfinance Club</li>
            <li>National Junior Classical League</li>

            <li>Philosophy and Ethics Club</li>

            <li>Speech and Debate</li>
          </ul>

          <div className="col-md-4">&nbsp;</div>

          <div className="col-md-5">
            {" "}
            <img src={Academics} alt="" className="house-img accImg" />
          </div>

          <div className="content flexy col-md-12">
            <h5>Leadership Clubs</h5>
            <div>
              {" "}
              <img src={Leadership} alt="" className="house-img accImg" />
            </div>

            <ul classname="col-md-12">
              <li>Academic and Leadership Team</li>
              <li>Student Alumni Ambassadors</li>

              <li>Student Leadership Council</li>
            </ul>
          </div>
        </div>

        <div className=" col-md-12">
          <h5>Production, Arts & Performance</h5>
          <ul classname="col-md-12">
            <li>Book Club</li>
            <li>Cultural Arts Club</li>

            <li>Dramatics Society</li>

            <li>Film Club</li>

            <li>Freshman Drama</li>
            <li>Lexicon</li>

            <li>Photography Club</li>

            <li>Podcast Club</li>
            <li>Poetry Club</li>
          </ul>

          <div>
            {" "}
            <img src={Arts} alt="" className="house-img accImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Curriculum