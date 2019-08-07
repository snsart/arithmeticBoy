var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.p2m = 30;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        var sWidth = this.stage.stageWidth;
        var sHeight = this.stage.stageHeight;
        this.createWorld();
        this.createDebug();
        for (var i = 0; i < 20; i++) {
            this.createBox(Math.random() * 300 + 50, Math.random() * 200 + 50, Math.random() * 30 + 10, Math.random() * 30 + 10);
        }
        this.createBox(sWidth / 2, sHeight, sWidth, 10, true);
        this.createBox(sWidth / 2, 0, sWidth, 10, true);
        this.createBox(0, sHeight / 2, 10, sHeight, true);
        this.createBox(sWidth, sHeight / 2, 10, sHeight, true);
        this.addEventListener(egret.Event.ENTER_FRAME, this.loop, this);
    };
    Main.prototype.createBox = function (posX, posY, w, h, isStatic) {
        if (isStatic === void 0) { isStatic = false; }
        var bodyDef = new Box2D.Dynamics.b2BodyDef();
        bodyDef.position = new Box2D.Common.Math.b2Vec2(posX / this.p2m, posY / this.p2m);
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        if (isStatic) {
            bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
        }
        var body = this.world.CreateBody(bodyDef);
        var poly;
        poly = Box2D.Collision.Shapes.b2PolygonShape.AsBox(w / this.p2m, h / this.p2m);
        var fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.density = 3;
        fixtureDef.restitution = 0.2;
        fixtureDef.shape = poly;
        body.CreateFixture(fixtureDef);
    };
    Main.prototype.createWorld = function () {
        var gravity = new Box2D.Common.Math.b2Vec2(0, 10);
        this.world = new Box2D.Dynamics.b2World(gravity, true);
    };
    Main.prototype.createDebug = function () {
        var s = new egret.Sprite();
        this.addChild(s);
        this.debug = new Box2D.Dynamics.b2DebugDraw();
        this.debug.SetSprite(s);
        this.debug.SetDrawScale(30);
        this.debug.SetLineThickness(1);
        this.debug.SetAlpha(0.8);
        this.debug.SetFillAlpha(0.5);
        this.debug.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit);
        this.world.SetDebugDraw(this.debug);
    };
    Main.prototype.loop = function (e) {
        this.world.Step(1 / 60, 10, 10);
        this.world.DrawDebugData();
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map