let xPos = 50;
let yPos = 50;
let positions = [[xPos,yPos]];

function randomInt(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function randomizePositions(){
    xPos = randomInt(10,90);
    yPos = randomInt(10,90);
}

for(let i = 0; i < 100; i++){
    randomizePositions();
    positions.push([xPos,yPos]);
}

console.log(positions);