class Path extends egret.Sprite {

	public points:Array<any>;
	public radius:number;

	public constructor() {
		super();
		this.radius=20;
		this.points=[];
	}

	public addPoint(x:number,y:number){
		let point=new Vector2D(x,y);
		this.points.push(point);
	}

	public display(){
		let g=this.graphics;
		g.lineStyle(this.radius*2,0xbbbbbb);
		let start=this.points[0];
		g.moveTo(start.x,start.y);
		for(let i=1,len=this.points.length;i<len;i++){
			g.lineTo(this.points[i].x,this.points[i].y);
		}
		g.lineStyle(1,0x000000);
		for(let i=this.points.length-1;i>=0;i--){
			g.lineTo(this.points[i].x,this.points[i].y);
		}
	}

}