class Box extends egret.Sprite{

	private position:Vector2D;
	
	public constructor(x:number,y:number) {
		super();
		this.position=new Vector2D(x,y);
	}

	public display(){
		let g=this.graphics;
		g.beginFill(0xff0000);
		g.drawRect(this.position.x,this.position.y,10,20);
	}
}