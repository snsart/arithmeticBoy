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

	public run(vehicles:Array<Vehicle>){
		this.flock(vehicles);
		this.update();
		this.display();
		this.checkEdge(1024,768);
	}

	public seek(target:Vector2D):Vector2D{
		let desired:Vector2D=Vector2D.sub(target,this.location);
		desired.normalize();
		desired.mult(this.maxspeed);

		let steer=Vector2D.sub(desired,this.velocity);
		steer.limit(this.maxforce);
		return steer;
	}

	/*和其它小车分离*/
	public separate(vehicles:Array<any>):Vector2D{
		let desiredseparation=50;
		let sum:Vector2D=new Vector2D(0,0);
		let count:number=0;
		for(let other of vehicles){
			let d=Vector2D.dist(this.location,other.location);
			if(d>0&&d<desiredseparation){
				let diff=Vector2D.sub(this.location,other.location);
				diff.normalize();
				sum.add(diff);
				count++;
			}
		}
		if(count>0){
			sum.div(count);
			sum.setMag(this.maxspeed);
			let steer=Vector2D.sub(sum,this.velocity);
			steer.limit(this.maxforce);
			return steer;
		}
		return new Vector2D(0,0);
	}

	
	/*和其它小车对齐：速度保持一致*/
	public align(vehicles:Array<any>):Vector2D{
		let neighVehiclesDist=50;
		let sum:Vector2D=new Vector2D(0,0);
		let count=0;
		for(let other of vehicles){
			let d=Vector2D.dist(this.location,other.location);
			if(d>0&&d<neighVehiclesDist){
				sum.add(other.velocity);
				count++;
			}
		}
		if(count>0){
			sum.div(count);
			sum.normalize();
			sum.mult(this.maxspeed);

			let steer=Vector2D.sub(sum,this.velocity);
			steer.limit(this.maxforce);
			return steer;
		}
		return new Vector2D(0,0);
	}

	/*聚集行为*/
	public cohesion(vehicles:Array<any>):Vector2D{
		let neighVehiclesDist=80;
		let sum:Vector2D=new Vector2D(0,0);
		let count=0;
		for(let other of vehicles){
			let d=Vector2D.dist(this.location,other.location);
			if(d>0&&d<neighVehiclesDist){
				sum.add(other.location);
				count++;
			}
		}
		if(count>0){
			sum.div(count);
			return this.seek(sum);
		}
		return new Vector2D(0,0);
	}


	/*群集*/
	public flock(vehicles:Array<any>){
		let separate=this.separate(vehicles);
		let align=this.align(vehicles);
		let coh=this.cohesion(vehicles);

		separate.mult(3);
		align.mult(1);
		coh.mult(1);

		this.applyForce(separate);
		this.applyForce(align);
		this.applyForce(coh);
	}

	/*求解法线交点*/
	public getNormalPoint(p:Vector2D,a:Vector2D,b:Vector2D):Vector2D{
		let ap:Vector2D=Vector2D.sub(p,a);
		let ab:Vector2D=Vector2D.sub(b,a);

		ab.normalize();
		ab.mult(ap.dot(ab));
		let normalPoint=Vector2D.add(a,ab);
		return normalPoint;
	}


	public applyForce(force:Vector2D){
		console.log(this.mass);
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