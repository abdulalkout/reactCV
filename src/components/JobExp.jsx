import React from "react";

function JobExp(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "50px",
        marginRight: "50px",
      }}
    >
      <div>
        <h4>{props.software[0]}</h4>
        <p>{props.software[1]}</p>
      </div>
      <div>
        <h4>{props.jobExp[0]}</h4>
        <ul>
          {props.jobExp[1].map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobExp;
