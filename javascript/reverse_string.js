function reverseString(str) {
  // type your code here
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  
   return reversed;

}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting 654321")
  console.log("=>", reverseString("123456"))

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

  //set reversed variable to empty array
  //iterate over the str variable, over each character in the word
  //return the order of the characters in reverse, from latest array position to nearest array position --> 01234 -> 43210
