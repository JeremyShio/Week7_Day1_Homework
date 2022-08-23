/*
    Week 7 - Day 1 - JavaScript Homework Exercises
*/








//--------------------------------- Exercise: 1 ---------------------------------//

/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.


    exerciseOneArr = [1, 2, 3, 5, 6, 7]

    exerciseOneTestArr = [5, 6, 7, 8, 9, 10]
*/


//--------- Notes/Psuedo Code ---------//

/*
    Start at first index and parse through array.
    Check if next index value is (+1) consecutive.
    Return non-consecutive value's index.
    If array is all consecutive return false.
*/

//--------- Exercise: 1 Code ---------//


// Function to find non-consecutive num in array //
function nonConsecutive(arr){
    // Set num to 0 (start) and if num is in the arr... //
    for(let num = 0; num < arr.length - 1; num++){  // ...Then we use the value of num for the function then increase it by 1 //
        // If the difference between the consecutive numbers in the array is not 1 //
        if(arr[num + 1] - arr[num] !== 1){
            // Then we return the index of the non-consecutive number //
            return num + 1;
        };
    };
    // Else we return false, because the arrangement is consecutive //
    return false;
};


// Test function: Check for non-consecutive in arr //
console.log('Exercise: 1')
console.log('Before function')
exerciseOneArr = [1, 2, 3, 5, 6, 7]
console.log('After function')
console.log(nonConsecutive(exerciseOneArr));
// Output: 3 -- main.js:52 3 //

// Test function: On arr that is consecutive //
console.log('Before function')
exerciseOneTestArr = [5, 6, 7, 8, 9, 10]
console.log('After function')
console.log(nonConsecutive(exerciseOneTestArr));
// Output: false -- main.js:57 //








//--------------------------------- Exercise: 2 ---------------------------------//

/*
    Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.


    numbers1 = [10, 12, -9, 3, -1, 0, 15] 

    numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 


    Example 1:
    Input: [10, 12, -9, 3, -1, 0, 15] 
    Output: 40
    Explain: 10 + 12 + 3 + 15 = 40

    Example 2:
    Input: [3, 5, 7, 9, -10, 2, -22, -1] 
    Output: 26


    Note: if there is nothing to sum, the sum is default to 0.
*/


//--------- Notes/Psuedo Code ---------//

/*
    Sort the array.
    If num in array is greater than 0.
    Add to new list for positive nums.
    Return sum of positive nums list.
    If no positive nums in array return false.
*/

//--------- Exercise: 2 Code ---------//


const numbers1 = [10, 12, -9, 3, -1, 0, 15]
console.log('Before applying sorting...')
console.log(numbers1);


// .sort function must be used in tandem with differntial in order to sort the arr properly (not as 'powerful' as Python sorting -- needs some direction)
numbers1.sort(function(a, b){
    return a - b
});
// Note: If we .sort in descending order, we would return (b - a) instead!
console.log('First sorting')
console.log(numbers1);


// .sort with arrow function (still needs differential in order to sort array)
numbers1.sort((a, b) => {
    return a - b
});
console.log('Second sorting (same but different way of sorting)')
console.log(numbers1);


// Function to find all positive nums
function allPositiveNums(arr){
    // array to hold positive nums before sum
    let goodNumbers = []
    // for num in arr
    for(let num of arr){    // Note: 'of' is for arrays ('in' is for objects)
        // If num is greater than 0
        if(num > 0){
            // Then we push num to our new arr for positive nums
            goodNumbers.push(num)
        };
    };
    // Return sum of good numbers with .reduce (used in tandem with sum in order to add arr)
    return goodNumbers.reduce((a, b) => a + b, 0)
};
// Test function: allPositiveNums
console.log('Exercise: 2')
console.log(allPositiveNums(numbers1))








//--------------------------------- Notes ---------------------------------//

// Jeremy function

/*
    function jeremy(param){code to execute};
*/

// Difference is that function can be (hoisted) called before it's creation... the lines of code above


// Also Jeremy function

/*
    const jeremy2 = (param) => {code to execute};
*/

// Difference is that const (arrow functions) can not be called before it's creation (hoisting)
