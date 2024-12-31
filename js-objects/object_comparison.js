//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

const areObjectsEqual = (obj1, obj2) => {
  if (obj1.length != obj2.length) {
    console.log("hi");
    return false;
  }
  let o1 = Object.keys(obj1);
  let o2 = Object.keys(obj2);

  if (o1.length != o2.length) {
    console.log("There keys are not same");
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

// // Example usage:
let objA = { name: "Alice", age: 26, city: "New York" };
let objB = { name: "Alice", age: 26, city: "New York" };
let objC = { name: "Bob", age: 30, city: "San Francisco" };

console.log(areObjectsEqual(objA, objB)); // Should return true
console.log(areObjectsEqual(objA, objC)); // Should return false
