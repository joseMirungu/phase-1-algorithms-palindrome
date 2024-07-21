function isPalindrome(word) {
  // Reverse the string
  const reversedWord = word.split('').reverse().join('');
  // Compare the original string with the reversed string
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Define a function `isPalindrome` that takes a string `word`.
  2. Reverse the string `word` and store it in a variable.
  3. Compare the original string `word` with the reversed string.
  4. If they are the same, return `true`; otherwise, return `false`.
*/

/*
  Explanation:
  The function `isPalindrome` checks if a given word is a palindrome. 
  A palindrome is a word that reads the same forwards and backwards. 
  To determine this, the function reverses the input word and compares 
  it to the original word. If both are identical, the word is a palindrome 
  and the function returns `true`. Otherwise, it returns `false`.
*/


if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
