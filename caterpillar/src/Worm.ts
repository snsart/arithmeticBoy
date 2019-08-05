class Worm extends egret.Sprite{

	public target:Vector2D;
	private location:Vector2D;
	public velocity:Vector2D;
	public acceleration:Vector2D;
	private mass:number=5;
	private segments:Segment[]=[];

	public constructor() {
		super();
		this.setup();
	}

	private setup(){
		this.location=new Vector2D(1024,768);
		this.target=new Vector2D(0,400);
		this.velocity=new Vector2D(0,0);
		this.acceleration=new Vector2D(0,0);
		this.createSegments();
	}

	private createSegments(){
		for(let i=0;i<10;i++){
			let segment=new Segment();
			segment.angle=i*Math.PI/5;
			this.segments.push(segment);
			this.addChild(segment);
		}
	}

	public applyForce(force:Vector2D){
		let f:Vector2D=Vector2D.div(force,this.mass);
		this.acceleration.add(f);
	}

	public update(){
		let dir=Vector2D.sub(this.target,this.location);
		let force=dir.normalize();
		let angle=force.heading2D();

		let totalForce=new Vector2D(0,0);
		for(let i=0;i<this.segments.length;i++){
			let segment=this.segments[i];
			segment.heading=angle;
			segment.update();
			if(!segment.toHead()){
				force.mult(0.01);
				totalForce.add(force);
				force.normalize();
			}
		}
		this.applyForce(totalForce);
		
		let fraction:Vector2D=this.velocity.copy();
		fraction.normalize();
		fraction.mult(-0.04)
		this.applyForce(fraction);

		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}

	public display(){

		let dir=Vector2D.sub(this.target,this.location);
		let force=dir.normalize();
		let angle=force.heading2D();

		
		this.segments[0].x=this.location.x;
		this.segments[0].y=this.location.y;
		this.segments[0].display();
		for(let i=1;i<this.segments.length;i++){
			this.segments[i].x=this.segments[i-1].x-10*Math.cos(angle);
			this.segments[i].y=this.segments[i-1].y-10*Math.sin(angle);
			this.segments[i].display();
		}
	}

	public checkEdge(width:number,height:number){
		if(this.location.x>width){
			this.location.x=0;
		}else if(this.location.x<0){
			this.location.x=width;
		}

		if(this.location.y>height){
			this.location.y=0;
		}else if(this.location.y<0){
			this.location.y=height;
		}
	}
}