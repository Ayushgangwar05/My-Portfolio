import React from "react";
import "../components/Navbar1.css";
import image from "../Gallery/home-img.jpg";
function Navbar() {
  return (
    <div>
      <div className="NavbarPhotos" id="NavbarPhotos">
        <div>
          <img src={image} alt="#" />
        </div>
        <div className="Navbartext">
          <div className="alltext">
            <h6>WELCOME TO MY WEBSITE</h6>
            <h1>
              Hello, I am <span>Stimulus</span> currently based in New York
              city.
            </h1>
            <p>
              Donec auctor arcu at efficitur lacinia. Praesent bibendum
              efficitur ipsum, et mattis tellus interdum in. Ut a dictum purus.
              Vestibulum non pellentesque felis, sed dignissim urna. Vestibulum
              id accumsan quam.
            </p>
            <button>GET STARTED</button>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex" }} className="Navbarmain">
        <a className="Stimulus" style={{ textDecorationLine: "none" }} href="#">
          Stimulus
        </a>
        <div className="elementlist">
          <ul className="ullist">
            <a style={{ textDecorationLine: "none" }} href="#NavbarPhotos">
              <li>HOME</li>
            </a>
            <a style={{ textDecorationLine: "none" }} href="#Aboutme">
              <li>ABOUT ME</li>
            </a>
            <a style={{ textDecorationLine: "none" }} href="#ExperienceCards">
              <li>EXPERIENCE</li>
            </a>
            <a style={{ textDecorationLine: "none" }} href="#Secondlastimg">
              <li>TESTIMONIAL</li>
            </a>
            <a style={{ textDecorationLine: "none" }} href="#Contact">
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
