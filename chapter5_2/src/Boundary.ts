class Boundary extends egret.Sprite {
	private px:number;
	private py:number;
	private w:number;
	private h:number;
	private p2m:number=30;

	private world:Box2D.Dynamics.b2World;

	public constructor(x:number,y:number,w:number,h:number,world:Box2D.Dynamics.b2World) {
		super();
		this.px=x;
		this.py=y;
		this.w=w;
		this.h=h;
		this.world=world;

		let bd:Box2D.Dynamics.b2BodyDef=new Box2D.Dynamics.b2BodyDef();
		bd.position.Set(this.px/this.p2m,this.py/this.p2m);
		bd.type=Box2D.Dynamics.b2Body.b2_staticBody;
		let b=this.world.CreateBody(bd);

		let ps:Box2D.Collision.Shapes.b2PolygonShape=Box2D.Collision.Shapes.b2PolygonShape.AsBox(this.w/this.p2m/2,this.h/this.p2m/2);

		let fixtureDef=new Box2D.Dynamics.b2FixtureDef();
		fixtureDef.shape=ps;
		b.CreateFixture(fixtureDef);

	}

	public display(){
		let g=this.graphics;
		g.clear();
		g.beginFill(0x000000);
		g.drawRect(this.px-this.w/2,this.py-this.h/2,this.w,this.h);
	}
}