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
var Box = (function (_super) {
    __extends(Box, _super);
    function Box(x, y, world, density) {
        if (density === void 0) { density = 1; }
        var _this = _super.call(this) || this;
        _this.w = 60;
        _this.h = 10;
        _this.p2m = 30; //像素世界和物理世界的转换率，1像素世界=30物理世界
        _this.vertices = [];
        _this.world = world;
        _this.setup(x, y, density);
        return _this;
    }
    Box.prototype.setup = function (x, y, density) {
        if (density === void 0) { density = 1; }
        this.bodyDef = new Box2D.Dynamics.b2BodyDef();
        this.bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        this.bodyDef.position = new Box2D.Common.Math.b2Vec2(x / this.p2m, y / this.p2m);
        this.body = this.world.CreateBody(this.bodyDef);
        var polygonShape = Box2D.Collision.Shapes.b2PolygonShape.AsBox(this.w / this.p2m / 2, this.h / this.p2m / 2);
        var fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.shape = polygonShape;
        fixtureDef.density = density;
        fixtureDef.friction = 0.3;
        fixtureDef.restitution = 0.2;
        this.body.CreateFixture(fixtureDef);
        this.box = new egret.Shape();
        this.addChild(this.box);
        var g2 = this.box.graphics;
        g2.clear();
        g2.lineStyle(1, 0xff0000);
        g2.beginFill(0x666666);
        g2.drawRect(0, 0, this.w, this.h);
    };
    Box.prototype.display = function () {
        var pos = this.body.GetPosition();
        var a = this.body.GetAngle();
        this.box.x = pos.x * this.p2m;
        this.box.y = pos.y * this.p2m;
        this.box.anchorOffsetX = this.w / 2;
        this.box.anchorOffsetY = this.h / 2;
        this.box.rotation = a * this.p2m;
    };
    Box.prototype.killBody = function () {
        this.world.DestroyBody(this.body);
    };
    return Box;
}(egret.Sprite));
__reflect(Box.prototype, "Box");
//# sourceMappingURL=Box.js.map