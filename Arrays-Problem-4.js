// Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).

function removeDuplicates(arr) {
    let yourArray = [];

    for(i=0; i <arr.length; i++) {
        if(yourArray.indexOf(arr[i]) === -1) {
            yourArray.push(arr[i])
        }
    }

    return yourArray
}

console.log(removeDuplicates([1,5,5,6,6,9,11,12]))

// First thing I did was make a function and pass an array as a parameter. I then created an empty array called "yourArray" to store the elements that are not dupilcates.
// I then created a for loop. The purpose behind the for loop is to iterate through the array parameter and check yourArray (which is empty at the moment), and check the indexOf
// the array parameter to see if it is equal to -1. We want to know if it's equal to -1 because if it's equal to -1, then that the element has already been identified and 
// it has been identified again because the indexOf method only returns the FIRST index of a given element. So if it already returned it, then it would not count therefor
// the dupilcate element is "not found". I then pushed the elements that dont have duplicates into the empty array "yourArray", and made sure for the function to return yourArray.
// I then console logged the function "removeDuplicates" and passed an array with duplicates and found that my code passed. 