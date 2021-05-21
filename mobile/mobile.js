let score = 0;
let highScore = 0;
let xPos = 50;
let yPos = 50;
let positions = [[xPos,yPos]]
let scoreResetter = 0;
//time to reset score
const initialResetTimer = 1500;
let resetTimer = initialResetTimer;


function drawResetTimer() {
    try {
        let tag = document.getElementById('reset-timer');
        tag.innerHTML = `Reset timer: ${resetTimer}ms`;
    } catch(error) {
        let tag = document.createElement("p");
        let text = document.createTextNode(`Reset timer: ${resetTimer}ms`);
        tag.appendChild(text);
        tag.id = 'reset-timer';
        let element = document.getElementById("body");
        element.appendChild(tag);
    }
}


function randomInt(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function drawGame(){
    drawResetTimer();

    document.querySelector('h1').innerHTML = `Your Score is ${score}!`;
    document.getElementById('circle').style.top = `${xPos}%`;
    document.getElementById('circle').style.left = `${yPos}%`;
}

function redrawGame(){
    score = 0;
    resetTimer = initialResetTimer;
    xPos = 50;
    yPos = 50;
    positions = [[xPos, yPos]];
    drawGame();
    
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
    let minPos = Math.floor(10+(50-10)*Math.pow(2,-score*1/5));
    let maxPos = Math.ceil(90 - (90-50)*Math.pow(2,-score*1/5));
    console.log(`min = ${minPos} and max = ${maxPos}`);
    xPos = randomInt(minPos,maxPos);
    yPos = randomInt(minPos,maxPos);
}

let randomColor = () => Math.floor(Math.random()*16777215).toString(16);

function randomizeCircleColor(){
    document.getElementById('circle').style.backgroundColor = `#${randomColor()}`;
}

function increaseDifficulty(){
    randomizePositions();
    resetTimer = Math.ceil(resetTimer * 0.95);
}
function buttonClicked() {
    //change global variables
    increaseDifficulty();
    randomizeCircleColor();
    positions.push([xPos,yPos]);
    score++;

    
    if (scoreResetter) {
        clearTimeout(scoreResetter);
    }

    //update the page
    drawGame();

    scoreResetter = window.setTimeout(resetGame, resetTimer);
}

document.getElementById('circle').onclick = buttonClicked;

drawResetTimer()
