function myArray(array) {

    return array.join(', ' );


}

let yourArray = ["This", "is", "my", "array"];
console.log(myArray(yourArray))

// I found the "array.prototype.join" method on mozilla api to help me pass any array into my function and give me an output of the array's elements 
// and turn it into a string seperated by commas.

// Per your feedback: I added spaces to my string by putting a comma in the parantheses wrapped around quotation marks. 