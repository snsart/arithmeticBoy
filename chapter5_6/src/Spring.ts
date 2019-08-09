class Spring extends egret.Sprite {

	private world:Box2D.Dynamics.b2World;
	private p2m:number=30;//像素世界和物理世界的转换率，1像素世界=30物理世界
	private mouseJoint:Box2D.Dynamics.Joints.b2MouseJoint;
	private md:Box2D.Dynamics.Joints.b2MouseJointDef;
	private box:Box;
	private mousex:number;
	private mousey:number;

	public constructor(world:Box2D.Dynamics.b2World) {
		super();
		this.world=world;
		this.setup();
	}

	private setup(){

	}

	public bind(mousex,mousey,box:Box){
		this.mousex=mousex;
		this.mousey=mousey;
		this.box=box;
		this.md=new Box2D.Dynamics.Joints.b2MouseJointDef();

		this.md.bodyA=this.world.GetGroundBody();
		this.md.bodyB=box.body;

		this.md.maxForce=500;
		this.md.frequencyHz=5.0;
		this.md.dampingRatio=0.9;
		this.mouseJoint=this.world.CreateJoint(this.md) as Box2D.Dynamics.Joints.b2MouseJoint;
		this.mouseJoint.SetTarget(new Box2D.Common.Math.b2Vec2(this.mousex/this.p2m,this.mousey/this.p2m));
	}

	public update(mousex,mousey){
		this.mousex=mousex;
		this.mousey=mousey;
		this.mouseJoint.SetTarget(new Box2D.Common.Math.b2Vec2(mousex/this.p2m,mousey/this.p2m));
	}

	public display(){
		console.log(this.mousex,this.mousey);
		let pos1:Box2D.Common.Math.b2Vec2=this.box.body.GetPosition();

		let g=this.graphics;
		g.clear();
		g.lineStyle(2,0xff0000);
		g.moveTo(pos1.x*this.p2m,pos1.y*this.p2m);
		g.lineTo(this.mousex,this.mousey);
	}
}