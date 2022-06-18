import React from "react";
import Facebook from "../assets/fb.svg";
import Instagram from "../assets/ig.svg";
import InstagramEmbed from "react-instagram-embed";


import "./Socials.css";







function Socials() {

  return (
    <div className="socials">
      <div className="col-md-12 flexy">
        <div className="col-md-4">
          <h5>Socials</h5>
          <h1>Stay Connected with us in Evergreen</h1>
          <p>
            Be sure to follow us <a href="#">@evergreenschoolsenugu</a>to stay
            connected and peek into a day at Evergreen
          </p>

          <div className="handle">
            <img className=" " src={Facebook} alt="" />{" "}
            <img className=" " src={Instagram} alt="" />
          </div>
        </div>
        <div className="col-md-4 handles">
          <InstagramEmbed
            url="https://instagr.am/p/Zw9o4/"
            clientAccessToken="123|456"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
        <div className="col-md-4 handles">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/LoAJCb95xEw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Socials;
