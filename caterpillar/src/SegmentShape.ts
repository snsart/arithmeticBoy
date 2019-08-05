class SegmentShape extends egret.Shape {
	public constructor() {
		super();
		this.draw();
	}

	public draw(){
		let g=this.graphics;
		g.lineStyle(1,0x000000);
		g.beginFill(0xff0000);
		g.drawRoundRect(0,0,30,30,20,20);
		//g.drawEllipse(0,0,40,50);
	}
}