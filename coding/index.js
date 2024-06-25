/*
Given two arrays of integers, write a function twistedArrayIntersection(arr1, arr2)
that returns an array containing the intersection of the two arrays.

However, instead of simply returning the common elements,
the twist is to add the index of the element in arr1 to the index of
the element in arr2 for each common element.

Create a function twistedArrayIntersection(arr1, arr2)
that takes two arrays of integers as input and returns an array of objects.

Each object should have:
value: the common element.
indexSum: the sum of the indices of this element in both arrays.
*/
export function twistedArrayIntersection(arr1, arr2) {
    const intersection = [];
    const seenInArr1 = {};
  
    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i];
      if (!(element in seenInArr1)) {
        seenInArr1[element] = i;
      }
    }
  
    for (let j = 0; j < arr2.length; j++) {
      const element = arr2[j];
      if (element in seenInArr1) {
        const index1 = seenInArr1[element];
        intersection.push({ value: element, indexSum: index1 + j });
        seenInArr1[element] = -1;
      }
    }
  
    return intersection;
  }
  


/*
You need to create an advanced accounting system that can handle basic transactions
with some added validation. The system should process a list of transactions,
calculate the final balance, and ensure that the balance never goes below zero.
Each transaction will either be a deposit or a withdrawal.

Create a function processTransactions(transactions) that takes an array of
transaction objects as input. Each transaction object should have:
type: a string that can be either "deposit" or "withdrawal".
amount: a positive integer representing the amount of the transaction.

The function should return the final balance after processing all transactions.
The initial balance is 0.
If a withdrawal causes the balance to go below zero, the transaction should be ignored,
and the function should continue processing the remaining transactions.
*/
export function processTransactions(transactions) {
    let balance = 0;
  
    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
  
      if (transaction.type === "deposit") {
        balance += transaction.amount;
      } else if (transaction.type === "withdrawal") {
        if (balance >= transaction.amount) {
          balance -= transaction.amount;
        }
      }
    }
  
    return balance;
  }
