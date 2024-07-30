/*

    Challenge 2: Conditionals

    Description
    Create a function that takes a number as input and returns a string 
    indicating whether the number is positive, negative, or zero.

    Requirements
    - Use an if-else statement to check the value of the input number and return the 
    corresponding string.

*/

function numberIdentifier(num) {
  // Check if the number is greater than 0
  if (num > 0) {
    return "Positive Number";
    // Check if the number is equal to 0
  } else if (num == 0) {
    return "Zero";
    // Otherwise, the number is negative
  } else {
    return "Negative Number";
  }
}

// Test cases to verify the function
console.log(numberIdentifier(10)); // Should print "Positive Number"
console.log(numberIdentifier(0)); // Should print "Zero"
console.log(numberIdentifier(-2)); // Should print "Negative Number"
