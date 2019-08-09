class Pair extends egret.Sprite {

	private box1:Box;
	private box2:Box;
	private world:Box2D.Dynamics.b2World;
	private p2m:number=30;//像素世界和物理世界的转换率，1像素世界=30物理世界

	public constructor(x:number,y:number,world:Box2D.Dynamics.b2World) {
		super();
		this.world=world;
		this.setup(x,y);
	}

	private setup(x,y){

		let jointLength=100;

		this.box1=new Box(x,y,this.world);
		this.box2=new Box(x+20,y+20,this.world);
		this.addChild(this.box1);
		this.addChild(this.box2);

		let djd:Box2D.Dynamics.Joints.b2DistanceJointDef=new Box2D.Dynamics.Joints.b2DistanceJointDef();
		djd.bodyA=this.box1.body;
		djd.bodyB=this.box2.body;

		djd.length=jointLength/this.p2m;
		djd.frequencyHz=2;
		djd.dampingRatio=0.1;

		let dj:Box2D.Dynamics.Joints.b2DistanceJoint=this.world.CreateJoint(djd) as Box2D.Dynamics.Joints.b2DistanceJoint;

	}

	public display(){
		let pos1:Box2D.Common.Math.b2Vec2=this.box1.body.GetPosition();
		let pos2:Box2D.Common.Math.b2Vec2=this.box2.body.GetPosition();
		let g=this.graphics;
		g.clear();
		g.lineStyle(2,0xff0000);
		g.moveTo(pos1.x*this.p2m,pos1.y*this.p2m);
		g.lineTo(pos2.x*this.p2m,pos2.y*this.p2m);
		this.box1.display();
		this.box2.display();
	}
}