class Stone{
	constructor(x,y,witdth,height)
	{
		var options = {
            'restitution':0.8,
            'friction':0.9,
            'density':12
        }
	// assign options to the rubber ball
		
		
        this.body=Bodies.rectangle(x,y,10,10, options)
        this.width=10
        this.height=10

		World.add(world, this.body);

	}
	display()
	{
            var stonepos=this.body.position;
            var angle=this.body.angle		
			push()
            translate(stonepos.x, stonepos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)

			pop()
	}

}