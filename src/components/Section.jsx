import React from "react";

function Section(props) {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h3>{props.headline}</h3>
      <p>---------------------------------------</p>
    </div>
  );
}

export default Section;
