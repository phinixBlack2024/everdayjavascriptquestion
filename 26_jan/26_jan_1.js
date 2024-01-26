// Question
// Reverse a String
// is a classic coding challenge that requires reversing the order of characters in a given string.This problem tests your understanding of string manipulation and loops.
// Here's an example:

// Input: "Hello"
// Output: "olleH"
// To solve this problem, you need to iterate through the characters of the string and construct a new string in reverse order.This can be achieved using a loop (e.g., a for loop or a while loop) to iterate through the characters of the input string and concatenate them in reverse order to create the output string.

// This problem is commonly used to assess a candidate's ability to manipulate strings efficiently and use loop constructs effectively in programming.

// Edge cases

// 1: Empty String: Test the function with an empty string (""). This will help verify how your function handles edge cases where there are no characters to reverse.

// 2: String with Single Character: Test the function with a string containing only one character (e.g., "a"). This will check if your function correctly handles strings with minimal length.

// 3: String with Special Characters: Test the function with a string containing special characters (e.g., "!@#$%"). This will ensure that your function handles special characters correctly during the reversal process.

// 4: String with Unicode Characters: Test the function with a string containing Unicode characters (e.g., "😊🌟"). This will verify if your function handles Unicode characters properly and preserves their order during reversal.

// 5: String with Whitespace Characters: Test the function with a string containing whitespace characters (e.g., " "). This will help ensure that your function correctly handles whitespace characters and preserves their positions during reversal.
// 6 
//If you have two words like "hello world" and you're asked to reverse the entire string, the expected output would be:

// Input: "hello world"
// Output: "dlrow olleh"
const reverseString = (string) => {
    const trimStr = string.trim();
    if (!trimStr) {
        return string
    }
    const splitSentence = trimStr.split(" ");
   const newReveseString =  splitSentence.map(word => {
       return  word.split('').reverse().join('')
    })
    return newReveseString.reverse().join(" ");
}

const newString = reverseString("hello world&%^ 😊");
console.log(newString)