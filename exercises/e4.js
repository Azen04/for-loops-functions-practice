// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  
  let minValue; 
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      
      for (const otherValue of array) {
        if (value < otherValue) {
          minValue = value; 
        } 
      }
    }  
    return minValue;
    
}

export function findMaxValueInArray(array) {

  let maxValue; 
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      
      for (const otherValue of array) {
        if (value > otherValue) {
          maxValue = value; 
        } 
      }
    }  
    return maxValue;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
