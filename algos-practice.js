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