var game = document.getElementById("game");
var character = document.getElementById("character");
var lastTick = Date.now();
var delta; // time between frames

// buttons
var btnLeft = 0;
var btnRight = 0;
var btnUp = 0;
var btnDown = 0;

// game loop
var mainLoop = setInterval(Main, 0);

// properties
var x = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
var y = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var speed = 120;

// INPUT PRESSED
document.addEventListener("keydown", event => {
        if (event.key==="ArrowLeft"){
            if (btnLeft === 0){
                btnLeft = 1;
            }
        }
        else if (event.key==="ArrowRight"){
            if (btnRight === 0){
                btnRight = 1;
            }
        }
        else if (event.key==="ArrowUp"){
            if (btnUp === 0){
                btnUp = 1;
            }
        }
        else if (event.key==="ArrowDown"){
            if (btnDown === 0){
                btnDown = 1;
            }
        }
    }
)

// INPUT RELEASED
document.addEventListener("keyup", event =>{
        if (event.key==="ArrowLeft"){
            if (btnLeft === 1){
                btnLeft = 0;
            }
        }
        else if (event.key==="ArrowRight"){
            if(btnRight === 1){
                btnRight = 0;
            }
        }
        else if (event.key==="ArrowUp"){
            if(btnUp === 1){
                btnUp = 0;
            }
        }
        else if (event.key==="ArrowDown"){
            if(btnDown === 1){
                btnDown = 0;
            }
        }
    }
)

function Main(){
    GetDeltaTime()
    Move();
    SetPosition();
}

function GetDeltaTime(){
    var now = Date.now();
    delta = (now - lastTick) * 0.001;
    lastTick = now;
    //console.log(now, ' ', delta);
}

function Move(){
    x += (btnRight - btnLeft) * speed * delta;
    y += (btnDown - btnUp) * speed * delta;
}

function SetPosition(){
    character.style.left = x + "px";
    character.style.top = y + "px";
}