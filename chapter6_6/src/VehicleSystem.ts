class VehicleSystem extends egret.Sprite {

	private vehicles:Array<Vehicle>;

	public constructor() {
		super();
		this.setup();
	}

	public setup(){
		this.vehicles=[];
		for(let i=0;i<50;i++){
			let vehicle=new Vehicle(1,Math.random()*1024,Math.random()*768);
			this.vehicles.push(vehicle);
			this.addChild(vehicle);
		}
	}

	public draw(seekTarget:Vector2D){
		for(let p of this.vehicles){
			p.applyBehaviors(this.vehicles,seekTarget);
			p.update();
			p.display();
			p.checkEdge(1024,768);
		}
	}
}