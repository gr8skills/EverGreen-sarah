import React from 'react';
import Pex from "../../../../assets/stage.png";
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Icofont from "react-icofont";
import Scholar from "../../../../assets/mask2.png";
import CODE from "../../../../assets/CODE.pdf";
import Exam from "../../../../assets/examstudents3.png";
import Mask from "../../../../assets/mask3.png";


function Apply() {
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
        <CBreadcrumbItem href="/academics/how_to_apply">
          Admission
        </CBreadcrumbItem>
        <CBreadcrumbItem active>How to Apply</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>ABOUT </small>
            <header>CODE OF CONDUCT</header>
          </div>
          <div className="create">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about/administrators-message"}>
                    Administrator’s Message
                  </Link>
                </li>
                <li>
                  <Link to={"/about/proprietors-message"}>
                    Proprietor’s Message
                  </Link>
                </li>
                <li>
                  <Link to={"/about/history"}>History Of The School</Link>
                </li>
                <li>
                  <Link className="active" to={"/about/Conduct"}>
                    Parents Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link to={"contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="conduct col-md-12">
              <p>
                At Evergreen Schools, our principles of child-centered learning,
                track record of excellence, strong moral, and atmosphere of
                mutual respect, define the culture that guides every member of
                the Evergreen family. It is therefore expected that every member
                of this family will behave in an exemplary manner by adhering to
                the rules and maintaining mutual respect. Below is a summary of
                our guiding principles (to which parents and pupils are expected
                to comply):
              </p>

              <h3>BEHAVIOUR MANAGEMENT</h3>
              <p>
                {" "}
                At Evergreen schools we believe that every pupil has a right to
                learn in a safe structured and disciplined environment. No child
                has the right to disrupt the learning process of others. Our
                behavior management procedures seek to reflect this and always
                ensure that children take responsibility for their own learning
                and conduct.
                <br />
                <br />
                We expect every parent to play a part in ensuring that our
                pupils grow up to become positive members of the society.
              </p>

              <h3>DISCIPLINARY MEASURES</h3>
              <p>
                {" "}
                Pupils are expected to be at their best behavior at all times.
                Evergreen School reserves the right to discipline, suspend or
                expel any pupil in the event of misbehavior, at any time and at
                the school’s discretion. .
              </p>

              <h3>BULLYING POLICY</h3>
              <p>
                {" "}
                • Bullying is an action or repeated number of actions causing
                physical/emotional harm to people or relationships. This
                behavior could be intentional or unintentional. .
                <br />
                <br />
                Bullying can include: name calling, taunting, mocking, kicking,
                hitting, extortion, sending offensive or inappropriate
                messages/photos/videos e.t.c. All acts of bullying (physical,
                emotional, verbal and cyber) are considered taboo in Evergreen
                Schools. If a child is involved in the act of bullying, the
                following disciplinary steps will be enforced:
              </p>

              <h3>Disciplinary measures (Bullying)</h3>
              <p>
                {" "}
                The first time a pupil is reported to be involved in the act of
                bullying, the child will proceed on suspension (the duration is
                at the School’s discretion). If after the suspension, the child
                still gets involved in the act, the child will be expelled from
                school.
              </p>

              <h3>INDECENT TOUCH/IMMORAL ACT</h3>

              <p>
                {" "}
                • Indecent touch/immoral act refers to inappropriate touching/
                contact that makes a child uneasy, afraid, sad, ashamed and
                embarrassed.
                <br />
                <br />
                Every child is expected to respect the space of others. If a
                pupil is reported to touch another pupil indecently, the
                following disciplinary steps will be enforced:
              </p>

              <h3>Disciplinary measures (Indecent touch/Immoral act)</h3>
              <p>
                {" "}
                • The first time a pupil is reported to touch another child
                indecently or be involved in an immoral act, the child will
                proceed on suspension (the duration is at the School’s
                discretion).
                <br />• If after the suspension, the child still gets involved
                in the act, the child will be expelled from school.
              </p>

              <h3>STEALING</h3>
              <p>
                • Stealing is the act of taking another person’s property
                without permission either secretly or by extortion. <br />
                Pupils are expected to ask and receive permission from the
                owners before taking what doesn’t belong to them. <br />
                If a child is reported to be involved in the act of stealing,
                the following disciplinary steps will be enforced:
              </p>

              <h3>Disciplinary measures (Stealing)</h3>

              <p>
                {" "}
                • The first time a pupil is reported to be involved in the act
                of stealing, the child will proceed on suspension (the duration
                is at the School’s discretion). <br />• If after the suspension,
                the child still gets involved in the act, the child will be
                expelled from school.
              </p>

              <h3>EXAMINATION MALPRACTICE POLICY</h3>

              <p>
                {" "}
                • Examination malpractice is any form of deliberate cheating on
                examinations which provides one or more candidate with an unfair
                advantage.
                <br />
                Pupils are expected to study and take their exams confidently
                without cheating otherwise, the following disciplinary steps
                will be enforced:
              </p>

              <h3>Disciplinary measures (Examination Malpractice)</h3>

              <p>
                {" "}
                • The first time a pupil is reported to be involved in the act
                of examination malpractice, the child will proceed on suspension
                (the duration is at the School’s discretion). • If after the
                suspension, the child still gets involved in the act, the child
                will be expelled from school.
              </p>
            </div>

            <div className="col-md-12 flexy">
              <div className="col-md-7">
                <h3 style={{ marginTop: "40px" }}>PROHIBITED ITEMS</h3>

                <p>
                  {" "}
                  • Mobile phones, Ipods, Ipads, electronic games, smart watches
                  and other electronic devices are prohibited. If and When these
                  items are required in school for educational purposes, parents
                  will be notified.
                </p>

                <h3 style={{ marginTop: "40px" }}>PAYMENT OF SCHOOL FEES</h3>

                <ul>
                  <li>
                    School fees should be paid on or before the first day of
                    term.
                  </li>
                  <li>
                    School fees payments are not refundable whether or not the
                    child completes the term.
                  </li>
                  <li>
                    The school fees for the term must be paid whether or not the
                    child completes the term.
                  </li>
                  <li>Payments through cash are not allowed.</li>
                  <li>
                    When fees are not paid, the School reserves the right to
                    exclude pupils from School/Learning activities without
                    notice.
                  </li>
                </ul>
              </div>
              <div classname="col-md-5">
                {" "}
                <img
                  className="imgCaro d-block w-100 img-fluid "
                  src={Mask}
                  alt="Scholar"
                />
              </div>
            </div>

            <h3 style={{ marginTop: "40px" }}>PUPILS APPEARANCE</h3>

            <ul>
              <li>
                Parents shall ensure pupils appear in the correct uniform,
                smartly and neatly dressed in conformity with published rules.
                Boys shall appear in evenly low cut hair: no punks, no patterns,
                no lines, no Mohawks or any distracting hairstyle. Girls shall
                appear in combed low cut or braided hair with simple styles made
                with natural hair. The use of colorful decorative hair ornaments
                and hair extensions are not acceptable.
              </li>

              <li>
                No make-up is permitted including nail varnish and lip gloss.
              </li>
              <li>
                Pupils are not allowed to appear in any way that will cause
                distractions to other pupils.
              </li>
              <li>
                If your child’s appearance does not conform to stipulated mode
                of dressing/appearance, your child will not be allowed into
                class.
              </li>
            </ul>

            <h3 style={{ marginTop: "40px" }}>PUNCTUALITY</h3>
            <ul>
              <li>
                Punctuality and strict adherence to time is a virtue we strongly
                uphold and work hard to inculcate in our children at Evergreen
                Schools. Therefore, parents shall ensure pupils arrive on time
                for school.{" "}
              </li>
              <li>
                {" "}
                • The school starts at 7:30am with assembly. Hence, pupils are
                expected in school before 7:30am.
              </li>
              <li>
                <strong>
                  The school gate shall be shut by 8.00am and no pupil will be
                  let in. Pupils that are brought to school beyond 8am will be
                  turned back at the gate by the security personnel.
                </strong>
              </li>
            </ul>

            <h3>PICK-UP TIME</h3>

            <ul>
              <li>The pick-up time is as stated below:</li>
              <ul>
                <li>
                  <strong>Pre-school /Nursery:</strong> Monday – Friday 2:00pm
                </li>
                <li>
                  <strong>Primary:</strong> Monday – Wednesday 3:00pm
                </li>
                <li>
                  <strong>Entension classes:</strong> Monday – Thursday 5:00pm
                </li>
                <li>
                  <strong>(Grade 5 & 6)</strong> Friday – 2:00pm{" "}
                </li>
              </ul>

              <li>
                Parents are expected to pick up their child(ren) after school,
                on time. The school gives a grace period of 1 hour after
                dismissal. Any child left in the school after 5:30pm will be
                picked-up from the security post at no risk to the school.
              </li>
            </ul>

            <h3>CUSTODY CARD: COMPULSORY FOR PICK-UP</h3>

            <ul>
              <li>
                The custody card is a security document. The parent/guardian
                must show up with the custody card to pick his/her child(ren).
                If someone else is coming to pick up the child, the
                parent/guardian should notify the school before closing time via
                both phone calls and text message and also ensure the person
                comes with the custody card.
              </li>
            </ul>
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-7">
              <h3>HEALTH/DRUG ADMINISTARATION POLICY</h3>
              <ul>
                <li>
                  In the event of an emergency/illness in school, the child’s
                  parent shall be contacted and their permission sought before
                  first aid is administered. If a sick child’s parents are not
                  reachable, the school shall proceed to administer first aid
                  and if the child’s condition worsens, the child shall be taken
                  to the hospital (Niger Foundation Hospital) by the School and
                  the responsibility for the bills shall be borne by the sick
                  child’s parents.
                </li>

                <li>
                  Drugs are not administered in the school, however, if it
                  becomes imperative, the school will only accept/administer
                  drugs if:
                </li>
                <ul>
                  <li>It is prescribed by a medical doctor.</li>
                  <li>
                    It is dated (showing the manufacturing date and expiring
                    date).
                  </li>
                  <li>
                    It is labeled and provided in the original container as
                    dispensed by the pharmacist with clear instructions for
                    administration.
                  </li>
                  <li>
                    The parent has filled and signed the consent form and
                    undertakes to accept whatever risk associated with the
                    administration of the drug.
                  </li>
                </ul>

                <li>
                  Kindly note that the school cannot use force if a child
                  refuses to take the medication.{" "}
                </li>
              </ul>
            </div>

            <div classname="col-md-5">
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Scholar}
                alt="Scholar"
              />
            </div>
          </div>

          <h3 style={{ marginTop: "40px" }}>BIRTHDAYS</h3>
          <p>
            Students are welcome to celebrate their birthdays in school with
            their friends. Parents should kindly note the following:
          </p>
          <ul>
            <li>Birthdays are marked only on Fridays.</li>
            <li>The time frame for birthday celebration is 10am – 10:30am.</li>
            <li>
              The school should be notified in good time of up- coming birthday
              celebrations.
            </li>
            <li>Cooked food is not allowed during birthday celebrations. </li>
            <li>
              The only juice allowed during birthday celebrations is Ribenna.
            </li>
            <li>
              Photography/video coverage during birthday celebration is not
              allowed.
            </li>
            <li>
              Pupils are encouraged to donate a book to the school on their
              birthdays.
            </li>
          </ul>
          <h3 style={{ marginTop: "40px" }}>
            PHOTOGRAPHY/VIDEO COVERAGE DURING SCHOOL ACTIVITIES
          </h3>

          <p>
            It is also important to note that we take photographs or videos of
            children when they are involved in school activities (or in
            preparation for school activities). These pictures and videos could
            be used by the school for display, to promote the work of Evergreen
            School in media, on the website and on any other authorized third
            party platform. By attending our events you are consenting to being
            photographed or filmed.
            <strong>
              {" "}
              If you do not wish to have you or your child’s image used, please
              write the Head of School.
            </strong>
          </p>

          <h3>PROMOTION POLICY</h3>

          <p>
            A pupil is eligible for promotion, after satisfactorily meeting the
            promotion criteria. An eligible pupil must finish the school year
            with an average score that is not less than 50% in literacy and
            numeracy. The school reserves the right to advise a pupil to repeat
            a class, if the pupil’s average score in literacy and numeracy is
            less than 50%.
          </p>

          <h3 style={{ marginTop: "40px" }}>RE-ADMISSION POLICY</h3>

          <p>
            Kindly note that if a pupil stays out of school for a period and
            comes back to be re-admitted into the school, the accumulated termly
            fees would be paid. However, if the absence lasts for a session, the
            entrance fee would be paid.
          </p>

          <h3>EXTENSION CLASSES</h3>

          <p>
            In preparation for entrance examination into highly competitive
            secondary schools, we commence our extension classes from grade 4
            third term. The classes are mandatory for every child and it comes
            at a fee to the parents.
          </p>

          <h3 style={{ marginTop: "40px" }}>
            FIRST SCHOOL LEAVING CERTIFICATE/STATE COMMON ENTRANCE
          </h3>

          <p>
            Ministry of Education has made it mandatory that no child will write
            First School Leaving Certificate and State Common Entrance from
            grade 5, it must be from grade 6.
          </p>

          <div className="col-md-12 flexy">
            <div className="col-md-7">
              <h3 style={{ marginTop: "40px" }}>
                EVERGREEN FINISHING SCHOOL PROGRAM
              </h3>

              <p>
                {" "}
                • Evergreen School Pupils in grade 6 and those leaving for
                secondary school from grade 5; participate in the mandatory
                Evergreen Finishing School Program (EFSP) at a fee to the
                parent.
              </p>

              <h3>GRADUATION CEREMONY</h3>

              <p>
                {" "}
                We cannot over emphasize the role age and maturity play in a
                child’s educational development. As an institution, it has been
                our practice and firm policy since inception to graduate and
                celebrate only pupils leaving from grade 6 to secondary school.
                <strong>
                  We therefore wish to affirm our policy beforehand that our end
                  of year graduation ceremony is only for grade 6 pupils; hence
                  Evergreen Schools does not graduate/celebrate grade 5 pupils.
                  However, it is still at the discretion of parents to decide
                  the class from which their ward(s) leaves for secondary
                  school.
                </strong>
              </p>
            </div>

            <div classname="col-md-5">
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Exam}
                alt="Scholar"
              />
            </div>
          </div>
        </div>

        <div className="col-md-12 flexy">
          <div className="col-md-5">&nbsp;</div>
          <div className="col-md-2 pol">
            <a
              href={CODE}
              without
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-lg"
            >
              Download Policy
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apply