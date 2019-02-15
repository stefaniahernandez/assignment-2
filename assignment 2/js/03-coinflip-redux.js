/*eslint-env browser*/

var coinFlip;
for (coinFlip = Math.round(Math.random); coinFlip < 10; coinFlip += 1) {
    document.write(coinFlip + "<br>");
}