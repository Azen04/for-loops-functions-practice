
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  const wrongBalanceAccounts = [];
  let sumsDifference = 0;

  for (const user of array) {
    let depositSums = 0;
    let withdrawalSums = 0;

    for (const depositKey in user.deposits) {
      depositSums = user.deposits[depositKey] + depositSums
    }
    for (const withdrawalKey in user.withdrawals) {
      withdrawalSums = user.withdrawals[withdrawalKey] + withdrawalSums
    }

    if (depositSums >= withdrawalSums) {
      sumsDifference = depositSums - withdrawalSums
    } else if (depositSums <= withdrawalSums) {
      sumsDifference = withdrawalSums - depositSums
    }
    
    if (user.balance !=  sumsDifference) {
      wrongBalanceAccounts.push(user)
    }
  }
return wrongBalanceAccounts
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
