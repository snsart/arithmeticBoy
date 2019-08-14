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
        this.mouse = new Vector2D(0, 0);
        this.path = new Path();
        this.path.addPoint(100, 300);
        this.path.addPoint(300, 400);
        this.path.addPoint(600, 200);
        this.path.addPoint(900, 300);
        this.path.addPoint(700, 500);
        this.path.addPoint(400, 600);
        this.path.display();
        this.addChild(this.path);
        this.vehicle = new Vehicle(1, 0, 200);
        this.addChild(this.vehicle);
    };
    Main.prototype.loop = function (e) {
        this.vehicle.follow(this.path);
        this.vehicle.update();
        this.vehicle.display();
        this.vehicle.checkEdge(this.stage.stageWidth, this.stage.stageHeight);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map