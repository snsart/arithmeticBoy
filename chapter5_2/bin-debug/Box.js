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
    function Box(x, y, world) {
        var _this = _super.call(this) || this;
        _this.w = 40;
        _this.h = 20;
        _this.p2m = 30; //像素世界和物理世界的转换率，1像素世界=30物理世界
        _this.world = world;
        _this.setup(x, y);
        return _this;
        //this.setPosition(x,y);
    }
    Box.prototype.setup = function (x, y) {
        this.bodyDef = new Box2D.Dynamics.b2BodyDef();
        this.bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        this.bodyDef.position = new Box2D.Common.Math.b2Vec2(x / this.p2m, y / this.p2m);
        this.body = this.world.CreateBody(this.bodyDef);
        this.polygonShape = Box2D.Collision.Shapes.b2PolygonShape.AsBox(this.w / this.p2m / 2, this.h / this.p2m / 2);
        //this.polygonShape.SetAsBox();
        this.fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        this.fixtureDef.shape = this.polygonShape;
        this.fixtureDef.density = 1;
        this.fixtureDef.friction = 0.3;
        this.fixtureDef.restitution = 0.5;
        this.body.CreateFixture(this.fixtureDef);
        this.rect = new egret.Shape();
        this.addChild(this.rect);
        var g = this.rect.graphics;
        g.clear();
        g.beginFill(0xff0000);
        g.drawRect(0, 0, this.w, this.h);
    };
    Box.prototype.setPosition = function (x, y) {
        //console.log(x,y);
        var pos = this.body.GetPosition();
    };
    Box.prototype.display = function () {
        var pos = this.body.GetPosition();
        var a = this.body.GetAngle();
        this.rect.x = pos.x * this.p2m;
        this.rect.y = pos.y * this.p2m;
        this.rect.anchorOffsetX = this.w / 2;
        this.rect.anchorOffsetY = this.h / 2;
        this.rect.rotation = a * this.p2m;
    };
    Box.prototype.killBody = function () {
        this.world.DestroyBody(this.body);
    };
    return Box;
}(egret.Sprite));
__reflect(Box.prototype, "Box");
//# sourceMappingURL=Box.js.map