// Collecting HTML elements
keyboard_elment = document.querySelector(".keyboard");
user_input_element = document.querySelector(".user_input value");
result_element = document.querySelector(".result value");

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
    value: "Math.pow", // POWER?
    type: "math_func",
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
    name: "divide",
    symbol: "÷",
    value: "/",
    type: "operator",
  },
  {
    name: "multiply",
    symbol: "x",
    value: "*",
    type: "operator",
  },
  {
    name: "add",
    symbol: "+",
    value: "+",
    type: "operator",
  },
  {
    name: "subtract",
    symbol: "-",
    value: "-",
    type: "operator",
  },
  {
    name: "decimal",
    symbol: ".",
    value: ".",
    type: "number",
  },
  {
    name: "delete",
    symbol: "←",
    formula: false,
    type: "key",
  },
  {
    name: "all-clear",
    symbol: "AC",
    value: false,
    type: "key",
  },
  {
    name: "calculate",
    symbol: "=",
    value: "=",
    type: "calculate",
  },
  {
    name: "0",
    symbol: "0",
    value: "0",
    type: "number",
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
];

let data = {
  expression: [],
};

function createKeyboard() {
  const buttons_per_row = 5;
  let added = 0;

  calc_buttons.forEach((button) => {
    if (added == buttons_per_row) {
      keyboard_elment.innerHTML += '<div class="row"></div>';
    }

    const row = document.querySelector(".row:last-child");
    row.innerHTML += '<button id="${button.name}">${button.symbol}</button>';
    addded++;
  });
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

function isValidKey(event) {
  // create regular expression "reg" to allow 0-9, / , * , +, -, . , ^, ( , ),
  // grab form string str

  //alert(reg.test(str)); // use to test that it evaluates true/false correct
  //return reg.test(str); // then this should either not allow, or allow those characters

  const iKeyCode = event.which || event.keyCode;
  if (iKeyCode >= 48 && iKeyCode <= 57) {
    event;
    return true;
  } else {
    return false;
  }
}
