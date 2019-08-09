class Boundary extends egret.Sprite {
	private start:Vector2D;
	private end:Vector2D;
	private p2m:number=30;

	private world:Box2D.Dynamics.b2World;

	public constructor(start:Vector2D,end:Vector2D,world:Box2D.Dynamics.b2World) {
		super();
		this.start=start;
		this.end=end;
		this.world=world;
		this.setup();
	}

	private setup(){
		let bdef:Box2D.Dynamics.b2BodyDef=new Box2D.Dynamics.b2BodyDef();
		let body=this.world.CreateBody(bdef);

		let start:Box2D.Common.Math.b2Vec2=new Box2D.Common.Math.b2Vec2(this.start.x/this.p2m,this.start.y/this.p2m);
		let end:Box2D.Common.Math.b2Vec2=new Box2D.Common.Math.b2Vec2(this.end.x/this.p2m,this.end.y/this.p2m);

		let ps:Box2D.Collision.Shapes.b2PolygonShape=Box2D.Collision.Shapes.b2PolygonShape.AsEdge(start,end);
		let fixtureDef:Box2D.Dynamics.b2FixtureDef=new Box2D.Dynamics.b2FixtureDef();
		fixtureDef.density = 3;
        fixtureDef.restitution = 0.2;
		fixtureDef.shape=ps;

		body.CreateFixture(fixtureDef);
	}

	public display(){
		let g=this.graphics;
		g.clear();
		g.lineStyle(2,0x000000);
		g.moveTo(this.start.x,this.start.y);
		g.lineTo(this.end.x,this.end.y);
	}
}