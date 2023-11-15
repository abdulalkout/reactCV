import React from "react";

function Education(props) {
  return (
    <div
      style={{
        marginLeft: "50px",
      }}
    >
      <h3>Education</h3>
      <div>
        <p>{props.education[0]}</p>
        <p>{props.education[1]}</p>
      </div>
    </div>
  );
}

export default Education;
