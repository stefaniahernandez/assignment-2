/*eslint-env browser*/ 

var coinFlip = Math.round(Math.random);
var choice = window.prompt("Heads or tails?");
if (choice === "heads" && coinFlip === 0) {
    window.alert("The flip was heads, and you chose heads... you win!");
} else if (choice === "heads" && coinFlip === 1) {
    window.alert("The flip was tails, and you chose heads... you lose.");
} else if (choice === "tails" && coinFlip === 1) {
    window.alert("The flip was tails, and you chose tails... you win!");
} else {
    window.alert("The flip was heads, and you chose tails... you lose.");
}
