// Takes in all of the command line arguments
var inputArr = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var operand = inputArr[2];
var num1 = parseFloat(inputArr[3]);
var num2 = parseFloat(inputArr[4]);


// var num1 = parseFloat(inputArr[3]);
// var num2 = parseFloat(inputArr[4]);


// Here's the variable we will be modifying with the new numbers
var outputNum;

// Determines the operand selected...
// Based on the operand we run the appropriate math on the two numbers
switch (operand) {
case "add":
  outputNum =num1 +num2;
  break;

case "subtract":
  outputNum =num1 -num2;
  break;

case "multiply":
  outputNum =num1 *num2;
  break;

case "divide":
  outputNum =num1 /num2;
  break;

case "remainder":
  outputNum = num1 % num2;
  break;

default:
  outputNum = "Not a recognized command";
}

// Prints the outputNumber
console.log(outputNum);

// =======================================================


