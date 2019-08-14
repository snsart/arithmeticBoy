class Path extends egret.Sprite {

	public start:Vector2D;
	public end:Vector2D;
	public radius:number;

	public constructor() {
		super();
		this.start=new Vector2D(100,300);
		this.end=new Vector2D(900,500);
		this.radius=20;
		this.display();
	}

	public display(){
		let g=this.graphics;
		g.lineStyle(this.radius*2,0xbbbbbb);
		g.moveTo(this.start.x,this.start.y);
		g.lineTo(this.end.x,this.end.y);
		g.lineStyle(1,0x000000);
		g.lineTo(this.start.x,this.start.y);
	}

}