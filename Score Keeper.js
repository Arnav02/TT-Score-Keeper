const p1 = document.querySelector('#p1btn');
const p2 = document.querySelector('#p2btn');
const reset = document.querySelector('#reset');
let p1Display = document.querySelector('#one');
let p2Display = document.querySelector('#two');
const matches = document.querySelector('#matches');
let p1Score = 0;
let p2Score = 0;


p1.addEventListener('click', function (e) {
    p1Score += 1;
    p1Display.innerText = p1Score;
    let no = matches.value;
    if (p1Score == no) {
        p1Display.classList.toggle('green');
        p2Display.classList.toggle('red');
        p1.classList.toggle('disabled');
        p2.classList.toggle('disabled');

    }
})
p2.addEventListener('click', function (e) {
    p2Score += 1;
    p2Display.innerText = p2Score;
    let no2 = matches.value;
    if (p2Score == no2) {
        p2Display.classList.toggle('green');
        p1Display.classList.toggle('red');
        p2.classList.toggle('disabled');
        p1.classList.toggle('disabled');

    }
})
reset.addEventListener('click', function () {
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Score = 0;
    p2Score = 0;
    p1.classList.remove('disabled');
    p2.classList.remove('disabled');
    p1Display.classList.remove('red');
    p1Display.classList.remove('green');
    p2Display.classList.remove('red');
    p2Display.classList.remove('green');
})