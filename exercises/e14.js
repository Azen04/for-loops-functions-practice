
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  const wrongBalanceAccounts = [];
  let deposits;
  let withdrawals;
  let depositSums;
  let withdrawalSums;
  let sumsDifference;

  for (const clientAccount of array) {
    depositSums = 0;
    withdrawalSums = 0;
    sumsDifference = 0;    
    deposits = clientAccount.deposits;
    withdrawals = clientAccount.withdrawals;
    for (const depositKey in deposits) {
      depositSums = deposits[depositKey] + depositSums
      console.log(depositSums);
      
    }
    for (const withdrawalKey in withdrawals) {
      withdrawalSums = withdrawals[withdrawalKey] + withdrawalSums
      console.log(withdrawalSums);
      
    }
    if (depositSums >= withdrawalSums) {
      sumsDifference = depositSums - withdrawalSums
    } else if (depositSums <= withdrawalSums) {
      sumsDifference = withdrawalSums - depositSums
    }
    if (clientAccount.balance !=  sumsDifference) {
      wrongBalanceAccounts.push(clientAccount)
    }
  }
return wrongBalanceAccounts
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
