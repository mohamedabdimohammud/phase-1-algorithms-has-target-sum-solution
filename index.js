function hasTargetSum(array, target) {
  // Write your algorithm here
  const numSet = new Set();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (numSet.has(complement)) {
      return true;
    } else {
      numSet.add(array[i]);
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this algorithm is O(n), linear time complexity, 
  since it loops through the array once.
*/

/* 
  - Initialize an empty Set
  - Loop through the input array
    - Calculate the complement of the current element with respect to the target
    - If the complement is already in the Set, return true
  - If no pair of elements in the array adds up to the target, return false
*/

/*
  The algorithm takes in an array of integers and a target integer, and it returns true if there exist two distinct elements in the array that add up to the target. It uses a Set data structure to store the integers as it loops through the array. For each integer, the algorithm checks if its complement with respect to the target (i.e., the difference between the target and the integer) is already in the Set. If it is, then the algorithm returns true since we have found a pair of integers that add up to the target. Otherwise, the algorithm adds the integer to the Set and continues looping. If the algorithm completes looping through the entire array without finding a pair of integers that add up to the target, then it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
