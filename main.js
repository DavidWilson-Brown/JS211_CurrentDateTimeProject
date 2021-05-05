// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 
date();

// Write a JavaScript program to convert a number to a string.
const num2String = (num) => {
  return num.toString();
}

const result = num2String(42);

console.log(typeof result);

// Write a JavaScript program to convert a string to the number.
const string2Num = (str) => {
  return parseInt(str);
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
Boolean (12 > 88);

  // * Null
let person = () => {
  firstName: "Frank"
  lastName: "Sinatra",
  age: 47,
  eyeColor: "Blue"
}

person = null;


  // * Undefined
  let car;
  car + "<br>" + typeof car;
  

  // * Number
let x = 54;

  // * NaN
  //  should return false
isNaN(6)


  // * String
typeof "" + "<br>" +
typeof "Jack" + "<br>" + 
typeof "Jack Nicholson";



// Write a function that takes in a data type
// return the type of that variable - using the 'typeof' operator
const variableOne = 0;
const variableTwo = "Apple";
const variableThree = {id: 42, name: "Jackie"}

typeof varbleOne;
typeof variableTwo;
typeof variableThree;


  
// Write a JavaScript program that adds 2 numbers together.
const add = (num1, num2) => {
  return num1 + num2;
}

console.log(add ('ANSWER' 2, 5));


// Write a JavaScript program that runs only when 2 things are true.
const partyTime = () => {
  let age = 35;
  let day = "Saturday";
  message = "Party On Wayne!"
  if(age >= 21 && day == "Saturday") {
 } else { 
   message = "Not tonight."  
}


// Write a JavaScript program that runs when 1 of 2 things are true.
if (x > y) {
  alert("Hello World");
} else {
  alert("Goodbye");
}


// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
