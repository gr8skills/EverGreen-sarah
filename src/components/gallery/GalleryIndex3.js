import React from "react";

import Compute from "../../assets/maime.png";
import Building from "../../assets/act.png";
import Chicken from "../../assets/gym.png";
import Craft3 from "../../assets/native.png";
import Craft4 from "../../assets/perform.png";

import Practical from "../../assets/sing.png";

import "../HeroSection.css";

function GalleryIndex3() {
  return (
    <>
      <table className="gallery">
        <tr>
          <td className="mic-img col-md-4">
            <div
              style={{
                background: `url(${Compute}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td className="mic-img col-md-4">
            <div
              style={{
                background: `url(${Building}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>

          <td className="mic-img col-md-4">
            <div
              style={{
                background: `url(${Chicken}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          {/* <td classname="col-md-3">
            <div
              style={{
                background: `url(${Drama}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td> */}
        </tr>
        <tr>
          <td rowSpan="4" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Craft3}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>

          <td rowSpan="4" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Craft4}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          <td rowSpan="4" style={{ width: "350px" }}>
            <div
              style={{
                background: `url(${Practical}) center/cover no-repeat`,
                height: "100%",
                width: "-webkit-fill-available",
                objectFit: "cover",
              }}
              className="img-fluid"
            >
              <div className="text-cover">
                <div className="text-content">
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </div>
          </td>
          
        </tr>
      </table>
    </>
  );
}
export default GalleryIndex3;
