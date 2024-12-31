const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      return; // Exit if the operator is invalid
  }
  console.log(`Result: ${result}`);
};

calculator(10, 20, "+");
