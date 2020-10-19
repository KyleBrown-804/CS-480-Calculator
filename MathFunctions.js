// Collecting HTML elements
const keyboard_element = document.querySelector(".keyboard");
const user_input_element = document.querySelector(".user_input .value");
const result_element = document.querySelector(".result .value");

// Arrray of buttons names, symbols, evaluation equivalents, and type
let calc_buttons = [
  {
    name: "sin",
    symbol: "sin",
    value: "Math.sin( ",
    type: "trig_func",
  },
  {
    name: "cos",
    symbol: "cos",
    value: "",
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
    formula: false,
    type: "key",
  },
  {
    name: "tan",
    symbol: "tan",
    value: "",
    type: "trig_func",
  },
  {
    name: "cot",
    symbol: "cot",
    value: "",
    type: "trig_func",
  },
  {
    name: "open-paren",
    symbol: "(",
    formula: "(",
    type: "number",
  },
  {
    name: "close-paren",
    symbol: ")",
    formula: ")",
    type: "number",
  },
  {
    name: "ln",
    symbol: "ln",
    value: "Math.log",
    type: "math_func",
  },
  {
    name: "log",
    symbol: "log",
    value: "Math.log10",
    type: "math_func",
  },
  {
    name: "exponent",
    symbol: "^",
    value: "Math.pow",
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
    if(button.name == target_button.id) {
      onButtonPress(button);
    }
  });
});

// Button On Press Handler
function onButtonPress(button) {
  if(button.type == "operator") {

    calc_data.expression.push(button.symbol);
    calc_data.equiv_form.push(button.value);

  } else if(button.type == "number") {

    calc_data.expression.push(button.symbol);
    calc_data.equiv_form.push(button.value);

  } else if(button.type == "trig_func") {
    
  } else if(button.type == "mathy_func") {
    
  } else if(button.type == "key") {
    
    if(button.name == "all-clear") {

      calc_data.expression = [];
      calc_data.equiv_form = [];

      updateResultToScreen(0);

    } else if( button.name == "delete") {

      calc_data.expression.pop();
      calc_data.equiv_form.pop();

    }
  } else if(button.type == "calculate") {
    
    equiv_js_expression = calc_data.equiv_form.join('');

    try {
      let result = eval(equiv_js_expression);
      updateResultToScreen(result);
    }
    catch(error) {
      console.log(error);
    }

    // Testing syntax
    
    //checkSyntax();

  }

  updateInputToScreen(calc_data.expression.join(''));

}

// Updating the user input to the screen
function updateInputToScreen(expression) {
  user_input_element.innerHTML = expression;
}

function updateResultToScreen(result) {
  result_element.innerHTML = result;
}

function checkSyntax() {
  //return true / false?
}

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
