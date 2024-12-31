// The JavaScript Set() method creates an object containing only unique values. To remove the duplicate elements we can use the set and then convert the object back to array to get the only unique values.const arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  //create a set to store unique items
  let a = new Set(arr);
  //copying those items into new array by spread operator
  let newArray = [...a];
  console.log(newArray);
}
const arr = [1, 2, 2, 3, 4, 4, 5];
removeDuplicates(arr);
