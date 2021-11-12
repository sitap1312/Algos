// 1. Tower Breaker

// Two players are playing a game of Tower Breakers!
// Player  always moves first, and both players always play optimally.
// The rules of the game are as follows:

// Initially there are n towers.
// Each tower is of height m.
// The players move in alternating turns.
// In each turn, a player can choose a tower of 
// height x and reduce its height to y, where 1 <= y < x and y 
// evenly divides x.
// If the current player is unable to make a move, they lose the game.
// Given the values of n and m, determine which player will win. 
// If the first player wins, return 1. Otherwise, return 2.

// Example. n=2

// There are 2 towers, each 6 units tall. 
// Player 1 has a choice of two moves:
// - remove 3 pieces from a tower to leave 3 as 6 modulo 3 =0
// - remove 5 pieces to leave 1

// Let Player 1 remove 3. Now the towers are 3 and 6 units tall.

// Player 2 matches the move. Now the towers are both 3 units tall.

// Now Player 1 has only one move.

// Player 1 removes 2 pieces leaving . Towers are 1 and 2 units tall.
// Player 2 matches again. Towers are both 1 unit tall.

// Player 1 has no move and loses. Return 2.
function towerBreakers(n, m) {
  // Write your code here
  if (n % 2 == 0 || m == 1) {
    return 2;
  }

  return 1;

}

// 2. Drawing Book
// Function Description

// Complete the pageCount function in the editor below.

// pageCount has the following parameter(s):

// int n: the number of pages in the book
// int p: the page number to turn to
// Returns

// int: the minimum number of pages to turn
function pageCount(n, p) {
  // Write your code here
let count = 0
let count2 = 0
let startPage = 1

while (startPage < p) {
  count++
  startPage = startPage + 2
}
if(n % 2 !==0) {
  startPage = n - 1;
} else {
  startPage = n
}

while (startPage > p) {
  count2++
  startPage = startPage - 2
}

if(count < count2) {
  console.log(count)
} else {
  console.log(count2)
}
}

// 3. Plus Minus
// Given an array of integers, calculate the ratios of
// its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 
// places after the decimal.

// Print
// Print the ratios of positive, negative and zero values in the 
// array.Each value should be printed on a separate line with  
// digits after the decimal.The function should not return a value.
function plusMinus(arr) {
  // Write your code here
  let posArr = arr.filter(x => x > 0).length / arr.length
  console.log(posArr.toFixed(6))
  let oddArr = arr.filter(y => y < 0).length / arr.length
  console.log(oddArr.toFixed(6))
  let zeroArr = arr.filter(z => z === 0).length / arr.length
  console.log(zeroArr.toFixed(6))  
}

// 4 . Mini-Max Sum
// Given five positive integers, find the minimum and maximum 
// values that can be calculated by summing exactly four of 
// the five integers.Then print the respective minimum and maximum
// values as a single line of two space - separated long integers.
// Print two space-separated integers on one line: 
// the minimum sum and the maximum sum of 4 of 5 elements.
function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  let max = arr.slice(1).reduce((a,b) => a + b);
  arr.reverse();
  let min = arr.slice(1).reduce((a,b) => a + b);
      console.log(min+ " " + max)
}

// 5. Time Conversion
// Given a time in 12 - hour AM / PM format, convert it to military
// (24 - hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
function timeConversion(s) {
  // Write your code here
  let newArr = s.split(':')
  let hours = newArr[0]
  let minutes = newArr[1]
  let seconds = newArr[2]
  
  if (hours === '12') {
    hours = '00';
  }
  
  if (seconds.includes('PM')) {
      hours = 12 + parseInt(hours, 10)
      seconds = seconds.replace('PM', '')
  } else {
      seconds = newArr[2].replace('AM','')   
  }
  return (`${hours}:${minutes}:${seconds}`)
  // if(seconds.include())
}

// 6. Sparse Arrays
// There is a collection of input strings and a collection of query
// strings.For each query string, determine how many times it occurs
// in the list of input strings.Return an array of the results.
// Sample Input 1
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab
// Sample Output 1
// 2
// 1
// 0
function matchingStrings(strings, queries) {
  // Write your code here
let results = []
let a = strings.map((string) => {
  return (string)
})

let b = queries.map((query) => {
  results.push((a.filter(x => x === query ).length))
})
return results
}

// 7. Lonely Integer
// Given an array of integers, where all elements but one occur twice,
// find the unique element.
// Example
// a = [1,2,3,4,3,2,1]
// The unique element is 4.
function lonelyinteger(a) {
  // Write your code here
  let b = a.slice().sort();
  let arr = []
  
  for (let i=0; i<b.length; i++) {
      if (b[i] != b[i+1]) {
          arr.push(b[i])
      } else {
          i++
      }
  }
  return arr;
}

// 8. Flipping bits
// You will be given a list of 32 bit unsigned integers.
// Flip all the bits(and) and return the result as an unsigned integer.
// Sample Input
// 3 
// 2147483647 
// 1 
// 0
// Sample Output
// 2147483648 
// 4294967294 
// 4294967295
function flippingBits(n) {
  let integer = ~n >>> 0
  return integer  
}

// 9. Diagonal Difference
// Given a square matrix, calculate the absolute difference 
// between the sums of its diagonals.
// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
function diagonalDifference(arr) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
//iterate thru arr with a map  
  let leftDiag = arr.map((x, index) => {
  let nums = (x[index])
  return nums
  })

  let sum1 = leftDiag.reduce(reducer)

  //sum returned arr


  let rightDiag = arr.map((x, index) => {
  let nums = (x[arr.length - 1 - index])
  return nums
  })
  let sum2 = rightDiag.reduce(reducer)
  let total = sum1 - sum2
  let absTotal = Math.abs(total)
  return absTotal;
}