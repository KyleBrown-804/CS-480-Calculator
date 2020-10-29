# CS-480-Calculator
CS 480 Lab 3 Scientific Calculator

Compatibility:
    This should be compatible with any modern browser. This was tested and 
    developed for google chrome, functionality should work for Firefox, Edge,
    Opera, and Safari as well. The only browser that does not support the ES6 features used
    or CSS styling such as Flex-Box is Internet Explorer.

    Important Note:
        Since this is created with HTML, CSS, and JavaScript there is no such
        thing as running from command line. The closest comparison is simply running 
        it normally in your web browser.

How To Use:
    This calculator can be run by opening the calculator.html file with your browser.
    Normally double clicking the .html file will open it in your default web browser.

    Input is given to the calculator via button presses and the current typed expression
    will appear at the top of the screen while the result will show upon the click of the
    calculate or "=" button.

Functionality:
    You can individually test each scientific function and regular expression.
    You will see that negation works by entering a "-" symbol before a number or expression
    and it will be interpreted appropriately based on what is before it.

    Expressions can be cleared completely by using AC "All-Clear" to clear the whole expression
    or alternatively using the backspace "<--" button.

    You will see a function automatically create a left parenthesis prior to the function such as
    "(sin", this is intended and is explained below, you will need to make sure however to match it with
    a closing parenthesis.

    Quirks:
        A few things have been modified or implemented differently due to time constraints.
        When multiplying a number or expression "a" by an expression (b+c), implicit adjacency is 
        not considered for multiplication so you must enter a * (b + c).

        You may notice when you enter trig functions you will see a left parenthesis appear before
        the function name such as "(sin" this was implemented to handle some postfix evaluation errors
        and if you are using a single number rather than an expression, (sin 7.8) for example, should 
        evaluate correctly. Mathematical errors will begin to occur if you make more compound or nested
        expressions, if you do not properly include an additional set of parenthesis such as (sin(5 * 9 + (tan(2) ) )).



