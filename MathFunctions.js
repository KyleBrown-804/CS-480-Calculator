function clear() {}

function test() {
  alert("hello");
  document.getElementById("math_input") = "test";
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
