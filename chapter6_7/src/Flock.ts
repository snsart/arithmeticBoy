class Flock extends egret.Sprite {

	private vehicles:Array<Vehicle>;

	public constructor() {
		super();
		this.setup();
	}

	public setup(){
		this.vehicles=[];
	}

	public run(){
		for(let p of this.vehicles){
			p.run(this.vehicles);
		}
	}

	public addVehicle(v:Vehicle){
		this.vehicles.push(v);
	}
}