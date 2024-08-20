// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
    let str = '';
    
    for (const key in array) {
        if (array[key] != array[array.length - 1]) {
            array[key] = array[key] + separator;
        }
    }
    
    for (const value of array) {
        
        str = str + value;
        
    }

    return str;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
