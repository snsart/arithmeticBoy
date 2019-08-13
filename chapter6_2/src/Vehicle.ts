class Vehicle extends egret.Sprite {
	public location:Vector2D;
	public velocity:Vector2D;
	public acceleration:Vector2D;
	public mass:number;
	public maxspeed:number;
	public maxforce:number;

	private shape:egret.Shape;

	public constructor(mass:number,x:number,y:number) {
		super();
		this.mass=mass;
		this.location=new Vector2D(x,y);
		this.velocity=new Vector2D(0,0);
		this.acceleration=new Vector2D(0,0);
		this.maxspeed=10;
		this.maxforce=0.2;

		this.shape=new egret.Shape();
		let g=this.shape.graphics;
		g.clear();
		g.beginFill(0xff0000);
		g.moveTo(0,0);
		g.lineTo(-30,-15);
		g.lineTo(-30,15);
		g.lineTo(0,0);
		this.addChild(this.shape);
		this.shape.x=this.location.x;
		this.shape.y=this.location.y;
	}

	/*寻找
	*转向力=所需速度-当前速度
	*设计不同的行为就是通过设计不同的所需速度来实现的;
	*/

	public seek(target:Vector2D){
		let desired:Vector2D=Vector2D.sub(target,this.location);
		desired.normalize();
		desired.mult(this.maxspeed);

		let steer=Vector2D.sub(desired,this.velocity);
		steer.limit(this.maxforce);
		this.applyForce(steer);
	}

	/*到达行为
	*如果小车和目标的距离小于100，就将两者的距离映射为所需速度，距离越近速度越慢
	*/

	public arrive(target:Vector2D){
		let desired:Vector2D=Vector2D.sub(target,this.location);
		let d:number=desired.mag();
		desired.normalize();
		if(d<100){
			let m=d/100*this.maxspeed;
			console.log(m);
			desired.mult(m);
		}else{
			desired.mult(this.maxspeed);
		}
		

		let steer=Vector2D.sub(desired,this.velocity);
		steer.limit(this.maxforce);
		this.applyForce(steer);
	}

	/*流场跟随*/
	public follow(flow:FlowField){
		let desired:Vector2D=flow.lookup(this.location);
		desired.normalize();
		desired.mult(this.maxspeed);

		let steer=Vector2D.sub(desired,this.velocity);
		steer.limit(this.maxforce);
		this.applyForce(steer);
	}


	public applyForce(force:Vector2D){
		let f:Vector2D=Vector2D.div(force,this.mass);
		this.acceleration.add(f);
	}

	public update(){
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.maxspeed);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}

	public display(){
		this.shape.x=this.location.x;
		this.shape.y=this.location.y;
		let angle=this.velocity.heading2D()*180/Math.PI;
		this.shape.rotation=angle;
	}

	public checkEdge(width:number,height:number){
		if(this.location.x>width){
			this.location.x=0;
		}else if(this.location.x<0){
			this.location.x=width;
		}

		if(this.location.y>height){
			this.location.y=0;
		}else if(this.location.y<0){
			this.location.y=height;
		}
	}

}