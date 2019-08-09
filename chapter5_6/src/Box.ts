class Box extends egret.Sprite{

	public body:Box2D.Dynamics.b2Body;//物体
	private bodyDef:Box2D.Dynamics.b2BodyDef;//物体定义
	private polygonShape:Box2D.Collision.Shapes.b2PolygonShape;//形状
	private fixtureDef:Box2D.Dynamics.b2FixtureDef;//夹具
	private world:Box2D.Dynamics.b2World;
	
	private w:number=60;
	private h:number=10;

	private p2m:number=30;//像素世界和物理世界的转换率，1像素世界=30物理世界
	private shape:egret.Shape;
	private box:egret.Shape;

	private vertices:Vector2D[]=[];
	
	public constructor(x:number,y:number,world:Box2D.Dynamics.b2World,density:number=1) {
		super();
		this.world=world;
		this.setup(x,y,density);
	}

	public setup(x,y,density:number=1){
		
		this.bodyDef=new Box2D.Dynamics.b2BodyDef();
		this.bodyDef.type=Box2D.Dynamics.b2Body.b2_dynamicBody;
		this.bodyDef.position=new Box2D.Common.Math.b2Vec2(x/this.p2m,y/this.p2m);
		this.body=this.world.CreateBody(this.bodyDef);
		

		let polygonShape=Box2D.Collision.Shapes.b2PolygonShape.AsBox(this.w/this.p2m/2,this.h/this.p2m/2);
		let fixtureDef=new Box2D.Dynamics.b2FixtureDef();
		fixtureDef.shape=polygonShape;
		fixtureDef.density=density;
		fixtureDef.friction=0.3;
		fixtureDef.restitution=0.2;
		this.body.CreateFixture(fixtureDef);


		this.box=new egret.Shape();
		this.addChild(this.box);
		let g2=this.box.graphics;
		g2.clear();
		g2.lineStyle(1,0xff0000);
		g2.beginFill(0x666666);
		g2.drawRect(0,0,this.w,this.h);
	}

	public display(){
		let pos:Box2D.Common.Math.b2Vec2=this.body.GetPosition();
		let a:number=this.body.GetAngle();

		this.box.x=pos.x*this.p2m;
		this.box.y=pos.y*this.p2m;
		this.box.anchorOffsetX=this.w/2;
		this.box.anchorOffsetY=this.h/2;
		this.box.rotation=a*this.p2m;
	}

	public killBody(){
		this.world.DestroyBody(this.body);
	}
}