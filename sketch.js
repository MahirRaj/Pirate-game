const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world , tower , ground , cannon , backgroundImg;
var cannonBall;
var balls = [];
var boat;
var boats = [];

function preload(){
    backgroundImg = loadImage("assets/background.gif");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tower = new Tower(150,350,160,310);
 
    ground = new Ground(600,590,1600,20);

    cannon = new Cannon(180,110,100,50,-PI/4);

   
    
}

function draw(){
    background(0);
    image(backgroundImg,0,0,1200,600);
    Engine.update(engine);
   
    tower.display();
    ground.display();
    cannon.display();

    for(var i=0 ; i<balls.length; i += 1){
       showCannonBalls(balls[i],i);
       collisionWithBoat(i);
    }

   showBoats();

}

function showCannonBalls(ball,index){
    ball.display();
    /*If cannonball's x position is greater than width or cannon ball position y is greater than height -50 
    thwn 
    remove the body from the world
    remove the ball from the balls array*/
    if(ball.body.position.x>width || ball.body.position.y>height-100){
    World.remove(world,ball.body);
    balls.splice(index,1);
    }
}


function keyReleased(){
    if(keyCode === DOWN_ARROW){
        balls[balls.length-1].shoot();
    }
}

function keyPressed(){
    if(keyCode === DOWN_ARROW){
        cannonBall = new CannonBall(cannon.x,cannon.y);
        balls.push(cannonBall);
    }
}

function showBoats(){
    //If boats array is not empty then .... otherwise
    if(boats.length > 0){
        console.log(boats.length);
        //If the last boat has crossed width-300 then 
        if(boats[boats.length-1].body.position.x < width-300 && boats.length<4){
            var positions = [-10,-20, - 40,-30];
            var position = random(positions)
            boat = new Boat(width+100, height - 50,200,200, position);
            boats.push(boat);
        }

        for(var i = 0; i<boats.length;i=i+1){
            Matter.Body.setVelocity(boats[i].body,{x:-1.5,y:0});
            boats[i].display();
        }

    }
    else{
        boat = new Boat(width+100, height - 50,200,200, -50);
        boats.push(boat);
    }

}

function collisionWithBoat(cIndex){
    for(var i = 0;i<boats.length;i=i+1){
        if(balls[cIndex]!==undefined && boats[i]!==undefined ){
            
           var collision =  Matter.SAT.collides(balls[cIndex].body,boats[i].body);
           
           if(collision.collided){
               boats[i].remove(i);

               Matter.World.remove(world,balls[cIndex].body);
               balls.splice(cIndex,1);
           }
        }
    }
}
