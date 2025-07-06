/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

 
let result = "5" - 2; // This is valid and will execute. JS implicitly converts the string to a number for subtraction
console.log("The result is: " + result);

let isValid = Boolean("false"); // This executes bc a string will translate as a Truthy value. To make false, make a Falsey value. I left as is bc it is a truthy value.
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // Need change age to a number otherwise this gives you totalAge = 255. Change made.
console.log("Total Age: " + totalAge);

// implicit type
let jerseyNumber = "88";
let jerseyNumberTimesOne= jerseyNumber * 1;
console.log(jerseyNumberTimesOne);

// explicit type
jerseyNumber = "89";
let jerseyNumberPlusOne= Number(jerseyNumber) + 1;
console.log(jerseyNumberPlusOne);

// this print statement wont execute bc null is false
let bike = null
if (bike) {
  console.log("This is truthy");
}

