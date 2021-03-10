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
