import React from "react";
import "../components/Experience.css";

function Experience() {
  return (
    <div className="ExperienceCards" id="ExperienceCards">
      <div className="ExperienceCards1">
        <br />
        <i class="bi bi-laptop-fill"></i>
        <h1>Interface Design</h1>
        <p>
          Phasellus vulputate tellus nec tortor varius elementum. Curabitur at
          pulvinar ante.
        </p>
      </div>
      <div className="ExperienceCards2">
        <br />
        <i class="bi bi-cast"></i>
        <h1>Media Strategy</h1>
        <p>
          Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu,
          iaculis congue sem.
        </p>
      </div>
      <div className="ExperienceCards3">
        <br />
        <i class="bi bi-calendar3"></i>
        <h1>Mobile App</h1>
        <p>
          Mauris convallis eros massa, vitae euismod arcu tempus ut. Quisque
          viverra iaculis.
        </p>
      </div>
      <div className="ExperienceCards4">
        <br />
        <i class="bi bi-filetype-js"></i>
        <h1>Coding</h1>
        <p>
          Mauris convallis eros massa, vitae euismod arcu tempus ut. Quisque
          viverra iaculis.
        </p>
      </div>
    </div>
  );
}

export default Experience;
