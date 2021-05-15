//from stackoverflow
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

//changes the color
function randomBackgroundColor() {
    const newColor = '#' + genRanHex(6);
    console.log(newColor);
    document.body.style.backgroundColor = newColor
}


//sets handler function for onclick
document.querySelector('html').onclick = randomBackgroundColor;


