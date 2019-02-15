/*eslint-env browser*/    

var x = window.prompt("Enter a number between 1 and 5.");
    var y = window.prompt("Enter another number between 1 and 5.");
    if (x > y) {
        window.document.write(x + " is greater than " + y + ".");
    } if (y > x) {
        window.document.write(y + " is greater than " + x + ".");
    } else {
        window.document.write(x + " and " + y + " are equal.");
    }