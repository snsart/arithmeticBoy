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
        this.target = new Vector2D(500, 500);
        this.flow = new FlowField(this.stage.stageWidth, this.stage.stageHeight);
        this.addChild(this.flow);
        this.vehicle = new Vehicle(1, 200, 200);
        this.addChild(this.vehicle);
    };
    Main.prototype.loop = function (e) {
        this.target = new Vector2D(this.mouse.x, this.mouse.y);
        //this.vehicle.seek(this.target);
        //this.vehicle.arrive(this.target);
        this.vehicle.follow(this.flow);
        this.vehicle.update();
        this.vehicle.display();
        this.vehicle.checkEdge(this.stage.stageWidth, this.stage.stageHeight);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map