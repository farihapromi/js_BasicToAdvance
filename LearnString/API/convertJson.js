// convert object to string
var my_obj={key1:"fariga", age:25,address:'Dhaka'};
var objectToString=JSON.stringify(my_obj);
console.log(objectToString);
// output

// "key1":"fariha"
typeof(objectToString);
var stringToObject=JSON.parse(objectToString);
console.log(stringToObject);
typeof(stringToObject);