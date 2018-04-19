class Wall extends egret.Sprite {
	public constructor() {
		super();
		this.createView();
	}

	private createView():void{
		var wallSkin:egret.Bitmap=new egret.Bitmap(RES.getRes("wall"));
		this.addChild(wallSkin);
	}
}