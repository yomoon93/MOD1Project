/* The setup we connet the variable (table) to the ID tennis
We also use getContext which is method that returns a drawing context on the canvas
the value 2D leads to the creation of a 2d object representing a two dimensional rendering context 
*/
const table = document.getElementById("tennis");
const circleText = table.getContext("2d")

/*
We create four objects to describe different things about which component in the game
The game uses a lot of math to make the game as percise as possible but also we create everything here to and we call
upon it in our function that we create later in the code.
What we create in the canvas is 600 width 400 height table we use this

*/
const user = {
    x:0,
    // the y takes half the height of the paddle which is 100 and half the height of the table
    y: table.height/2 - 100/2,
    width : 10, 
    height : 100,
    color:"PURPLE",
    score: 0
}
console.log(user.y)
// create the computer padde
// the minus 10 is for the width of the paddle which is 10 this is the position of the paddle
const com = {
    x: table.width - 10,
    y: table.height/2 - 100/2,
    width : 10, 
    height : 100,
    color: "GREEN",
    score: 0
}
/*
We want the ball to be in the middle so we use the table width, and length
from the ball itself we take the radius
we use many math properties to make the circle at the end
*/

const ball = {
    x : table.width/2,
    y: table.height/2,
    radius :10,
    speed: 5,
    velocityX : 5,
    velocityY : 5,
    color: "BLUE"
}

//
const net = {
    x:table.width/2 -1, //table.width-1
    y:0,
    width:2,
    height:10,
    color : "RED"
}
/*
The fillRect basically uses the x, and y poistion and the width and height 
*/
function draw(x,y,w,h,color){
    circleText.fillStyle = color
    circleText.fillRect(x,y,w,h)
}




function drawNet(){

//using the class net we take the x, y , width, height and color to create the iteration
// in the iteration its 10 first because of the height and after draw a gap and so on
    for(let i = 0; i <= table.height; i+=20){
        draw(net.x, net.y + i, net.width, net.height, net.color)
    }
}

/*
When drawing the circle we have to start by 
making the actually drawing we use beginPath to start the drawing
and we use arc to actually draw the circle which is why Math.PI*2 is used
Math.PI*2 is 360 degrees the radius is whatever we make and the start angle is also anything we
choose we started the path we also have to close it and we do it by saying
closePath and after filling the circle
*/
function drawCircle(x,y,r,color){
circleText.fillStyle = color
circleText.beginPath();
circleText.arc(x,y,r,0,Math.PI*2,false);
circleText.closePath()
circleText.fill()
}





function drawText(text,x,y,color){
    circleText.fillStyle = color
    circleText.font ="45px fantasy"
    circleText.fillText(text,x,y)
}


/*
To make the illusion of the ball moving we make a render function and set an interval of 
1 sec with a framerate of 50 this gives the illsion of the ball moving because every time 
the ball moves the last position gets deleted and the new position gets created


*/
function render(){
    draw(0,0,table.width,table.height, "PINK");
    //draw the net
    drawNet()
/*
when x axis is zero we want the break thetable into 4 columns so depending 
where we want the score to end up we divide the width by 4 and each column 
multiplying by one till you get to four
on the y axis we do the same set up but now for rows

*/
    drawText(user.score, table.width/4, table.height/5,"YELLOW")
    drawText(com.score,3*table.width/4,table.height/5,"ORANGE")

    draw(user.x, user.y,user.width,user.height,user.color);
    draw(com.x, com.y,com.width,com.height,com.color);

    drawCircle(ball.x,ball.y,ball.radius, ball.color)

}
// control users paddle
table.addEventListener("mousemove", movePaddle);

function movePaddle(evt){
    let rect = table.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height/2
}
/*
the collision is based on the outer part of the ball 
 (ball y) which is the center of the ball and ball(y) plus 
 ball radius which is the outer part we take that and make a logic
 where where if the ball(y) + ball radius is greater then the height
 velocity
*/

function collision(b,p) {
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius
    b.right = b.x + b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right =p.x + p.width

    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom
/*
so we 

*/
}


//reset ball
function resetBall(){
    ball.x = table.width/2
    ball.y = table.height/2


    ball.speed = 5;
    ball.velocityX = -ball.velocityX
}



//update : pos,mov, score
/*
the update lets us know where the ball is and whos 
getting the points and where 
the ball is going
when the collision occurs
*/
function update(){
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    //simple AI to control the com paddle
    let computerLevel = 0.1;
    com.y += (ball.y - (com.y + com.height/2)) * computerLevel


// the first part of the if is for the bottom part of the table the second part is for the top
    if(ball.y + ball.radius > table.height || ball.y - ball.radius < 0){
        ball.velocityY = -ball.velocityY
    }    // this player variable lets us know whos who in the game depending on which side the ball is at
    let player = (ball.x < table.width/2) ? user : com;
    if (collision(ball,player)){
        //where the ball hit the player
        let collidePoint = (ball.y - (player.y + player.height/2));
        // this lets us know it was hit in the middle of the paddle^
        //normalization
        collidePoint = collidePoint/(player.height/2)
            // when it hits the sides of the paddle it will come back at 45 degree 
        let angleRad = collidePoint * Math.PI/4
        //X direction of the ball when hit
        let direction = (ball.x < table.width/2) ? 1 : -1;

        /*
        Depending on VelocityX and velocityY we know what directin the
        ball will go if x is positive and y is negative the direction is to the left 45 degrees
        if x is 5 and y is 0 it will straight
        and last but not least the if x is postive and y is positive it will got right
        at 45 degrees
        */
        
        //change vel X and Y
        /*
        cos = ball.velocityX/ball.speed
        sin = ball.velocityY/ball.speed
        ball velocityX and ball velocityY is what allows the paddles to get 
        the right angles when the ball collides with the paddle
        the velocityX is dependent on direction velocityY is not 

    
        */
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY =  ball.speed * Math.sin(angleRad);
        //everytime the ball hit a paddle,we increase its speed
       ball.speed += 0.5;
    }

//update the score

    if(ball.x - ball.radius < 0){
        com.score++;
        resetBall();
    }else if(ball.x + ball.radius >table.width){
        user.score++;
        resetBall();
    }

}


function game(){
    update(); // this call the movementsm, collision detection,score update 
    render();

}

const framePerSecond = 50;
setInterval(game,1000/framePerSecond)// call game 50 times every 1000ms which is 1 sec
render()