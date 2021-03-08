import React from "react";
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Hi = (props) => {
  return (
    <>
      <p>
        Hi {props.name}, you are {props.age} years old
      </p>
    </>
  );
};

const Part1a = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Hi name="Maya" age={26 + 10} />
      <Hi name={name} age={age} />
    </div>
  );
};

export default Part1a;
