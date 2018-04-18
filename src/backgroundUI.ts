class BackgroundUI extends egret.Sprite {
	private _moveDir:String="none";
	public constructor() {
		super();
		this.createImage();
	}

	get moveDir():String{
		return this._moveDir;
	}

	set moveDir(value:String){
		this._moveDir=value;
	}

	private createImage():void{
		var bg:egret.Bitmap=new egret.Bitmap(RES.getRes("background1"));
		this.addChild(bg);
	}

	public scroll(dir:String):void{
		this.moveDir=dir;
		this.addEventListener(egret.Event.ENTER_FRAME,this.onScroll,this);	
	}

	public stopScroll():void{
		this.removeEventListener(egret.Event.ENTER_FRAME,this.onScroll,this);
	}

	private onScroll(e:egret.Event):void{
		if(this._moveDir=="left"){
			if(this.x<0){
				this.x+=5;
			}
		}
		if(this._moveDir=="right"){
			if(this.x>-1920){
				this.x-=5;
			}
		}
	}

		
}