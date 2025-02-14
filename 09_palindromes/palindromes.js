// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  let cl = str.replace(/[^0-9a-z]/gi, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  return cl === cl.split("").reverse().join("");
}

// // Do not edit below this line
module.exports = isPalindrome;
/* 
/[^0-9a-z]/gi is the regular expression pattern, and it consists of several components:

/.../: This denotes the beginning and end of the regular expression.

[^0-9a-z]: This matches any character that is not a digit (0-9) or a lowercase letter (a-z).

^ inside square brackets [] acts as a negation, so it means "not any of the characters inside the brackets."

0-9 represents any digit.

a-z represents any lowercase letter.

gi: These are flags that modify the behavior of the regular expression:

g stands for "global," meaning the pattern should match all occurrences in the string, not just the first one.

i stands for "case-insensitive," meaning the pattern should match letters regardless of their case (uppercase or lowercase).
*/
