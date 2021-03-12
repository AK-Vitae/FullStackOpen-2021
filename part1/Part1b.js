/ * CONSTANTS & VARIABLES * /;

const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = "sometext";
console.log(x, y);
// x = 4; Causes an Error

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
