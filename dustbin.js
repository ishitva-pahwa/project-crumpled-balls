class Dustbin{
    constructor(x,y,width,height)
    {
    var options= {
        isStatic: true
        
        
    }
    
    
    this.body= Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
    
    //World.add(world, this.body);
    
    }
    
    display()
    {
        var pos = this.body.position;
    strokeWeight(2);
    stroke("white")
    rectMode(CENTER);
    fill("purple");
    rect(pos.x,pos.y,this.width,this.height);
    
    
    
    }
    
    
    
    
    
    
    }