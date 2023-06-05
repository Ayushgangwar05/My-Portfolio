import React from "react";
import image from "../Gallery/contact-img.jpg";
import "../components/Contact.css";

function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="Contacttext1">
        <div classname="Contacttextanimation">
          <h1>Say hello..</h1>
          <p>
            Integer ut consectetur est. In cursus orci non ipsum gravida
            dignissim.
          </p>
          <input
            onChange={function (event) {
              let arr = event.target.value;
              console.log(arr);
            }}
            style={{
              borderStyle: "none",
              borderBottomStyle: "solid",
            }}
            type="text"
            name="text"
            placeholder="Your Name"
          />
          <br />
          <input
            onChange={function (event) {
              let arr = event.target.value;
              console.log(arr);
            }}
            style={{
              borderStyle: "none",
              borderBottomStyle: "solid",
            }}
            placeholder="Your Email"
            name="email"
          />
          <br />
          <input
            onChange={function (event) {
              let arr = event.target.value;
              console.log(arr);
            }}
            className="TextArea"
            style={{
              borderStyle: "none",
              borderBottomStyle: "solid",
              height: "20vh",
            }}
            placeholder="Write your message"
            name="textarea"
          />
          <br />
          <button>Send</button>
        </div>
      </div>
      <div className="Contactimg">
        <img src={image} alt="#" />
      </div>
      <div className="ContactText">
        <div>
          <h3>Visit my office</h3>
          <p>456 New Street 22000, New York City, USA</p>
          <h2>Contact.</h2>
          <i class="bi bi-telephone"> 01-0110-0220</i>
          <br />
          <br />
          <i class="bi bi-envelope">
            <a href="#"> hello@company.co</a>
          </i>
          <br />
          <br />
          <i class="bi bi-globe-americas">
            <a href="#"> company.co</a>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Contact;
