// Collecting HTML elements
const keyboard_element = document.querySelector(".keyboard");
const user_input_element = document.querySelector(".user_input .value");
const result_element = document.querySelector(".result .value");

// Arrray of buttons names, symbols, evaluation equivalents, and type
let calc_buttons = [
  {
    name: "sin",
    symbol: "sin",
    value: "s (",
    type: "trig_func",
  },
  {
    name: "cos",
    symbol: "cos",
    value: "c (",
    type: "trig_func",
  },
  {
    name: "all-clear",
    symbol: "AC",
    value: false,
    type: "key",
  },
  {
    name: "delete",
    symbol: "←",
    value: false,
    type: "key",
  },
  {
    name: "tan",
    symbol: "tan",
    value: "t (",
    type: "trig_func",
  },
  {
    name: "cot",
    symbol: "cot",
    value: "o (",
    type: "trig_func",
  },
  {
    name: "open-paren",
    symbol: "(",
    value: "(",
    type: "number",
  },
  {
    name: "close-paren",
    symbol: ")",
    value: ")",
    type: "number",
  },
  {
    name: "ln",
    symbol: "ln",
    value: "n (",
    type: "math_func",
  },
  {
    name: "log",
    symbol: "log",
    value: "g (",
    type: "math_func",
  },
  {
    name: "exponent",
    symbol: "^",
    value: "^ (",
    type: "math_func",
  },
  {
    name: "divide",
    symbol: "÷",
    value: "/",
    type: "operator",
  },
  {
    name: "7",
    symbol: "7",
    value: "7",
    type: "number",
  },
  {
    name: "8",
    symbol: "8",
    value: "8",
    type: "number",
  },
  {
    name: "9",
    symbol: "9",
    value: "9",
    type: "number",
  },
  {
    name: "multiply",
    symbol: "x",
    value: "*",
    type: "operator",
  },
  {
    name: "4",
    symbol: "4",
    value: "4",
    type: "number",
  },
  {
    name: "5",
    symbol: "5",
    value: "5",
    type: "number",
  },
  {
    name: "6",
    symbol: "6",
    value: "6",
    type: "number",
  },
  {
    name: "subtract",
    symbol: "-",
    value: "-",
    type: "operator",
  },
  {
    name: "1",
    symbol: "1",
    value: "1",
    type: "number",
  },
  {
    name: "2",
    symbol: "2",
    value: "2",
    type: "number",
  },
  {
    name: "3",
    symbol: "3",
    value: "3",
    type: "number",
  },
  {
    name: "add",
    symbol: "+",
    value: "+",
    type: "operator",
  },
  {
    name: "0",
    symbol: "0",
    value: "0",
    type: "number",
  },
  {
    name: "decimal",
    symbol: ".",
    value: ".",
    type: "number",
  },
  {
    name: "calculate",
    symbol: "=",
    value: "=",
    type: "calculate",
  },
];

let calc_data = {
  expression: [],
  equiv_form: [],
};

// Function that neatly distributes buttons in rows
function createKeyboard() {
  const buttons_per_row = 4;
  let added = 0;

  calc_buttons.forEach((button) => {
    if (added % buttons_per_row == 0) {
      keyboard_element.innerHTML += `<div class="row"></div>`;
    }

    const row = document.querySelector(".row:last-child");
    row.innerHTML += `<button id="${button.name}">
                      ${button.symbol}
                      </button>`;
    added++;
  });
}

// Populates keys across the keyboard
createKeyboard();

// Button Click Event Listener
keyboard_element.addEventListener("click", (event) => {
  const target_button = event.target;

  calc_buttons.forEach((button) => {
    if (button.name == target_button.id) {
      onButtonPress(button);
    }
  });
});

