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
          {props.lang.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Frameworks</h4>
        <ul>
          {props.frame.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TechSkills;
