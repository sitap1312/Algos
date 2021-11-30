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

// 10.Counting Sort 1
// Sample Input

// 100
// 63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 
// 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79
// 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22
// 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82
// 67 61 32 21 79 75 75 13 87 70 33
// Sample Output

// 0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 
// 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1
function countingSort(arr) {
  // Write your code here
  let freqCounter = {}


  for(let num = 0; num < 100; num++){
      freqCounter[num] = (freqCounter[num]++ || 0 ); 
      }
  for(let num of arr){
      freqCounter[num] = (freqCounter[num] || 0) + 1
  }
  return (Object.values(freqCounter))

}

// 11. Pangrams
// A pangram is a string that contains every letter of the alphabet. 
// Given a sentence determine whether it is a pangram in the English
// alphabet.Ignore case. Return either pangram or not pangram as
// appropriate.

// Example
// s = "The quick brown fox jumps over the lazy dog"
// The string contains all letters in the English alphabet, so return
// pangram.
// Sample Input 0
// We promptly judged antique ivory buckles for the next prize
// Sample Output 0
// pangram
// Sample Explanation 0
// All of the letters of the alphabet are present in the string.

// Sample Input 1
// We promptly judged antique ivory buckles for the prize
// Sample Output 1
// not pangram
// Sample Explanation 0
// The string lacks an x.
function pangrams(s) {
  // Write your code here
  let string = s.toLowerCase();
  let regx = /([a-z])(?!.*\1)/gi;
  let matchString = string.match(regx);
  
  if(matchString.length >= 26) {
      return 'pangram'
  } else {
      return 'not pangram'
  }

}

// 12. Permuting Two Arrays
// Sample Input

// STDIN       Function
// -----       --------
// 2           q = 2
// 3 10        A[] and B[] size n = 3, k = 10
// 2 1 3       A = [2, 1, 3]
// 7 8 9       B = [7, 8, 9]
// 4 5         A[] and B[] size n = 4, k = 5
// 1 2 2 1     A = [1, 2, 2, 1]
// 3 3 3 4     B = [3, 3, 3, 4]
// Sample Output

// YES
// NO
function twoArrays(k, A, B) {
  // let letterA = A.sort((a, b) => a - b);
  // let letterB = B.sort((a, b)=> b - a);
  // return A.every((n, i)=> n + B[i] >= k)?"YES":"NO";
  
  
  let letterA = A.sort((a, b) => a - b)
  let letterB = B.sort((a, b)=> b - a);
  let ayo;
  for(let i = 0; i < letterA.length; i++){
      if(letterA[i] + letterB[i] >= k){     
      ayo = "YES"
      }else {
          return ayo = "NO"
      }
  }
  return ayo
}

// 13.Subarray Division 1
// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example
// s = [2, 2, 1, 3, 2]
// d = 4
// m = 2
// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
function birthday(s, d, m) {
  // Write your code here
  let sum = 0;
  let temp = 0;
  let results = 0;
  if (s.length < m) return null;
  for (let i = 0; i < m; i++){
      sum += s[i]; 
  }
  if(sum === d){
          results++;
      }else{
          results;
      } 
  temp = sum;
  for (let i = m; i < s.length; i++) {
      temp = temp - s[i - m] + s[i]
          if(temp === d){
          results++;
      }else{
          results;
      }
  }
  return results;

}

// 14.XOR Strings 2
// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
// Sample Input

// 10101
// 00101
// Sample Output

// 10000
string strings_xor(string s, string t) {

  string res = "";
  for(int i = 0; i < s.size(); i++) {
      if(s[i] == t[i])
          res += '0';
      else
          res += '1';
  }

  return res;
}

// 15. What's the real floor?
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.
// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3
function getRealFloor(n) {
  
  if (n === 0 || n === 1) {
    return 0
  } else if (n >= 13) {
    return (n-2)
  } else if (n > 1 && n <= 12) {
      return (n-1)
  } else if (n < 0) {
      return n
  }
}

// 16. Even or Odd
function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

// 17. Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  // Code?
  if (num < 0) {
    return num
    
  } else {
    return (-Math.abs(num))
  }
  
}

// 18. Correct the mistakes of the character recognition software
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
function correct(string)
{
	// your code here
  return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S")
}

// 19.Convert a Boolean to a String
// Implement a function which convert the given boolean value 
// into its string representation.
function booleanToString(b){
  //your code here
  let String = b.toString()
  return String
}