class LSystem {
	private _axiom:string;
	private _ruleset:Array<any>;
	private _current:string;
	
	public constructor(axiom,ruleset) {
		this._axiom=axiom;
		this._current=axiom;
		this._ruleset=ruleset;
	}

	public getSentence(){
		return this._current;
	}

	public generate(){
		let next="";
		for(let i=0;i<this._current.length;i++){
			let c=this._current.charAt(i);
			for(let j=0;j<this._ruleset.length;j++){
				let rule:Rule=this._ruleset[j];
				if(c==rule.pre){
					next+=rule.successor;
				}
			}
		}
		this._current=next;
	}
}