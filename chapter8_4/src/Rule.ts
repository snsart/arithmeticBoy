class Rule {
	private _pre:string;
	private _successor:string;
	public constructor(pre:string,successor:string) {
		this._pre=pre;
		this._successor=successor;
	}

	public get pre():string{
		return this._pre;
	}

	public get successor():string{
		return this._successor;
	}

}