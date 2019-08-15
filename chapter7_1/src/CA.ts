class CA extends egret.Sprite{

	private cells;
	private ruleset;
	private generation=0;
	private rects;

	public constructor(width) {
		super();
		this.cells=[];
		this.ruleset=[0,1,0,1,1,0,1,0];
		for(let i=0;i<width;i++){
			this.cells.push(0);
		}
		this.cells[this.cells.length/2]=1;

		this.rects=[];
		for(let i=0;i<width;i++){
			let rect=new egret.Shape();
			this.rects.push(rect);
			this.addChild(rect);
		}
	}

	public generate(){
		let nextgen=[0];
		for(let i=1;i<this.cells.length-1;i++){
			let left=this.cells[i-1];
			let me=this.cells[i];
			let right=this.cells[i+1];
			nextgen.push(this.rules(left,me,right));
		}
		nextgen.push(0);
		this.cells=nextgen;
		this.generation++;
	}

	public rules(a:number,b:number,c:number){
		let s=""+a+b+c;
		let index=parseInt(s,2);
		console.log(index);
		return this.ruleset[index];
	}

	public display(){
		let w=3;
		for(let i=0;i<this.cells.length;i++){
			let rect=new egret.Shape();
			let g=rect.graphics;
			if(this.cells[i]==0){
				g.beginFill(0xffffff);
			}else{
				g.beginFill(0x000000);
			}
			g.drawRect(i*w,this.generation*w,w,w);
			this.addChild(rect);
		}	
	}

	public display2(){
		let w=10;
		for(let i=0;i<this.rects.length;i++){
			let rect=this.rects[i]
			let g=rect.graphics;
			g.clear();
			g.beginFill(0x000000);
			let height=1;
			if(this.cells[i]==0){
				height=1
			}else{
				height=500;
			}
			g.drawRect(i*w,0,w,height);
		}	
	}
}