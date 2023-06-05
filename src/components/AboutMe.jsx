import React from "react";
import image from "../Gallery/about-img.jpg";
import "../components/AboutMe.css";

function AboutMe() {
  return (
    <div className="Aboutme" id="Aboutme">
      <div className="AboutMetext">
        <h2>Donec auctor</h2>
        <h6>Sed vulputate vitae diam quis bibendum</h6>
        <p>
          Phasellus vulputate tellus nec tortor varius elementum. Curabitur at
          pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue
          sem. Mauris convallis eros massa.
        </p>
        <p>
          Quisque viverra iaculis aliquam. Etiam volutpat, justo non aliquam
          bibendum, sem nibh mollis erat, quis porta odio odio at velit.
        </p>
      </div>
      <div className="AboutMeimage">
        <img src={image} alt="#" />
      </div>
      <div className="Allskills">
        <div className="Allskillsanimation">
          <h1>My Skills</h1>
          <h3>Photoshop . HTML CSS JS . Web Design</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "13px",
            }}
          >
            <h4>Frontend Design</h4>
            <h5>90%</h5>
          </div>
          <div
            style={{
              width: "70%",
              height: "2px",
              backgroundColor: "white",
              marginLeft: "40px",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "100%",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "13px",
            }}
          >
            <h4>Backend processing</h4>
            <h5>70%</h5>
          </div>
          <div
            style={{
              width: "70%",
              height: "2px",
              backgroundColor: "white",
              marginLeft: "40px",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "100%",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "13px",
            }}
          >
            <h4>HTML5 & CSS3</h4>
            <h5>80%</h5>
          </div>
          <div
            style={{
              width: "70%",
              height: "2px",
              backgroundColor: "white",
              marginLeft: "40px",
            }}
          >
            <div
              style={{
                width: "80%",
                height: "100%",
                backgroundColor: "black",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
