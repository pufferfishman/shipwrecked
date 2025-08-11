let number = 0;
let cps = 0;
let clickValue = 1;
let clickMultiplier = 1;

function buttonClick() {
    number += clickValue * clickMultiplier;
}

let second = setInterval(() => {
    number += cps;
}, 1000);