/*
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array
//differnce ebtween forEach and map
forEach=>return undefined
map=>returns a new array

*/

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr)

const myArray=numbers.map(num=>num%2==0)
console.log(myArray)
let myarr=numbers.map((curElem,index,arr)=>{
    return curElem<40;
})