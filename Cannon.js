
class Cannon {
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle
    }

    display(){
        fill(90);
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-10,-20,this.width,this.height);
        pop();
        arc(this.x-30,this.y+90,140,200,PI,2*PI);
        noFill();

        if(keyIsDown(RIGHT_ARROW) &&  this.angle<0.2) {
            this.angle += 0.02;
        }

        if(keyIsDown(LEFT_ARROW)&& this.angle>-1.22){
            this.angle -= 0.02;
        }
        //console.log(this.angle);
    }
}

