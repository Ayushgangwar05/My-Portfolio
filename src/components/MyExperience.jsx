import React from "react";
import image from "../Gallery/experience-img.jpg";
import "../components/Myexperience.css";

function MyExperience() {
  return (
    <div className="Myexperience" id="Myexperience">
      <div className="Myexperienceimg">
        <img src={image} alt="#" />
      </div>
      <div className="Myexperiencetext">
        <div className="Myexperiencetext1">
          <h1>My Experiences</h1>
          <p>Previous companies and my tasks</p>
          <i class="bi bi-laptop">
            {" "}
            Graphic Designer <span>2014 Jul - 2015 Sep</span>
          </i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <i class="bi bi-laptop">
            {" "}
            Web Designer <span>2015 Oct - 2017 Jan </span>
          </i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default MyExperience;
