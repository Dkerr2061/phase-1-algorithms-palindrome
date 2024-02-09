function isPalindrome(word) {
  return (word.toLowerCase().split('').reverse().join('') === word.toLowerCase())
}

// isPalindrome('racecar')
/* 
  For this to work, the function is palindrome has to return true. This exercise is meant to test if the word is spelled the same forward or backwards
  to start I have to create a variable that will save the word going forward, then I have to vreate a new variable that will save the word backwards, then I will use strict equality to check and see if the words match and return true or false.
*/

/*
  I started by attaching the .toLowerCase() method to the word to make sure that all the characters passed for comparison were all in lower case. Then I used the .split('') method to split the word so the characters could be manipulated. From there I went ahead and used the .reverse() method to reverse the newly formed array of letters. Then I used the .join('') method to combine all the letters back into a single word. then I checked for strict equality after I used another .toLowerCase method on the word to ensure that all the characters in that word were lower case. Finally i returned the result. I did not use an if else statement or a ternary operatos since the function was going to return a boolean anyways.
*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
