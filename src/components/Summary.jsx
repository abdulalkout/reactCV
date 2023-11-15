import React from "react";

function Summary(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
      }}
    >
      <div>
        <h3>Summary</h3>
        <p>---------------------------------------</p>
        <p
          style={{
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          {props.summary}
        </p>
      </div>
      <br />
    </div>
  );
}

export default Summary;
