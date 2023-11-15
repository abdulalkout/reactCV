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
          <li>{props.jobExp[1][0]}</li>
          <li>{props.jobExp[1][1]}</li>
          <li>{props.jobExp[1][2]}</li>
          <li>{props.jobExp[1][3]}</li>
          <li>{props.jobExp[1][4]}</li>
        </ul>
      </div>
    </div>
  );
}

export default JobExp;
