function tester(str) {
  
  // doesn't evaluate multi digit numbers, only singles
  //var postfix = shuntConversion(str).toString();

  var postfix = shuntConversion("33 + 6");

  console.log(postfix);
  // evaluatePostfix() appears to fully evaluate post fix notation (if given the correct postfix)
    // var please = ["13", "6", "+", "s"];
    // const result = evaluatePostfix(please);
    // console.log("result: ", result);
}

function shuntingYard(infix) {
  /**
   * ^ - pow | n - ln  | g - log | (level 3 precedence)
   * s - sin | c - cos | t - tan | o - cot (level 4 precedence, 3 might be sufficient)
   */
  let ops = {"+": 1,"-": 1,"*": 2,"/": 2,"^": 3,
            "n": 3, "g": 3, "s": 4, "c": 4, "t": 4, "o": 4};

  let peek = (a) => a[a.length - 1];
  let operandStack = [];
  let outputQueue = [];

}

//-- does not evaluate multi digit numbers, only single digit numbers --
// function shuntConversion(infix) {
//   /**
//    * ^ - pow | n - ln  | g - log | (level 3 precedence)
//    * s - sin | c - cos | t - tan | o - cot (level 4 precedence, 3 might be sufficient)
//    */
//   let ops = {"+": 1,"-": 1,"*": 2,"/": 2,"^": 3,
//             "n": 3, "g": 3, "s": 4, "c": 4, "t": 4, "o": 4};

//   let peek = (a) => a[a.length - 1];
//   let stack = [];

//   return infix
//     .split("")
//     .reduce((output, token) => {
//       if (parseFloat(token)) {
//         output.push(token);
//       }

//       if (token in ops) {
//         while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
//           output.push(stack.pop());
//         stack.push(token);
//       }

//       if (token == "(") {
//         stack.push(token);
//       }

//       if (token == ")") {
//         while (peek(stack) != "(") output.push(stack.pop());
//         stack.pop();
//       }

//       return output;
//     }, [])
//     .concat(stack.reverse())
//     .join(" ");
// }


// This function takes in a postfix expression and evaluates the result
function evaluatePostfix(expression) {
  
  // intializing stack
  let stack = [];

  for(let i = 0; i < expression.length; i++) {

    // if the element is not a nonumber (an operator, math, or trig function)
    if(isNaN(expression[i])) {

      // call to check which operation, also only pop one previous except for +, -, *, /, and ^   
      if (expression[i] == "+") {
        let a = stack.pop();
        let b = stack.pop();
        let res = b + a;
        stack.push(res);
      }
      else if (expression[i] == "-") {
        let a = stack.pop();
        let b = stack.pop();
        let res = b - a;
        stack.push(res);
      }
      else if (expression[i] == "*") {
        let a = stack.pop();
        let b = stack.pop();
        let res = b * a;
        stack.push(res);
      }
      else if (expression[i] == "/") {
        let a = stack.pop();
        let b = stack.pop();
        let res = b * a;
        stack.push(res);
      }

      // MATH FUNCTIONS
      else if(expression[i] == "^") {
        let a = stack.pop();
        let b = stack.pop();
        let res = Math.pow(b, a);
        stack.push(res);
      }
      else if(expression[i] == "n") {
        let a = stack.pop();
        let res = Math.log(a);
        stack.push(res);
      }
      else if(expression[i] == "g") {
        let a = stack.pop();
        let res = Math.log10(a);
        stack.push(res);
      }

      // TRIG FUNCTIONS
      else if(expression[i] == "s") {
        let a = stack.pop();
        let res = Math.sin(a);
        stack.push(res);
      }
      // add tan, cot, ln, log
      else if(expression[i] == "c") {
        let a = stack.pop();
        let res = Math.cos(a);
        stack.push(res);
      }
      else if(expression[i] == "t") {
        let a = stack.pop();
        let b = stack.pop();
        
        console.log(a, b);
        let res = Math.tan(a);
        stack.push(res);
      }
      else if(expression[i] == "o") {
        let a = stack.pop();
        let res = 1 / Math.tan(a);
        stack.push(res);
      }
      // Error occured and none of the above operators were found
      else {
        return -Infinity;
        
      }
    }

    // element is then an operand so it will be added to the stack
    else {
      stack.push(parseFloat(expression[i]));
    }
  }

  return stack[0];
}
