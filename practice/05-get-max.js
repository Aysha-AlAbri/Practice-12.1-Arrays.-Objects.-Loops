// Task 5: getMax (Easy)
// Find the biggest number in an array (do not use Math.max).
//
// - Start with the first number, then compare every number with it.
// - Empty array: return null.

function getMax(numbers) {
  // your code

  
 let biggest= numbers[0] || null;

 for (const num of numbers){
  if (biggest < num) biggest = num;
  }
 return biggest
}


// Expected output:
console.log(getMax([3, 9, 4]));     // 9
console.log(getMax([-8, -2, -5]));  // -2
console.log(getMax([7]));           // 7
console.log(getMax([1, 1, 1]));     // 1
console.log(getMax([]));            // null
