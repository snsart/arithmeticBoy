class KochLine extends egret.Shape {

	private start:Vector2D;
	private end:Vector2D;

	public constructor(a:Vector2D,b:Vector2D) {
		super();
		this.start=a.copy();
		this.end=b.copy();
	}

	public kochA():Vector2D{
		return this.start.copy();
	}

	public kochB():Vector2D{
		let v=Vector2D.sub(this.end,this.start);
		v.div(3);
		v.add(this.start);
		return v;
	}

	public kochC():Vector2D{
		let a=this.start.copy();
		let v=Vector2D.sub(this.end,this.start);
		v.div(3);
		a.add(v);
		v.rotate(Math.PI/3);
		a.add(v);
		return a;
	}

	public kochD():Vector2D{
		let v=Vector2D.sub(this.end,this.start);
		v.mult(2/3);
		v.add(this.start);
		return v;
	}

	public kochE():Vector2D{
		return this.end.copy();
	}

	public display(){
		let g=this.graphics;
		g.clear();
		g.lineStyle(2,0xff0000);
		g.moveTo(this.start.x,this.start.y);
		g.lineTo(this.end.x,this.end.y);
	}
}