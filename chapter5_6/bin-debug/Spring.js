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
var Spring = (function (_super) {
    __extends(Spring, _super);
    function Spring(world) {
        var _this = _super.call(this) || this;
        _this.p2m = 30; //像素世界和物理世界的转换率，1像素世界=30物理世界
        _this.world = world;
        _this.setup();
        return _this;
    }
    Spring.prototype.setup = function () {
    };
    Spring.prototype.bind = function (mousex, mousey, box) {
        this.mousex = mousex;
        this.mousey = mousey;
        this.box = box;
        this.md = new Box2D.Dynamics.Joints.b2MouseJointDef();
        this.md.bodyA = this.world.GetGroundBody();
        this.md.bodyB = box.body;
        this.md.maxForce = 500;
        this.md.frequencyHz = 5.0;
        this.md.dampingRatio = 0.9;
        this.mouseJoint = this.world.CreateJoint(this.md);
        this.mouseJoint.SetTarget(new Box2D.Common.Math.b2Vec2(this.mousex / this.p2m, this.mousey / this.p2m));
    };
    Spring.prototype.update = function (mousex, mousey) {
        this.mousex = mousex;
        this.mousey = mousey;
        this.mouseJoint.SetTarget(new Box2D.Common.Math.b2Vec2(mousex / this.p2m, mousey / this.p2m));
    };
    Spring.prototype.display = function () {
        console.log(this.mousex, this.mousey);
        var pos1 = this.box.body.GetPosition();
        var g = this.graphics;
        g.clear();
        g.lineStyle(2, 0xff0000);
        g.moveTo(pos1.x * this.p2m, pos1.y * this.p2m);
        g.lineTo(this.mousex, this.mousey);
    };
    return Spring;
}(egret.Sprite));
__reflect(Spring.prototype, "Spring");
//# sourceMappingURL=Spring.js.map