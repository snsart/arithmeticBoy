class Spring extends egret.Sprite{

	private anchor:Vector2D;
	private len:number;//弹簧的静止长度
	private k:number=0.02;
	private mover:Mover;

	public constructor(x:number,y:number,len:number) {
		super();
		this.anchor=new Vector2D(x,y);
		this.len=len;
	}

	public connect(mover:Mover){
		this.mover=mover;
		let force:Vector2D=Vector2D.sub(mover.location,this.anchor);
		
		let d=force.mag();
		
		let stretch=d-this.len;
		force.normalize();
		force.mult(-1*this.k*stretch);
		this.mover.applyForce(force);
	}

	public display(){
		let g=this.graphics;
		g.clear();
		g.lineStyle(2,0xff0000);
		g.moveTo(this.anchor.x,this.anchor.y);
		g.lineTo(this.mover.location.x,this.mover.location.y);
		console.log(this.anchor,this.mover.location);
	}
}