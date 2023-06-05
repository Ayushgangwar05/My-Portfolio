import React from "react";
import image from "../Gallery/education-img.jpg";
import "../components/MyEducation.css";
function MyEducation() {
  return (
    <div className="MyEducation">
      <div className="MyEducationtext">
        <div className="MyEducationtext1">
          <h1>My Education</h1>
          <p>In cursus orci non ipsum gravida dignissim</p>
          <i class="bi bi-laptop">
            Master in Design <span>2012 Jan - 2014 May</span>
          </i>
          <p>
            Etiam iaculis elit in mauris ullamcorper auctor. Proin a sapien id
            orci ullamcorper dignissim eu in neque.
          </p>
          <i class="bi bi-laptop">
            Bachelor of Arts
            <span>2008 May - 2011 Dec</span>
          </i>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <div className="MyEducationimg">
        <img src={image} alt="#" />
      </div>
    </div>
  );
}

export default MyEducation;
