class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private world:Box2D.Dynamics.b2World;//世界
    private debug:Box2D.Dynamics.b2DebugDraw;
    private p2m:number = 30;

    private boxes:Box[];
    private mousedown:boolean;
    private mouse:Vector2D;

    private boundary:Boundary;

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
        this.createWorld();
        this.boxes=[];
        this.mouse=new Vector2D(0,0);

        this.boundary=new Boundary(new Vector2D(100,400),new Vector2D(500,400),this.world);
        this.addChild(this.boundary);
        this.boundary.display();
    }
     
    private createWorld(){
        var gravity:Box2D.Common.Math.b2Vec2 = new Box2D.Common.Math.b2Vec2(0,10);
        this.world = new Box2D.Dynamics.b2World(gravity,true);//创建世界
    }

    private loop(e:egret.Event){
        
        if(this.mousedown){
            let b:Box=new Box(this.mouse.x,this.mouse.y,this.world);
            this.boxes.push(b);
            this.addChild(b);
        }

        for(let box of this.boxes){
            box.display();
        }

        this.world.Step(1/60,10,10);
        /*this.world.DrawDebugData();*/
    }
}
