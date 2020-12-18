class box{
    constructor(x,y,width,height){
        var options_box = {
            restitution:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options_box);
        this.width = width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
     var pos = this.body.position
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill(200);
        rect(0,0,this.width,this.height);
     pop();
    }
}