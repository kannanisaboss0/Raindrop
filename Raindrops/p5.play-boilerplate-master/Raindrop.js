class Drop{
    constructor(x,y,radius,options){
        var options={
            density:10,
            restititution:5,
            friction:4
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.postion;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        ellipseMode(CENTER)
        fill(random(0,255));
        ellipse(0,0,this.radius);
        pop();
    }
}