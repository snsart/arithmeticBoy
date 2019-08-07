class Box extends egret.Sprite{

	private body:Box2D.Dynamics.b2Body;//物体
	private bodyDef:Box2D.Dynamics.b2BodyDef;//物体定义
	private polygonShape:Box2D.Collision.Shapes.b2PolygonShape;//形状
	private fixtureDef:Box2D.Dynamics.b2FixtureDef;//夹具
	private world:Box2D.Dynamics.b2World;
	
	private w:number=40;
	private h:number=20;

	private p2m:number=30;//像素世界和物理世界的转换率，1像素世界=30物理世界
	private rect:egret.Shape;
	
	public constructor(x:number,y:number,world:Box2D.Dynamics.b2World) {
		super();
		this.world=world;
		this.setup(x,y);
		//this.setPosition(x,y);
	}

	public setup(x,y){
		this.bodyDef=new Box2D.Dynamics.b2BodyDef();
		this.bodyDef.type=Box2D.Dynamics.b2Body.b2_dynamicBody;
		this.bodyDef.position=new Box2D.Common.Math.b2Vec2(x/this.p2m,y/this.p2m);
		this.body=this.world.CreateBody(this.bodyDef);
		
		this.polygonShape=Box2D.Collision.Shapes.b2PolygonShape.AsBox(this.w/this.p2m/2,this.h/this.p2m/2);
		//this.polygonShape.SetAsBox();

		this.fixtureDef=new Box2D.Dynamics.b2FixtureDef();
		this.fixtureDef.shape=this.polygonShape;
		this.fixtureDef.density=1;
		this.fixtureDef.friction=0.3;
		this.fixtureDef.restitution=0.5;
		this.body.CreateFixture(this.fixtureDef);

		this.rect=new egret.Shape();
		this.addChild(this.rect);
		let g=this.rect.graphics;
		g.clear();
		g.beginFill(0xff0000);
		g.drawRect(0,0,this.w,this.h);
	}

	public setPosition(x,y){
		
		//console.log(x,y);
		let pos:Box2D.Common.Math.b2Vec2=this.body.GetPosition();
		
	}

	public display(){
		

		let pos:Box2D.Common.Math.b2Vec2=this.body.GetPosition();
		let a:number=this.body.GetAngle();

		this.rect.x=pos.x*this.p2m;
		this.rect.y=pos.y*this.p2m;

		this.rect.anchorOffsetX=this.w/2;
		this.rect.anchorOffsetY=this.h/2;

		this.rect.rotation=a*this.p2m;
	}

	public killBody(){
		this.world.DestroyBody(this.body);
	}
}