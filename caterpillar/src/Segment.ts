class Segment extends egret.Sprite {

	private location:Vector2D;
	public heading:number;
	
	private amplitude:number=15;
	public angle=0;
	private angleVel=0.04;

	private bodyShape:SegmentShape;

	public constructor() {
		super();
		this.location=new Vector2D(0,0);
		this.heading=Math.PI;
		this.bodyShape=new SegmentShape();
		this.addChild(this.bodyShape);
	}

	public toHead():boolean{
		let angle=this.angle%(Math.PI*2);
		if(angle>0&&angle<Math.PI){
			return false;
		}
		return true;
	}

	public update(){
		let l=this.amplitude*Math.cos(this.angle);
		this.angle+=this.angleVel;

		this.location.x=l*Math.cos(this.heading);
		this.location.y=l*Math.sin(this.heading);
	}

	public display(){
		this.bodyShape.x=this.location.x;
		this.bodyShape.y=this.location.y;
		this.bodyShape.rotation=this.heading*180/Math.PI;
	}
}