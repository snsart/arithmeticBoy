class backgroundUI extends egret.Sprite {
	public constructor() {
		super();
		this.createImage();
	}

	private createImage():void{
		var bg:egret.Bitmap=new egret.Bitmap(RES.getRes("background1"));
		this.addChild(bg);
	}
}