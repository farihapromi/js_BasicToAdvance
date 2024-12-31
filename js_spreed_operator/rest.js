const sum = (...numbers) => {
  return numbers.reduce((acc, curItem) => (acc = acc + curItem), 0);
};
console.log(sum(3, 4, 5));

//  a function defination can only have one rest parameter,and the rest parametr must be the last parameter in the function defination
// function wrong1(...one,...wrong){}
// function wrong2(...wrong,arg1,arg2){}

// A rest parameter must be last in a parameter list.t
