import React from "react";

function Education(props) {
  return (
    <div
      style={{
        marginLeft: "50px",
      }}
    >
      {props.education.map((element, index) => {
        return (
          <>
            <h3>{element[0]}</h3>
            <p>{element[1]}</p>
          </>
        );
      })}
    </div>
  );
}

export default Education;
