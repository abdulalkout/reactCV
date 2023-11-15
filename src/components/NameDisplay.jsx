import React from "react";

function NameDisplay(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.name}</h1>
    </div>
  );
}

export default NameDisplay;
