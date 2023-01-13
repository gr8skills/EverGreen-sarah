import React from "react";
import Pex from "../../../../assets/examstudents2.png";
import Rev from "../../../../assets/admin.png";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
import { Link } from "react-router-dom";
import Chess from "../../../../assets/chess2.png";
import Exam from "../../../../assets/examstudents4.png";
import Stage from "../../../../assets/stage4.png";

import "./Style.css";

function HumanResources() {
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
           
            <header>Proprietor's message</header>
          </div>
          <div className=" create">
            <div className="sub-cover">
              <ul className="sub-menu">
                {/* <li>
                  <Link to={"/"}>Home</Link>
                </li> */}
                <li>
                  <Link to={"/about/administrators-message"}>
                    Welcome Address
                  </Link>
                </li>
                <li>
                  <Link  to={"/about/proprietors-message"} className="active">
                    Proprietor’s message
                  </Link>
                </li>
                {/* <li>
                  <Link className="active" to={"/about/history"}>
                    History Of The School
                  </Link>
                </li> */}
                <li>
                  <Link to={"Conduct"}>Parents' code-of-conduct</Link>
                </li>

                <li>
                  <Link to={"contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <img src={Rev} alt="" className="principals-img" />
            <div style={{ marginTop: "40px"}}>
              <p style={{ paddingTop: "10px", margin: "0", fontSize: "16px", fontWeight: "bold" }}>Welcome to Evergreen. <br />Always Evergreen…</p><br />
              <p style={{ paddingTop: "0", margin: "0" }}>
              No meaningful milestone is achieved without deliberate and conscientious effort. This has been the truth behind the Evergreen Schools you see today. I am especially excited as we turn 10 because this institution now stands taller than most others. We have become a positive reference point and an influential brand crafted from the mountainous challenges we have had to surmount along the way through God's mercy, favour, and guidance.{" "}
              </p>

              <p>
              We were not always shining stars; we had a humble beginning. Evergreen Schools began as an idea born from the burden to provide a solution-oriented approach to learning. The challenge of how to resolve learning difficulties in children, leading to all-around transformation, was the question Evergreen Schools had to answer. Soon it was time to rise up to this challenge.
              </p>
              <p>
              On the 12th of September 2012, after putting the things we needed to start in place, we opened our doors to our first set of pupils. We didn’t get top-of-the-shelf scholars, no. We had the academically and behaviourally challenged. These precious children pushed us to invent and innovate (attributes which have now become a trademark of Evergreen Schools). Slowly but surely, these diamonds in the rough were transformed into priceless Jewels. It soon became the word on the street that there now exists a school that can turn hopeless cases into resounding testimonies of success. More came in, each new child offering us a new vista to explore, as we continued in our venture to restore hope and put a smile on their parents' faces.
            </p>
            </div>
          </div>
        </div>

        <div className="flexy col-md-12">
          <div className="col-md-6">
            <img src={Chess} alt="Header" className="img-fluid" />
          </div>

          <div className="col-md-6">
            {" "}
            <img src={Exam} alt="Header" className="img-fluid" />
          </div>
        </div>

        <div
          className="flexy col-md-12"
          style={{ marginTop: "40px", lineHeight: "35px" }}
        >
          <div className="col-md-6">
            <p>
            It has now been 10 years since we have been transforming children from crawlers to fliers. We have consistently produced pupils who have been awarded scholarships valued at tens of millions of naira into top flight schools like Loyola Jesuit, James Hope College and Adorable British College, Lifeforte International School, to mention a few. We have also produced superlative performers in the Annual National Mathematics Competition organized by the Nigerian Tulip International College (NTIC) and the National Mathematical Center (NMC). The 19th edition which held earlier in the year saw our representatives take up the first six positions in the state in 2022. 
              {" "}
            </p>{" "}
          </div>

          <div className="col-md-6">
            {" "}
            <img src={Stage} alt="Header" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-12" style={{ lineHeight: "35px" }}>
          <p>
          The last 10 years have seen Evergreen Schools develop into a 21st century school. The lockdown due to the COVID-19 pandemic in 2020 was a spring board in this development, bringing us into digitization of learning and management operations; our school portal enabled us to continue to run remotely. Our biggest step yet is our journey to certification as a Thinking School by Thinking Matters, University of Exeter, United Kingdom, and certification as a Christian School by the Association of Christian Schools International (ACSI), a body of which we are now a member. To usher in the next dispensation for us are the establishments of Evergreen College and Evergreen Consult. The vision continues to grow indeed!{" "}
          <br />
          We are grateful to God for all the results we have produced and how well we have developed so far. 
          </p>{" "}
          <p>
          At Evergreen we continue to insist that no meaningful progress can be made without steady improvements. We will always celebrate resilience, doggedness, positivity, adventure, excellence and the true spirit of freshness in our staff, learners and clients. 
          </p>
        </div>
      </section>
    </>
  );
}

export default HumanResources;
