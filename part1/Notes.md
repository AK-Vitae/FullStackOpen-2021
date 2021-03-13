# Part 1 - Notes

## a) Introduction to React

**Making a React application** 

* ```react
  create-react-app
  ```

**Running a React application**

* ```
  npm start
  ```

* By default, the application runs in localhost port 3000 with the address [http://localhost:3000](http://localhost:3000/)

**Components**

* Components are independent and reusable bits of code. 
* They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.

**Other Notes**

* React component names must be capitalized
* Content of a React component (usually) needs to contain one root element (e.g. div-element or <>)

### JSX

* JSX stands for JavaScript XML and it allows us to write HTML in React
* JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime (handled by Babel)

### Multiple Components/Passing Data to Components

```react
import React from "react";
const Hello = (props) => { // Passing in props as data for components
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

// Uses both the Hello and Hi components
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
```



## b) JavaScript

### Constants and Variables

```javascript
/ * CONSTANTS & VARIABLES * /;

const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = "sometext";
console.log(x, y);
// x = 4; Causes an Error
```



### Arrays

```javascript
/ * ARRAYS * /;
const t = [1, -1, 3];
const t2 = t.concat(5); // creates a new array in which the content of the old array and the new item are both included
console.log(t2); // [1, -1, 3, 5] is printed
t.push(5); // adds new items to the end of an array, and returns the new length

console.log(t.length); // 4 is printed
console.log(t[1]); // -1 is printed

t.forEach((value) => {
  console.log(value); // numbers 1, -1, 3, 5 are printed, each to own line
});

// Array mapping
t3 = [1, 2, 3];
const m1 = t.map((value) => value * 2); // based on the old array, map creates a new array, for which the function given as a parameter is used to create the items
console.log(m1);
const m2 = t.map((value) => "<li>" + value + "</li>"); // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
console.log(m2);
// Destructuring assignment
const t4 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = t4;
console.log(first, second);
console.log(rest);
```



### Objects

```javascript
/ * OBJECTS * /;
// Object Literals
const object1 = {
  name: "AK",
  age: 24,
  education: "BS",
};

const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};

const object3 = {
  name: {
    first: "John",
    last: "Smith",
  },
  grades: ["A", "A", "B+", "C"],
  department: "Rutgers University",
};

// Referencing using dot notation
console.log(object3.grades[2]);
// Referencing using brackets
const fieldName = "age";
console.log(object1[fieldName]);
// Adding properties to object
object1.address = "USA";
console.log(object1.address);
object1["favorite number"] = 1;
console.log(object1["favorite number"]);

// Object methods
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  greet: function () {
    console.log("hello, my name is " + this.firstName);
  },
};
const fullName = person.fullName(); // Need the () or it will return function definition
console.log(fullName);
person.greet();
```



### Functions

```javascript
/ * FUNCTIONS * /;
const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};
const result = sum(1, 5);
console.log(result);

let square = (p) => {
  console.log(p);
  return p * p;
};
// Shorter function syntax
square = (p) => p * p;
```



### Classes

```javascript
/ * CLASSES * /;
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hello, my name is " + this.name);
  }
}

const roger = new Person("Roger Smith", 25);
roger.greet();

const mary = new Person("Mary Sue", 44);
mary.greet();
```

