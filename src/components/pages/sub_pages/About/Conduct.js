import React from "react";
import { Link } from "react-router-dom";
import Pex from "../../../../assets/examstudents2.png";

import "./Style.css";




function Conduct () {
  return (
    <section>
      <div className="header-img ">
        <img src={Pex} alt="Header" className="img-fluid" />
      </div>
    </section>
  );
}

export default Conduct