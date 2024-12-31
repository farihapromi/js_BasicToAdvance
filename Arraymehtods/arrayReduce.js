/*
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.
The reduce() method accepts a callback function, which is executed on each array element. The callback takes an accumulator as the first parameter, followed by the current element, its index, and the array which the method is called on.

The return value of each iteration is passed to the next one. So that the array is reduced to a single value. The second parameter of reduce() is the starting value of the accumulator. If not specified, accumulator takes the first array value and the iteration starts at index 1.

flatten an array ,converting a 2d/3d array into 1d array



*/
// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Summing up all the numbers in the array using reduce()
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

let arr2=numbers.map((curElem)=>curElem*2).filter((curElem)=>curElem>10).reduce((accumulator,curElem)=>{
    return accumulator+curElem;
});
console.log(arr2)
//sum.product jonno reduce use hoi