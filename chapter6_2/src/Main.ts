class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
  
    private mousedown:boolean;
    private mouse:Vector2D;
    private vehicle:Vehicle;
    private target:Vector2D;
    private flow:FlowField;

    private onAddToStage(event:egret.Event) {
        let bg:egret.Shape=new egret.Shape();
        bg.graphics.beginFill(0xffffff);
        bg.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight);
        this.addChild(bg);       

        this.setup();

        this.addEventListener(egret.Event.ENTER_FRAME,this.loop,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
            this.mousedown=true;
            this.mouse.x=e.stageX;
            this.mouse.y=e.stageY
        },this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,()=>{this.mousedown=false},this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,(e)=>{this.mouse.x=e.stageX;this.mouse.y=e.stageY},this);
    }

    private setup(){
        this.mouse=new Vector2D(0,0);
        
       
        this.target=new Vector2D(500,500);
        this.flow=new FlowField(this.stage.stageWidth,this.stage.stageHeight);
        this.addChild(this.flow);
        this.vehicle=new Vehicle(1,200,200);
        this.addChild(this.vehicle);
    }

    private loop(e:egret.Event){
        this.target=new Vector2D(this.mouse.x,this.mouse.y);
        //this.vehicle.seek(this.target);
        //this.vehicle.arrive(this.target);
        this.vehicle.follow(this.flow);
        this.vehicle.update();
        this.vehicle.display();
        this.vehicle.checkEdge(this.stage.stageWidth,this.stage.stageHeight);
    }
}

