import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Quote from "../assets/Quote.svg";
import Parade from "../assets/Ellipse1@2x.png";
import Circle from "../assets/Circle.svg";
import Hood from "../assets/hood3.png";



import "./Carousel.css";


function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        arrows:true,
        speed: 700, 
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        };
  return (
    <>
      <div className="whitespace">&nbsp;</div>

      <div className="col-md-12">
        <img className="land" src={Hood} alt="" />
        <div className="flexy">
          <div className="col-md-1">&nbsp;</div>

          <div className="testifier col-md-10 col-10 flexy">
            <div className="col-md-2">&nbsp;</div>
            <div classname="col-md-8">
              <h6>Voices</h6>
              <h3>Testimonials</h3>
              <img className="land2" src={Quote} alt="" />
              <p>
                The best part of my child's experience in Evergreen School has got to be the open-armed
                friendliness that this school perpetuates. It has helped her grow
                from someone who was in a shell to someone who is comfortable
                and proud to be herself. I recommend Evergreen School for its friendly
                atmosphere, relatively small class sizes and easy and direct
                communication with teachers.
                <br></br>
                <strong>Mrs Sarah Obi / Parent</strong>
              </p>
            </div>
            <div className="col-md-2">&nbsp;</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel