class ParticleSystem extends egret.Sprite {
	
	private particles:Array<Particle>;
	private origin:Vector2D;


	public constructor(location:Vector2D) {
		super();
		this.origin=location.copy();
		this.particles=new Array<Particle>();
	}

	public addParticle(){
		let p=new Particle(this.origin)
		this.particles.push(p);
		this.addChild(p);
	}

	public applyForce(f:Vector2D){
		for(let p of this.particles){
			p.applyForce(f);
		}
	}

	public applyRepeller(r:Repeller){
		for(let p of this.particles){
			let force:Vector2D=r.repel(p);
			p.applyForce(force);
		}
	}

	public run(){
		for(let p of this.particles){
			p.run();
			if(p.isDead()){
				this.particles.splice(this.particles.indexOf(p),1);
				this.removeChild(p)
			}
		}
	}
}