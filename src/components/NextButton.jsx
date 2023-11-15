import React from "react";

function NextButton(props) {
  return (
    <button
      onClick={props.toggleCounter}
      style={{
        marginLeft: "45%",
        backgroundColor: "aliceblue",
        borderRadius: "30px",
        width: "100px",
        marginTop: "30px",
      }}
    >
      Next
    </button>
  );
}

export default NextButton;
