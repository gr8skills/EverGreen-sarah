import React from 'react';
import Pex from "../../../../assets/kidsing2.png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Result() {
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
        
            <header>Transfer</header>
          </div>
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
                  <Link
                    className="active"
                    to={"/academics/result_&_scholarships"}
                  >
                    Transfer
                  </Link>
                </li>
              </ul>
            </div>
            <p>Admission Requirements</p>
            <p>JSS 2 & SS 1 (TRANSFER)</p>
            <p>
              Sale of Admission form usually start in April and it runs in
              batches.
            </p>
            <h4>Sales of Entrance Forms:</h4>
            <ol>
              <h6>Point of Sales are usually;</h6>
              <li>
                Evergreen Primary School (No. 8 Aguleri Street, Independence
                Layout Opposite State High Court, Enugu.
              </li>

              <li>
                Rosedale Academy Enugu (No. 35 Nike Lake Resort Road Transekulu,
                Enugu)
              </li>

              <li>
                Evergreen College (No. 3 Presidential Close, beside Niger
                Foundation Hospital, Independence Layout, Enugu).
              </li>
            </ol>
            <p>
              Payment of N2, 000.00 for Application into Senior School form via
              cash.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Result