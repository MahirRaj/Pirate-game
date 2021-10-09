class Boat{
    constructor(x,y,width,height,boatPos){
        var options = {
            restitution :  0.7,
            density : 1.0,
            friction : 1.0
        }
         this.body = Bodies.rectangle(x,y,width,height,options);
         World.add(world,this.body);
         this.width = width;
         this.height = height;
         this.boatPos = boatPos;
         this.image = loadImage("assets/boat.png");
    }

    display(){
         var pos = this.body.position;
         var angle=this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,this.boatPos,this.width,this.height);
         pop();
    }

    remove(index){
        setTimeout(()=>{
            World.remove(world,boats[index].body);
            boats.splice(index,1);
        },2000)
        
    }

}

/* function sum(a,b){

} 

sum(3,4)

remove(index){


}

remove(i)


*/