let number = 0;
let cps = 0;
let clickValue = 1;
let clickMultiplier = 1;

function buttonClick() {
    number += clickValue * clickMultiplier;
    document.getElementById('score').innerText = number;
}

let second = setInterval(() => {
    number += cps;
    document.getElementById('score').innerText = number;
}, 1000);

// onClick for #button
document.getElementById('button').addEventListener('click', buttonClick);