class DNA {
	private _genes=[];
	private _fitness:number;

	public constructor() {
		for(let i=0;i<10;i++){
			let codeIndex=Math.floor(Math.random()*(128-32)+32);
			let c=String.fromCharCode(codeIndex);
			this._genes.push(c);
		}
	}

	public get fitness():number{
		let target="helloworld";
		let score=0;
		for(let i=0;i<this._genes.length;i++){
			if(this._genes[i]==target.charAt(i)){
				score++;
			}
		}
		this._fitness=score/target.length;
		return this._fitness;
	}

	public crossover(partner:DNA):DNA{
		let child=new DNA();
		let midpoint=Math.floor(Math.random()*10);
		for(let i=0;i<this._genes.length;i++){
			if(i>midpoint){
				child._genes[i]=this._genes[i];
			}else{
				child._genes[i]=partner._genes[i];
			}
		}
		return child;
	}

	public mutate(mutationRate:number){
		for(let i=0;i<this._genes.length;i++){
			if(Math.random()<mutationRate){
				let codeIndex=Math.floor(Math.random()*(128-32)+32);
				let c=String.fromCharCode(codeIndex);
				this._genes[i]=c;
			}
		}
	}

	public getPharse():string{
		return this._genes.join("");
	}
}