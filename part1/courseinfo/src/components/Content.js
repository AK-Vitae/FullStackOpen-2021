import React from "react";

function Content(props) {
  return (
    <div>
      <Part
        part={props.exercises.part1}
        exercise={props.exercises.exercises1}
      />
      <Part
        part={props.exercises.part2}
        exercise={props.exercises.exercises2}
      />
      <Part
        part={props.exercises.part3}
        exercise={props.exercises.exercises3}
      />
    </div>
  );
}

function Part(props) {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
}

export default Content;
