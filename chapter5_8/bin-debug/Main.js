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
        var _this = this;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff);
        bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        this.addChild(bg);
        this.setup();
        this.addEventListener(egret.Event.ENTER_FRAME, this.loop, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            _this.mousedown = true;
            _this.mouse.x = e.stageX;
            _this.mouse.y = e.stageY;
        }, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, function () { _this.mousedown = false; }, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) { _this.mouse.x = e.stageX; _this.mouse.y = e.stageY; }, this);
    };
    Main.prototype.setup = function () {
        this.createWorld();
        this.boxes = [];
        this.mouse = new Vector2D(0, 0);
        this.boundary = new Boundary(new Vector2D(100, 400), new Vector2D(500, 400), this.world);
        this.addChild(this.boundary);
        this.boundary.display();
        var listener = new Box2D.Dynamics.b2ContactListener();
        this.world.SetContactListener(listener);
        listener.BeginContact = function (cp) {
            var f1 = cp.GetFixtureA();
            var f2 = cp.GetFixtureB();
            var b1 = f1.GetBody();
            var b2 = f2.GetBody();
            var p1 = b2.GetUserData();
            console.log(p1);
        };
    };
    Main.prototype.createWorld = function () {
        var gravity = new Box2D.Common.Math.b2Vec2(0, 10);
        this.world = new Box2D.Dynamics.b2World(gravity, true); //创建世界
    };
    Main.prototype.loop = function (e) {
        if (this.mousedown) {
            var b = new Windmill(this.mouse.x, this.mouse.y, this.world);
            this.boxes.push(b);
            this.addChild(b);
        }
        for (var _i = 0, _a = this.boxes; _i < _a.length; _i++) {
            var box = _a[_i];
            var wind = new Box2D.Common.Math.b2Vec2(0.2, 0);
            box.applyForce(wind);
            box.display();
        }
        this.world.Step(1 / 60, 10, 10);
        /*this.world.DrawDebugData();*/
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
var Listener = (function () {
    function Listener() {
    }
    Listener.prototype.BeginContact = function () {
    };
    Listener.prototype.EndContact = function () {
    };
    Listener.prototype.PostSolve = function () {
    };
    Listener.prototype.PreSolve = function () {
    };
    return Listener;
}());
__reflect(Listener.prototype, "Listener");
//# sourceMappingURL=Main.js.map