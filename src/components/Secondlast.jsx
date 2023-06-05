import React from "react";
import image from "../Gallery/quotes-bg.jpg";
import "../components/Secondlast.css";

function Secondlast() {
  return (
    <div className="Secondlastimg" id="Secondlastimg">
      <img src={image} alt="#" />
      <div className="Secondlasttext">
        <i class="bi bi-star-half"></i>
        <br />
        <br />
        <h2>
          Proin lobortis eu diam et facilisis. Fusce nisi nibh, molestie in
          vestibulum quis, auctor et orci.
        </h2>
        <p>
          Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu,
          iaculis congue sem.
        </p>
      </div>
    </div>
  );
}
export default Secondlast;
