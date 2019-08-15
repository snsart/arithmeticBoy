class Branch extends egret.Shape {

	private _angle:number;
	private _len:number;
	private _startPoint:Vector2D;
	private _endPoint:Vector2D;
	private _thickness:number;

	public constructor(angle:number,len:number,thickness,startPoint:Vector2D) {
		super();
		this._angle=angle;
		this._len=len;
		this._startPoint=startPoint.copy();
		this._thickness=thickness;
		this.setEndPoint();
	}

	public setEndPoint(){
		let end=this._startPoint.copy();
		let dx=this.len*Math.cos(this._angle);
		let dy=this.len*Math.sin(this._angle);
		end.add(new Vector2D(dx,dy));
		this._endPoint=end;
	}

	public getEndPoint(){
		return this._endPoint;
	}

	public get len():number{
		return this._len;
	}


	public get angle():number{
		return this._angle;
	}


	public get thickness():number{
		return this._thickness;
	}

	public display(){
		let g=this.graphics;
		g.clear();
		g.lineStyle(this._thickness,0x159800);
		g.moveTo(this._startPoint.x,this._startPoint.y);
		g.lineTo(this._endPoint.x,this._endPoint.y);
	}
}