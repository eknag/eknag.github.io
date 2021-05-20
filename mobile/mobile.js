let score = 0;
let xPos = 50;
let yPos = 50;

function randomInt(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}


function buttonClicked() {
    xPos = randomInt(10,90);
    yPos = randomInt(10,90);
    score++;
    document.querySelector('h1').innerHTML = `Your Score is ${score}!`;
    document.getElementById('circle').style.top = `${xPos}%`;
    document.getElementById('circle').style.left = `${yPos}%`;
}

document.getElementById('circle').onclick = buttonClicked;
