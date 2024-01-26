
// Certainly! The problem "Find the Missing Number in an Array" involves finding the missing number in an array of integers. The array is expected to contain a sequence of consecutive integers starting from 1, but one of the numbers is missing. Your task is to determine which number is missing.

// Here's an overview of the concept involved:

// 1: Array Manipulation: The problem revolves around manipulating an array of integers. You need to iterate through the array to perform necessary operations.

// 2: Loops: A loop (e.g., a for loop) is typically used to iterate through the elements of the array. This allows you to examine each element and perform operations accordingly.

// 3: Arithmetic: The solution often involves using arithmetic operations to determine the missing number. By considering the sequence of consecutive integers, you can use arithmetic to calculate the sum of all integers up to a certain value and compare it with the actual sum of the elements in the array to find the missing number.

// Overall, solving this problem requires a combination of array manipulation, looping through the array, and applying arithmetic operations to identify the missing number. It's a common problem in coding interviews that tests your ability to work with arrays, loops, and arithmetic concepts effectively.

//4. Suppose you're given an array [1, 5, 7, "a", 10], where some elements are non-integer values. Your task is to find the missing number in the sequence of consecutive integers present in the array.

const findMissingNumbers = (array) => {
    if (array.length === 0) {
        return "No missing numbers found";
    }

    const result = [];
    const numbersMap = {};

    for (const element of array) {
        if (typeof element === 'number' && Number.isInteger(element) && element > 0) {
            numbersMap[element] = (numbersMap[element] || 0) + 1;
        }
    }

    let currentNumber = Math.min(...array);
    const upperBound = Math.max(...array);

    while (currentNumber <= upperBound) {
        if (!numbersMap[currentNumber]) {
            result.push(currentNumber);
        }
        currentNumber++;
    }

    return result.length === 0 ? "No missing numbers found" : result;
};

const arrayOfMissingValue = findMissingNumbers([-1, 2, 3, 4, 4, 6]);
console.log(arrayOfMissingValue); // Output: [5, 7]
