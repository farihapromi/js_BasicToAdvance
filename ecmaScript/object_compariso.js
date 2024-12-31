const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' };

console.log(obj1 === obj2); // false
console.log(obj1 == obj2); // false

// In JavaScript, objects are compared by reference, not by their content. Even if two objects have the same structure and properties, they are stored in different memory locations. Hence, they are not considered the same.
const person = { name: 'vinod', age: 30 };
