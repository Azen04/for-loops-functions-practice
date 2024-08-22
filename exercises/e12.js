
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  const depositsOverHundred = [];
  for (const user of array) {
    for (const deposit in user.deposits) {
      if (user.deposits[deposit] > 100) {
        depositsOverHundred.push(user.deposits[deposit]);
      }
    }
  }    
    return depositsOverHundred;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
