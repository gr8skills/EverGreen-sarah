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
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/about/administrators-message">
          About
        </CBreadcrumbItem>
        <CBreadcrumbItem active>History of the School</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>About </small>
            <header>History of the School</header>
          </div>
          <div className=" create">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about/administrators-message"}>
                    History of the School
                  </Link>
                </li>
                <li>
                  <Link className="active" to={"/about/proprietors-message"}>
                    About Evergreen
                  </Link>
                </li>
                <li>
                  <Link to={"/about/history"}>History Of The School</Link>
                </li>
                <li>
                  <Link to={"contact-us"}>Parents-code-of conduct</Link>
                </li>

                <li>
                  <Link to={"contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <img src={Rev} alt="" className="principals-img" />

            <p style={{ padding: "0", margin: "0" }}>HIS EARLY LIFE:</p>
            <p style={{ paddingTop: "0", margin: "0" }}>
              Monday, 1st day of June 1959 was a day of great joy in the family
              of Gregory Obasola and Victoria Oluremi Martins (both of blessed
              memory). That day witnessed the birth of their third child, the
              second son of the family. He was christened Alfred Anthony
              Adewale. His parents who were both teachers hailed from Ake and
              ljemo in Abeokuta South Local Government Area of Ogun State. The
              young Alfred Martins had his primary education at St. Augustine
              Roman Catholic Mission School, ltesi.{" "}
            </p>

            <p>
              under the auspices of the ‘Archdiocese of Lagos. He was therefore
              admitted to the Seminary of SS. Peter and Paul, Bodija, lbadan in
              1976. While in the seminary, he bagged a Diploma in Religious
              Studies from the University of Ibadan in 1978 and a Bachelor’s
              degree in Theology from the Pontifical Urban University, Rome in
              1983. In the classroom, the young seminarian Alfred showed great
              maturity in learning, with a quiet, reflective mien, which made
              him every lecturer’s delight. On the field of play, he exhibited
              great skills in the game of basketball. In prayer and liturgy he
              showed great disposition for positive growth, and his
              interpersonal relationship was excellent. Owing to these
              resounding good qualities cum leadership skills, he won the
              confidence of the formation team and was appointed the Senior
              Prefect, a primus inter pares for the 1982/1983 academic session,
              and graduated with first-class honors in his Bachelor of Theology
              degree examinations. Having fulfilled the requirements, he was
              ordained a deacon at the Holy Cross Cathedral, Lagos on the 18th
              of September, 1983 with seven of his classmates popularly known as
              “the class of eight” by His Grace, Most Revd. Anthony Olubunmi
              Okogie.
            </p>
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
              Monday, 1st day of June 1959 was a day of great joy in the family
              of Gregory Obasola and Victoria Oluremi Martins (both of blessed
              memory). That day witnessed the birth of their third child, the
              second son of the family. He was christened Alfred Anthony
              Adewale. His parents who were both teachers hailed from Ake and
              ljemo in Abeokuta South Local Government Area of Ogun State. The
              young Alfred Martins had his primary education at St. Augustine
              Roman Catholic Mission School, ltesi Monday, 1st day of June 1959
              was a day of great joy in the family of Gregory Obasola and
              Victoria Oluremi Martins (both of blessed memory). That day
              witnessed the birth of their third child, the second son of the
              family. He was christened Alfred Anthony Adewale. His parents who
              were both teachers hailed from Ake and ljemo in Abeokuta South
              Local Government Area of Ogun State. The young Alfred Martins had
              his primary education at St. Augustine Roman Catholic Mission
              School, ltesi{" "}
            </p>{" "}
          </div>

          <div className="col-md-6">
            {" "}
            <img src={Stage} alt="Header" className="img-fluid" />
          </div>
        </div>
        <div
          className="col-md-12"
          style={{ lineHeight: "35px" }}
        >
          <p>
            Monday, 1st day of June 1959 was a day of great joy in the family of
            Gregory Obasola and Victoria Oluremi Martins (both of blessed
            memory). That day witnessed the birth of their third child, the
            second son of the family. He was christened Alfred Anthony Adewale.
            His parents who were both teachers hailed from Ake and ljemo in
            Abeokuta South Local Government Area of Ogun State. The young Alfred
            Martins had his primary education at St. Augustine Roman Catholic
            Mission School, ltesi Monday, 1st day of June 1959 was a day of
            great joy in the family of Gregory Obasola and Victoria Oluremi
            Martins (both of blessed memory). That day witnessed the birth of
            their third child, the second son of the family. He was christened
            Alfred Anthony Adewale. His parents who were both teachers hailed
            from Ake and ljemo in Abeokuta South Local Government Area of Ogun
            State. The young Alfred Martins had his primary education at St.
            Augustine Roman Catholic Mission School, ltesi{" "}
          </p>{" "}
        </div>
      </section>
    </>
  );
}

export default HumanResources;
