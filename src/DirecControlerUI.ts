class DirecControlerUI extends egret.Sprite{
	private _leftBtn:egret.Sprite;
	private _rightBtn:egret.Sprite;
	private _upBtn:egret.Sprite;
	public constructor() {
		super();
		this.createView();
	}

	get leftBtn():egret.Sprite{
		return this._leftBtn;
	}

	get rightBtn():egret.Sprite{
		return this._leftBtn;
	}

	get upBtn():egret.Sprite{
		return this._leftBtn;
	}

	private createView():void{
		this._leftBtn=new egret.Sprite();
		this._rightBtn=new egret.Sprite();
		this._upBtn=new egret.Sprite();
		var leftSkin:egret.Bitmap=new egret.Bitmap(RES.getRes("arrow"));
		var rightSkin:egret.Bitmap=new egret.Bitmap(RES.getRes("arrow"));
		var upSkin:egret.Bitmap=new egret.Bitmap(RES.getRes("arrow"));
		this._leftBtn.addChild(leftSkin);
		this._rightBtn.addChild(rightSkin);
		this._upBtn.addChild(upSkin);
		this._leftBtn.x=50;
		this._leftBtn.y=0;
		this._leftBtn.anchorOffsetX=this.leftBtn.width/2;
		this._leftBtn.anchorOffsetY=this.leftBtn.height/2;
		this._leftBtn.scaleX*=-1;

		this._rightBtn.x=160;
		this._rightBtn.y=0;
		this._rightBtn.anchorOffsetX=this.rightBtn.width/2;
		this._rightBtn.anchorOffsetY=this.rightBtn.height/2;

		this._upBtn.x=780;
		this._upBtn.y=0;
		this._upBtn.anchorOffsetX=this.upBtn.width/2;
		this._upBtn.anchorOffsetY=this.upBtn.height/2;
		this._upBtn.rotation=270;
		this.addChild(this._leftBtn);
		this.addChild(this._rightBtn);
		this.addChild(this._upBtn);

	}
}