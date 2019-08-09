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
    function Boundary(start, end, world) {
        var _this = _super.call(this) || this;
        _this.p2m = 30;
        _this.start = start;
        _this.end = end;
        _this.world = world;
        _this.setup();
        return _this;
    }
    Boundary.prototype.setup = function () {
        var bdef = new Box2D.Dynamics.b2BodyDef();
        var body = this.world.CreateBody(bdef);
        var start = new Box2D.Common.Math.b2Vec2(this.start.x / this.p2m, this.start.y / this.p2m);
        var end = new Box2D.Common.Math.b2Vec2(this.end.x / this.p2m, this.end.y / this.p2m);
        var ps = Box2D.Collision.Shapes.b2PolygonShape.AsEdge(start, end);
        var fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.density = 3;
        fixtureDef.restitution = 0.2;
        fixtureDef.shape = ps;
        body.CreateFixture(fixtureDef);
    };
    Boundary.prototype.display = function () {
        var g = this.graphics;
        g.clear();
        g.lineStyle(2, 0x000000);
        g.moveTo(this.start.x, this.start.y);
        g.lineTo(this.end.x, this.end.y);
    };
    return Boundary;
}(egret.Sprite));
__reflect(Boundary.prototype, "Boundary");
//# sourceMappingURL=Boundary.js.map