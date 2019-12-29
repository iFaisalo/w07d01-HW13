​// ------ FOR ALL THE EXCERCISES ONLY USE ARROW FUNCTIONS  ----- //
​


​// ------ Exercise 1, Part A  ----- //

let swapCase = string => string.split (" ").map ((val, n, string) => (n % 2 === 0)? val.toUpperCase () : val).join (" ");

console.log (swapCase("hello stranger , what do we have today? ")); // => " HELLO stranger , WHAT do WE have TODAY ?"




​// ------ Exercise 1, Part B  ----- //

let shiftLetters = string => string.split ("").map ((val, i, string) => string.fromCharCode (val.charCodeAt () + 1)).join ("");

console.log (shiftLetters("abcxyz")); // => "bcdyz{"





​// ------ Exercise 2, Part A  ----- //

let suits = ["♥", "♣", "♦", "♠"];
let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
let deckOfCards = [];

suits.forEach ( suit => {
  ranks.forEach ( rank => {
    deckOfCards.push ( rank + " of " + suit ); } ); } );
console.log (deckOfCards); // => 'Ace of ♥' ... etc




​// ------ Exercise 2, Part B  ----- //

let revStr = str => str.split (" ").filter ((val) => val.length >= 3).reverse ().join (" ");

console.log (revStr ("iFaisalo. AKA Faisal, I'm Hello,")); // => "Hello, I'm Faisal, AKA iFaisalo."