class CA extends egret.Sprite{

	private boards:Array<Array<any>>;
	private generation=0;
	private rects;
	private cols;
	private rows;

	private states1;
	private states2;

	public constructor(cols,rows) {
		super();
		this.cols=cols;
		this.rows=rows;
		this.setup();
		this.drawBoard();
	}

	public setup(){
		this.rects=[];
		this.boards=[];
		this.states1=[];
		this.states2=[];

		for(let i=0;i<this.rows;i++){
			let arr=[];
			for(let j=0;j<this.cols;j++){
				arr.push(Math.round(Math.random()));
			}
			this.states1.push(arr.concat());
			this.states2.push(arr.concat());
			this.boards.push(arr.concat());
		}
	}

	public drawBoard(){
		let w=10;
		for(let i=0;i<this.rows;i++){
			let arr=[];
			for(let j=0;j<this.cols;j++){
				let rect=new egret.Shape();
				let g=rect.graphics;
				if(this.boards[i][j]==0){
					g.beginFill(0x000000);
				}else{
					g.beginFill(0xffffff);
				}
				g.drawRect((j+1)*w,(i+1)*w,w,w);
				arr.push(rect);
				this.addChild(rect);
			}
			this.rects.push(arr);
		}
	}

	public generate(){
		let  currentState=this.generation%2==0?this.states1:this.states2;
		for(let i=0;i<this.rows;i++){
			for(let j=0;j<this.cols;j++){
				currentState[i][j]=this.rules(i,j,this.getNeighNum(i,j));
			}
		}
		this.boards=currentState;
		this.generation++;
	}

	public getNeighNum(i,j):number{
		let neighNum=0;
		let startRow=i==0?0:i-1;
		let endRow=i==this.rows-1?this.rows-1:i+1;
		let startCol=j==0?0:j-1;
		let endCol=j==this.cols-1?this.cols-1:j+1;

		for(let row=startRow;row<=endRow;row++){
			for(let col=startCol;col<=endCol;col++){
				neighNum+=this.boards[row][col];
			}
		}
		neighNum-=this.boards[i][j];
		return neighNum;
	}

	public rules(i,j,neighNum):number{
		let currentState=this.boards[i][j];
		if(currentState==1&&neighNum<0){
			return 0;
		}else if(currentState==1&&neighNum>3){
			return 0;
		}else if(currentState==0&&neighNum==3){
			return 1;
		}else{
			return currentState;
		}
	}

	public display(){
		let w=10;
		for(let i=0;i<this.rows;i++){
			for(let j=0;j<this.cols;j++){
				let rect=this.rects[i][j];
				let g=rect.graphics;
				g.clear();
				if(this.boards[i][j]==0){
					g.beginFill(0x000000);
				}else{
					g.beginFill(0xffffff);
				}
				g.drawRect((j+1)*w,(i+1)*w,w,w);
			}
		}
	}
}