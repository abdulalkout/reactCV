import React from "react";

function TechSkills(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
      }}
    >
      <div>
        <h4>Coding Languages</h4>
        <ul>
          <li>{props.lang[0]}</li>
          <li>{props.lang[1]}</li>
          <li>{props.lang[2]}</li>
        </ul>
      </div>
      <div>
        <h4>Frameworks</h4>
        <ul>
          <li>{props.frame[0]}</li>
          <li>{props.frame[1]}</li>
          <li>{props.frame[2]}</li>
        </ul>
      </div>
    </div>
  );
}

export default TechSkills;
