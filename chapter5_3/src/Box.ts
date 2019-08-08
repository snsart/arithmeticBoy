class Box extends egret.Sprite{

	private body:Box2D.Dynamics.b2Body;//物体
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
	
	public constructor(x:number,y:number,world:Box2D.Dynamics.b2World) {
		super();
		this.world=world;
		this.setup(x,y);
	}

	public setup(x,y){
		this.vertices=[new Vector2D(0,10),new Vector2D(40,10),new Vector2D(40,30),new Vector2D(0,30)]

		this.bodyDef=new Box2D.Dynamics.b2BodyDef();
		this.bodyDef.type=Box2D.Dynamics.b2Body.b2_dynamicBody;
		this.bodyDef.position=new Box2D.Common.Math.b2Vec2(x/this.p2m,y/this.p2m);
		this.body=this.world.CreateBody(this.bodyDef);
		
		
		let vec=this.vertices.map((item)=>{
			return new Box2D.Common.Math.b2Vec2(item.x/this.p2m,item.y/this.p2m);
		});
		this.polygonShape=Box2D.Collision.Shapes.b2PolygonShape.AsArray(vec);
		this.fixtureDef=new Box2D.Dynamics.b2FixtureDef();
		this.fixtureDef.shape=this.polygonShape;
		this.fixtureDef.density=1;
		this.fixtureDef.friction=0.3;
		this.fixtureDef.restitution=0.2;
		this.body.CreateFixture(this.fixtureDef);

		let poly2=Box2D.Collision.Shapes.b2PolygonShape.AsBox(this.w/this.p2m,this.h/this.p2m);
		let fixtureDef=new Box2D.Dynamics.b2FixtureDef();
		fixtureDef.shape=poly2;
		fixtureDef.density=1;
		fixtureDef.friction=0.3;
		fixtureDef.restitution=0.2;
		this.body.CreateFixture(fixtureDef);

		this.shape=new egret.Shape();
		this.addChild(this.shape);
		let g=this.shape.graphics;
		g.clear();
		g.lineStyle(1,0xff0000);
		g.beginFill(0xff6666);

		g.moveTo(this.vertices[0].x,this.vertices[0].y);
		g.lineTo(this.vertices[1].x,this.vertices[1].y);
		g.lineTo(this.vertices[2].x,this.vertices[2].y);
		g.lineTo(this.vertices[3].x,this.vertices[3].y);
		g.lineTo(this.vertices[0].x,this.vertices[0].y);

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

		this.shape.x=pos.x*this.p2m;
		this.shape.y=pos.y*this.p2m;
		this.shape.rotation=a*this.p2m;

		this.box.x=pos.x*this.p2m;
		this.box.y=pos.y*this.p2m;
		this.box.rotation=a*this.p2m;
	}

	public killBody(){
		this.world.DestroyBody(this.body);
	}
}