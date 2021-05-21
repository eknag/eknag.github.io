let score = 0;
let highScore = 0;
let xPos = 50;
let yPos = 50;
let positions = [[xPos,yPos]]
let scoreResetter = 0;

function randomInt(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function redrawGame(){
    score = 0;
    xPos = 50;
    yPos = 50;
    positions = [[xPos, yPos]];
    document.querySelector('h1').innerHTML = `Your Score is ${score}!`;
    document.getElementById('circle').style.top = `${xPos}%`;
    document.getElementById('circle').style.left = `${yPos}%`;
}
function resetGame(){
    if(score > highScore){
        highScore = score;
        document.getElementById('high-score').innerHTML = `High Score: ${highScore}`;
    }
    
    redrawGame();
    console.log("Game reset");
}

function randomizePositions(){
    xPos = randomInt(10,90);
    yPos = randomInt(10,90);
}

function buttonClicked() {
    //change global variables
    randomizePositions();
    positions.push([xPos,yPos]);
    score++;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mobile.html');
    xhr.onload = function () {
    document.getElementById("container").innerHTML = this.response;};
    xhr.send();

    //update the page
    document.querySelector('h1').innerHTML = `Your Score is ${score}!`;
    document.getElementById('circle').style.top = `${xPos}%`;
    document.getElementById('circle').style.left = `${yPos}%`;
    if (scoreResetter) {
        clearTimeout(scoreResetter);
    }
    scoreResetter = window.setTimeout(resetGame, 750);
}

document.getElementById('circle').onclick = buttonClicked;
