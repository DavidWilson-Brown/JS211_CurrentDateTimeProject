// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
// console.log(new Date);

// const displayDate = () => {
//   const currentDate = new Date();

//   document.getElementById('display-element').innerHTML = currentDate;
//   return currentDate;
// };
// let dateTime = displayDate();

// Write a JavaScript program to convert a number to a string.
// Create a variable called num (holds the number)
// Create a variable called text (holds the method to change from number to string)
// Create a function called numToStr that changes number to string

// const numberToString = (number) => {
//   const text = number.toString();
//   console.log(
//     'The number is now a:',
//     typeof text,
//     'and the string inputted was:',
//     text
//   );
//   return text;
// };
// numberToString(4);

// Write a JavaScript program to convert a string to the number.
// const stringToNumber = (text) => {
//   const stringNumber = parseInt(text);
//   console.log('The string is now: ', typeof text, 'and the number is', text);
//   return stringNumber, typeof stringNumber;
// };

// stringToNumber(42);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:

// // Boolean
// const detectDataBoolean = (data) => {
//   const dataType = typeof data;
//   return dataType;
// };
// const showDataTypeBoolean = detectDataBoolean(true);
// console.log('The type of data entered for the function `detectDataBoolean` is a/an:', showDataTypeBoolean);

// // // * Null
// const detectDataNull = (data) => {
//   const dataType = typeof data;
//   return dataType;
// };
// const showDataTypeNull = detectDataNull(null);
// console.log('The type of data entered for the function `detectDataNull` is a/an:', showDataTypeNull);

// * Undefined
// const detectDataUndefined = (data) => {
//   const dataType = typeof data;
//   return dataType;
// };
// const showDataTypeUndefined = detectDataUndefined(undefined);
// console.log('The type of data entered for the function `showDataTypeUndefined` is a/an:', showDataTypeUndefined);

// * Number
// const detectDataNumber = (data) => {
//   const dataType = typeof data;
//   return dataType;
// };
// const showDataTypeNumber = detectDataNumber(54);
// console.log('The type of data entered for the function `showDataTypeNumber` is a/an:', showDataTypeNumber);

// * NaN
// const detectDataNaN = (data) => {
//   const result = NaN;
//   return result;
// };
// const showDataTypeNaN = detectDataNaN();
// console.log('The type of data entered for the function `showDataTypeNaN` is a/an:', showDataTypeNaN);

// * String
// const detectDataString = (data) => {
//   const dataType = typeof data;
//   return dataType;
// };
// const showDataTypeString = detectDataString('Jack Nicholson');
// console.log('The type of data entered for the function `detectDataString` is a/an:', showDataTypeString);

// Write a function that takes in a data type
// return the type of that variable - using the 'typeof' operator

// This function will detect the type of data when called from an outside variable
// const detectDataType = (data) => {
//   return typeof data;
// }

// These are the example variables which will be used for the 'data' in the above function
// const exampleNumber = 4;
// const exampleString = 'Apple';
// const exampleObject = {
//   id: 42,
//   name: 'Jackie'
// };

// This will print the results and call the function detectDataType
// using the example variables above
// console.log('The type of data in exampleNumber is:', detectDataType(exampleNumber));
// console.log('The type of data in exampleString is:', detectDataType(exampleString));
// console.log('The type of data in exampleObject is:', detectDataType(exampleObject));

// Write a JavaScript program that adds 2 numbers together.
// const add = (num1, num2) => {
//   return num1 + num2;
// };
// console.log('ANSWER IS: ' + add(2, 5));

//Write a JavaScript program that runs only when 2 things are true.
//*** REWROTE THIS FUNCTION ***

// const greeting = (hour) => {
//   if (hour >= 0 && hour < 12) {
//     return 'Good morning';
//   } else {
//     return 'Good evening';
//   }
// };
// const showGreeting = greeting(13);
// console.log(showGreeting);

// Write a JavaScript program that runs when 1 of 2 things are true.
// *** REWROTE THIS FUNCTION ***
// const eligible = (term, semester) => {
//   if(term >= 70 || semester >= 70) {
//     return 'Student is eligible';
//   } else {
//     return 'Student is ineligible';
//   }
// }

// const showEligible = eligible (68, 80);
// console.log(showEligible);

// Write a JavaScript program that runs when both things are not true.
// *** REWROTE THIS FUNCTION ***

// const gamePlay = (lives, chances) => {
//   if(lives !== 0 && chances !== 0) {
//     return 'Game On!!';
//   } else {
//     return 'End of Game!';
//   }
// }

// console.log('Player one:', gamePlay(1, 0));

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
