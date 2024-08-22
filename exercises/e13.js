// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
    const lessThan2000 = [];
    for (const user of array) {
        let sumOfDeposits = 0;
        for (const depositKey in user.deposits) {
            sumOfDeposits = user.deposits[depositKey] + sumOfDeposits;
        }
        if (sumOfDeposits < 2000 || user.deposits == undefined) {
            lessThan2000.push(user);
        }        
    }
    return lessThan2000;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
