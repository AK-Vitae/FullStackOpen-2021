import React from "react";

function Total(props) {
  return (
    <p>
      Number of exercises{" "}
      {props.total.exercises1 + props.total.exercises2 + props.total.exercises3}
    </p>
  );
}

export default Total;
