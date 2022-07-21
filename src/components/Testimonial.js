import React from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Quote from "../assets/Quote.svg";
import Parade from "../assets/Ellipse1@2x.png";
import Circle from "../assets/Circle.svg";
import Hood from "../assets/hood3.png";
import Carousel from "react-bootstrap/Carousel";
// import ReactPlayer from "react-player";

// import Carousel from "react-elastic-carousel";


import "./Testimonial.css";


function Testimonial() {
   
  return (
    
    <>
      <div className="whitespace">&nbsp;</div>

      <div className="col-md-12">
        <img className="land" src={Hood} alt="" />
        <div className="flexy">
          <div className="col-md-1">&nbsp;</div>

          <div className="testifier col-md-10 col-10 flexy">
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-8">
              <h6>Voices</h6>
              <h3>Testimonials</h3>
              <img className="land2" src={Quote} alt="" />
              <Carousel>
                {" "}
                <Carousel.Item>
                  <p>
                    My darling grandson Joshua Chukwuemeka Okereke gave me the
                    privilege to come in contact with Mrs Doris Chinedu Okoro a
                    humble and hardworking woman of substance with a growth
                    mindset which has helped to challenge her in taking specific
                    actions to develop and achieve more than she originally
                    thought was possible in a top notch school called Evergreen
                    Schools. Evergreen students stand out anywhere they go.
                    Intellectually, they are Confident, they have Integrity,
                    they are hardworking and honest. These values are reflected
                    in the life of my Grandson Joshua. Evergreen Schools
                    continue to fly high.
                    <br /> <br />
                    <strong>
                      Okereke Roseline.I.A / Director Federal Ministry of
                      Education (Rtd)
                    </strong>
                  </p>
                </Carousel.Item>
                <Carousel.Item>
                  <p>
                    When I think of a school that can actively challenge the
                    highly curious and very inquisitive mind of the 21st century
                    child, I think of Evergreen Schools, Enugu. The school not
                    only challenges the kids academically and intellectually, it
                    keeps them morally grounded, highly respectful, very
                    confident and much focused. Think of a school that
                    indirectly challenges parents to read more and have a vast
                    knowledge in various subject matter, think Evergreen
                    Schools. The Interactive teaching style as well as the
                    individual child based approach to learning is unparalleled.
                    Furthermore, the constant exposure of the pupils to
                    international standard examinations coupled with the highly
                    determined mind set of the pupils to study in highly
                    academic and talent based Secondary and tertiary
                    institutions(on scholarships) is very admirable. From the
                    thinking School to the Finishing School, Evergreen Schools
                    truly shaped my son into an all-rounder and I will forever
                    pride myself of availing my son the opportunity to study in
                    this outstanding Citadel of Learning.
                    <br /> <br />
                    <strong>Dr. Chinyere Okolo / Parent</strong>
                  </p>
                </Carousel.Item>
              </Carousel>
              {/* <ReactPlayer url="https://youtube.com/shorts/G7Vp6wdFW8k?feature=share" /> */}
            </div>

            <div className="col-md-2">&nbsp;</div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Testimonial