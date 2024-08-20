
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  const depositsOverHundred = [];
  let clientDeposits;

  for (const clientAccount of array) {
    clientDeposits = clientAccount.deposits
    for (const deposit in clientDeposits) {
      if (clientDeposits[deposit] > 100) {
        depositsOverHundred.push(clientDeposits[deposit])
      }    
    }
  }
    return depositsOverHundred;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
