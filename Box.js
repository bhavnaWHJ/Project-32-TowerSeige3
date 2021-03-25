class Box{
    constructor(x,y){

        var options = {

            restitution: 0,
            density: 0.01,
            friction:1
        }
        
        this.body = Bodies.rectangle(x,y,40,60,options);
        this.width = 40;
        this.height = 60;
       
       
        this.image = loadImage("greenBlock1.png");
        this.Visibility = 255;
        World.add(world,this.body);
    }

    score(){
        if(this.Visibility<0 && this.Visibility>-100){
            score++
        }
    }

    display(){
        if(this.body.speed<3){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop(); 
        }

        else{
            
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
           
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
            
            
           

            
        }
               
    }
}