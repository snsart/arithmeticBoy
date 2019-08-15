class Turtle {

	private _sentence:string;
	private _main;
	private _posY:number

	public constructor(main:Main,sentence:string,posY:number) {
		this._sentence=sentence;
		this._main=main;
		this._posY=posY;
	}

	public setToDo(sentence:string){
		this._sentence=sentence;
	}

	public changePosY(dy){
		this._posY+=dy;
	}

	public render(){
		let last;
		for(let i=0;i<this._sentence.length;i++){
			let c=this._sentence.charAt(i);
			if(c=="A"){
				let ball=new egret.Shape();
				let g=ball.graphics;
				g.beginFill(0xff0000);
				g.drawCircle((i+1)*20,this._posY,10);
				this._main.addChild(ball);
				last=ball;
			}
			if(c=="B"){
				let ball=new egret.Shape();
				let g=ball.graphics;
				g.beginFill(0xffff00);
				g.drawCircle((i+1)*20,this._posY,10);
				this._main.addChild(ball);
				last=ball;
			}
			if(c=="-"){
				this._main.removeChild(last);
			}
		}
	}
}