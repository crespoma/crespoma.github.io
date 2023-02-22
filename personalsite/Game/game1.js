
// variables
const canvas = document.getElementById("myCanvas");
let score = 0;
let maxscore = 5;
let ballspeed = 1.25;
const ctx = canvas.getContext("2d");
let ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;
let scoreboard = document.getElementById("gamepad");
let buttons = document.querySelectorAll("button");
let player = document.getElementById('player');
let enemy = document.getElementById('4finger');


// was Trying some images inside of the ball and paddle.

//let ppat = ctx.createPattern(player, "no-repeat");
//let epat = ctx.createPattern(enemy,"no-repeat");


// TODO
// Long bar turns into every hit, so i can lower the speed itteration.







// event listeners, arrow key left, arrow key right
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
buttons[0].addEventListener("click", restart);

// function to reload page and restart game
function restart(){
    document.location.reload();
}


// eventlisteners to move paddle left and right
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}



// draws our one ball
function drawBall() {
    
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
   ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}
// draws our paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#110606";
    ctx.fill();
    ctx.closePath();
}
// adds our score counter to display
function drawScoreBoard(){
    scoreboard.textContent = "Score: " + score;

    
}


// game code
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawScoreBoard();
    // condition to check if you have won or lost.
    if (score == maxscore){
        scoreboard.textContent += " Winner!";
        clearInterval(interval);
        }
   

    
    
    // if collides with left/right wall, comes back.
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // if collides with cieling of canvas, sends back
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if ( y + dy > canvas.height - ballRadius){
        // if ball touches player controlled paddle, add a point, and send ball back to other direction
        // increase speed, could be a better way?
      if (x>paddleX && x<paddleX + paddleWidth){
        dy=-dy*ballspeed;
        paddleWidth-=10;
        score++;
        

        
        
       
        
      } 

      // if ball falls below player paddle, youve lost! update scoreboard
      else {
            if (score<maxscore){
        scoreboard.textContent += " Loser!";
         }
       
        clearInterval(interval);
        }
            
            
        
     }
    
        
    
    // paddle movement.
    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
    
    x += dx;
    y += dy;

   
    
}

let interval = setInterval(draw,10);





