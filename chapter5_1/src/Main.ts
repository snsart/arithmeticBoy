class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private world:Box2D.Dynamics.b2World;
    private debug:Box2D.Dynamics.b2DebugDraw;
    private p2m:number = 30;
    private onAddToStage(event:egret.Event) {
        var sWidth:number = this.stage.stageWidth;
        var sHeight:number = this.stage.stageHeight;

        this.createWorld();
        this.createDebug();
        for(var i:number = 0;i<20;i++){
            this.createBox(Math.random()*300+50,Math.random()*200+50,Math.random()*30+10,Math.random()*30+10);
        }
        this.createBox(sWidth/2,sHeight,sWidth,10,true);
        this.createBox(sWidth/2,0,sWidth,10,true);
        this.createBox(0,sHeight/2,10,sHeight,true);
        this.createBox(sWidth,sHeight/2,10,sHeight,true);

        this.addEventListener(egret.Event.ENTER_FRAME,this.loop,this);
    }
    
     /*三要素：物体，形状和夹具
        *1. 创建物体定义
        *2. 创建物体
        *3. 创建夹具
        *4. 创建形状
        *5. 将形状放在夹具中
        *6. 讲夹具赋给物体
        */

    private createBox(posX:number,posY:number,w:number,h:number,isStatic:boolean=false){


        var bodyDef:Box2D.Dynamics.b2BodyDef = new Box2D.Dynamics.b2BodyDef();//创建物体定义
        bodyDef.position = new Box2D.Common.Math.b2Vec2(posX/this.p2m,posY/this.p2m);//设计物体位置
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        if(isStatic) {
            bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
        }
        var body:Box2D.Dynamics.b2Body = this.world.CreateBody(bodyDef);//创建物体

        var poly:Box2D.Collision.Shapes.b2PolygonShape;
        poly = Box2D.Collision.Shapes.b2PolygonShape.AsBox(w/this.p2m,h/this.p2m);
        var fixtureDef:Box2D.Dynamics.b2FixtureDef = new Box2D.Dynamics.b2FixtureDef();//创建夹具:通过夹具设置物体的形状，摩擦系数，复原性等属性;
        fixtureDef.density = 3;
        fixtureDef.restitution = 0.2;
        fixtureDef.shape = poly;

        body.CreateFixture(fixtureDef);
    }

    private createWorld(){
        var gravity:Box2D.Common.Math.b2Vec2 = new Box2D.Common.Math.b2Vec2(0,10);
        this.world = new Box2D.Dynamics.b2World(gravity,true);
    }
    private createDebug(){
        var s:egret.Sprite = new egret.Sprite();
        this.addChild(s);

        this.debug = new Box2D.Dynamics.b2DebugDraw();
        this.debug.SetSprite(s);
        this.debug.SetDrawScale(30);
        this.debug.SetLineThickness(1);
        this.debug.SetAlpha(0.8);
        this.debug.SetFillAlpha(0.5);
        this.debug.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit);
        this.world.SetDebugDraw(this.debug);
    }
    private loop(e:egret.Event){
        this.world.Step(1/60,10,10);
        this.world.DrawDebugData();
    }
}
