class Mover extends egret.Sprite {
	public location:Vector2D;
	public velocity:Vector2D;
	public acceleration:Vector2D;
	public mass:number;

	public constructor(mass:number,x:number,y:number) {
		super();
		this.mass=mass;
		this.location=new Vector2D(x,y);
		this.velocity=new Vector2D(0,0);
		this.acceleration=new Vector2D(0,0);
	}


	public applyForce(force:Vector2D){
		let f:Vector2D=Vector2D.div(force,this.mass);
		this.acceleration.add(f);
	}

	public update(){
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}

	public display(){
		let g=this.graphics;
		g.clear();
		g.beginFill(0xff0000);
		g.drawCircle(this.location.x,this.location.y,this.mass*5);
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

	/*判断物体是否在流体当中*/
	public isInside(l:Liquid):boolean{
		if(this.location.x>l.x&&this.location.x<l.x+l.w&&this.location.y>l.y&&this.location.y<l.y+l.h){
			return true;
		}
		return false;
	}

	/*物体受到流体阻力*/
	public drag(l:Liquid){
		let speed=this.velocity.mag();
		let dragMagnitude=l.c*speed*speed;
		let drag:Vector2D=this.velocity.copy();
		drag.mult(-1);
		drag.normalize();
		drag.mult(dragMagnitude);
		this.applyForce(drag);
	}


}