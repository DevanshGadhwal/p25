class Ball
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic:false,
            restitiution:0.7,
            density:0.5,			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
        this.Image=loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var ballPos=this.body.position;		

			push()
			translate(ballPos.x, ballPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.Image,0,0,this.w, this.h);
			pop()
			
	}

}