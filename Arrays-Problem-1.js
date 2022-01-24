// Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.
// Example: If I pass in an array and the number 2, your function returns the first 2 elements in that arrays.


function returnArray(arr, num) {

    return arr.slice(0, num)

   
}

let myArray = ["Hello", "World", "How", "Are", "You", "Doing", "Today"]


console.log(returnArray(myArray, 2))

// I first created a function "returnArray" and gave it two paramaters "arr" and "num" as instructed. I then asked my funcition to return an array using the slice method, and 
// in the parantheses, you're supposed to put the starting value and the end value, in terms of what elements in the array you want to display. In this case, we want to 
// only return the first 2 elements as instructed. So the first value in the parantheses would be 0. The second value however would be the paramemter "num" because that way,
// I could pass any number and it would give me the requested elements. Outside of the function, I then made an array and used a variable to store my array. I then console logged
// my function and inside the function the arguments I passed were "myArray", and the "num" which refers to how many elements I would like to view in my array. In this question,
// it only asked for the first 2 elements so I entered "2" as the "num" value. After logging it to the console, the code worked.