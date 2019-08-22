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
var Boundary = (function (_super) {
    __extends(Boundary, _super);
    function Boundary(x, y, w, h, world) {
        var _this = _super.call(this) || this;
        _this.p2m = 30;
        _this.px = x;
        _this.py = y;
        _this.w = w;
        _this.h = h;
        _this.world = world;
        var bd = new Box2D.Dynamics.b2BodyDef();
        bd.position.Set(_this.px / _this.p2m, _this.py / _this.p2m);
        bd.type = Box2D.Dynamics.b2Body.b2_staticBody;
        var b = _this.world.CreateBody(bd);
        var ps = Box2D.Collision.Shapes.b2PolygonShape.AsBox(_this.w / _this.p2m / 2, _this.h / _this.p2m / 2);
        var fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.shape = ps;
        b.CreateFixture(fixtureDef);
        return _this;
    }
    Boundary.prototype.display = function () {
        var g = this.graphics;
        g.clear();
        g.beginFill(0x000000);
        g.drawRect(this.px - this.w / 2, this.py - this.h / 2, this.w, this.h);
    };
    return Boundary;
}(egret.Sprite));
__reflect(Boundary.prototype, "Boundary");
//# sourceMappingURL=Boundary.js.map