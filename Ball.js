class Ball 
{
    constructor(x,y,r)
    {
        var options ={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
           }
        this.r = r;
        this.y = y;
        this.x = x;
        this.ball= Bodies.circle(this.x,this.y,this.r,options) 
        World.add(world, this.ball);
    }

    display() {
        var pos = this.ball.position;
        push()
        translate(pos.x,pos.y)

        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}
