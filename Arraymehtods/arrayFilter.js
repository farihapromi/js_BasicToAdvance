/*
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.

//The map method transforms each element of an array and creates a new array with the transformed values, while the filter method creates a new array by selecting only the elements that satisfy a specified condition.


*/
const ages = [32, 33, 16, 40];
let newAge=ages.filter((age)=>{
    return age<30
})
console.log(newAge)