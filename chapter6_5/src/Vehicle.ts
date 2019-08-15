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
			desired.mult(m);
		}else{
			desired.mult(this.maxspeed);
		}
		

		let steer=Vector2D.sub(desired,this.velocity);
		steer.limit(this.maxforce);
		this.applyForce(steer);
	}

	/*路径跟随*/
	public follow(p:Path){
		//第一步：预测小车未来的位置
		let predict=this.velocity.copy();
		predict.normalize();
		predict.mult(10);
		let predictLoc=Vector2D.add(this.location,predict);
		
		//第二步：在路径上寻找法线交点,将离当前点最近的点作为目标
		let worldRecord=10000;
		let target=p.points[0].copy();
		for(let i=0;i<p.points.length-1;i++){
			let a=p.points[i].copy();
			let b=p.points[i+1].copy();
			let normalPoint=this.getNormalPoint(predictLoc,a,b);
			if(normalPoint.x<Math.min(a.x,b.x)||normalPoint.x>Math.max(a.x,b.x)){
				normalPoint=b.copy();
			}

			let distance=Vector2D.dist(predictLoc,normalPoint);
			if(distance<worldRecord){
				worldRecord=distance;
				target=normalPoint.copy();
			}
		}

		//第三步：如果脱离了路径，就寻找之前设定的目标，然后回归路径
		let distance=Vector2D.dist(target,predictLoc);
		if(distance>p.radius){
			this.seek(target);
		}

	}

	/*和其它小车分离*/
	public separate(vehicles:Array<any>){
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
			this.applyForce(steer);
		}
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