// Button On Press Handler
function onButtonPress(button) {

  // updates input operators
  if (button.type == "operator") {
    calc_data.expression.push(button.symbol);
    calc_data.equiv_form.push(button.value);
  } 
  
  // updates input numbers and ()'s
  else if (button.type == "number") {
    calc_data.expression.push(button.symbol);
    calc_data.equiv_form.push(button.value);
  } 
  
  // updates screen input for trig functions
  else if (button.type == "trig_func") {
    if(button.name == "sin") {
      calc_data.expression.push("sin(");
      calc_data.equiv_form.push(button.value);
    }
    else if(button.name == "cos") {
      calc_data.expression.push("cos(");
      calc_data.equiv_form.push(button.value);
    }
    else if(button.name == "tan") {
      calc_data.expression.push("tan(");
      calc_data.equiv_form.push(button.value);
    }
    else if(button.name == "cot") {
      calc_data.expression.push("cot(");
      calc_data.equiv_form.push(button.value);
    } 
  } 
  
  // updates screen input for math functions
  else if (button.type == "math_func") {
    if(button.name == "log") {
      calc_data.expression.push("log(");
      calc_data.equiv_form.push(button.value);
    }
    else if(button.name == "ln") {
      calc_data.expression.push("ln(");
      calc_data.equiv_form.push(button.value);
    }
    else if(button.name == "exponent") {
      calc_data.expression.push("^(");
      calc_data.equiv_form.push(button.value);
    }
  } 
  
  // updates input for other keys
  else if (button.type == "key") {
    if (button.name == "all-clear") {
      calc_data.expression = [];
      calc_data.equiv_form = [];
      updateResultToScreen(0);

    } else if (button.name == "delete") {
      calc_data.expression.pop();
      calc_data.equiv_form.pop();
    }
  } 
  
  // updates input for calculate "=" button
  else if (button.type == "calculate") {
    console.log("calc_data: ", calc_data.equiv_form);

    let equiv_js_expression = calc_data.equiv_form.join(""); // issue
    onCalculatePress(equiv_js_expression);
  }

  //testing to view the equivalent js expression as it forms
  console.log("equivalent: ", calc_data.equiv_form.join(''));

  updateInputToScreen(calc_data.expression.join(""));
}

/**
 * Special calculate button press that handles error checking and 
 * expression evaluation when the user clicks "=".
 */
function onCalculatePress(expression) {
  console.log("Expression on calc: ", expression);

  console.log("--------TEST POSTFIX----------");
    tester(expression);
  console.log("------------------------------");

  // Testing for syntax
  let isSyntaxError = checkSyntax();
  console.log("Syntax error? ", isSyntaxError);

  // Testing for number size overflow (check for is == Infinity and is == -Infinity)
  let isOverflow;
  
  // Testing for non real numbers (negative in a square root) check for NaN? (operation couldn't be done)
  let isImaginary;

  // Checking if any errors are flagged and passing the appropriate error message
  if (isSyntaxError) {
    updateResultToScreen("Syntax Error!");
  } 
  
  else {
    let result = eval(expression);
    updateResultToScreen(result);
  }
}

// Updating the user input to the screen
function updateInputToScreen(expression) {
  user_input_element.innerHTML = expression;
}

function updateResultToScreen(result) {
  result_element.innerHTML = result;
}


/**
 * --------------------------------------------
 * -- Error Checking Functions ---
 * --------------------------------------------
 */

// FIX ISSUES WITH COUNTING PARENTHESES

function checkSyntax() {
  let error = false;

  let leftParen = 0;
  let rightParen = 0;

  // Checks if matching amount of parentheses
  // calc_data.expression.forEach(function (elem) {
  //   if (elem === "(") {
  //     leftParen++;
  //   } else if (elem === ")") {
  //     rightParen++;
  //   }
  // });

  // if (leftParen != rightParen) {
  //   console.log("left ", leftParen, " right", rightParen);
  //   error = true;
  // }

  // Checks for empty parentheses
  // for (let i = 1; i < calc_data.expression.length; i++) {
  //   if (
  //     calc_data.expression[i - 1] === "(" &&
  //     calc_data.expression[i] === ")"
  //   ) {
  //     error = true;
  //   }

  // }

  return error;
}

/**
 * --------------------------------------------
 * -- Utility Functions ---
 * --------------------------------------------
 */
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
};

function radToDeg(rad) {
  return rad / (Math.PI / 180);
};

// Caclulates the factorial of a number with a check to prevent overflow
function factorial(num) {
  if (num === 0 || num === 1) return 1;

  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= fact * i;
    if (fact === Infinity) return Infinity;
  }

  return fact;
}
