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
var Windmill = (function (_super) {
    __extends(Windmill, _super);
    function Windmill(x, y, world) {
        var _this = _super.call(this) || this;
        _this.p2m = 30; //像素世界和物理世界的转换率，1像素世界=30物理世界
        _this.world = world;
        _this.setup(x, y);
        return _this;
    }
    Windmill.prototype.setup = function (x, y) {
        var jointLength = 100;
        this.box1 = new Box(x, y, this.world, 0);
        this.box2 = new Box(x, y + 120, this.world);
        this.addChild(this.box1);
        this.addChild(this.box2);
        var rjd = new Box2D.Dynamics.Joints.b2RevoluteJointDef();
        rjd.Initialize(this.box1.body, this.box2.body, this.box1.body.GetWorldCenter());
        rjd.enableMotor = true;
        rjd.motorSpeed = Math.PI * 2;
        rjd.maxMotorTorque = 1000;
        /*rjd.enableLimit=true;*/
        /*	rjd.lowerAngle=-Math.PI;
            rjd.upperAngle=Math.PI;*/
        var dj = this.world.CreateJoint(rjd);
    };
    Windmill.prototype.applyForce = function (force) {
        this.box1.applyForce(force);
        this.box2.applyForce(force);
    };
    Windmill.prototype.display = function () {
        var pos1 = this.box1.body.GetPosition();
        var pos2 = this.box2.body.GetPosition();
        var g = this.graphics;
        g.clear();
        g.lineStyle(2, 0xff0000);
        g.moveTo(pos1.x * this.p2m, pos1.y * this.p2m);
        g.lineTo(pos2.x * this.p2m, pos2.y * this.p2m);
        this.box1.display();
        this.box2.display();
    };
    return Windmill;
}(egret.Sprite));
__reflect(Windmill.prototype, "Windmill");
//# sourceMappingURL=Windmill.js.map