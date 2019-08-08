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
        _this.w = 60;
        _this.h = 10;
        _this.p2m = 30; //像素世界和物理世界的转换率，1像素世界=30物理世界
        _this.vertices = [];
        _this.world = world;
        _this.setup(x, y);
        return _this;
    }
    Box.prototype.setup = function (x, y) {
        var _this = this;
        this.vertices = [new Vector2D(0, 10), new Vector2D(40, 10), new Vector2D(40, 30), new Vector2D(0, 30)];
        this.bodyDef = new Box2D.Dynamics.b2BodyDef();
        this.bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        this.bodyDef.position = new Box2D.Common.Math.b2Vec2(x / this.p2m, y / this.p2m);
        this.body = this.world.CreateBody(this.bodyDef);
        var vec = this.vertices.map(function (item) {
            return new Box2D.Common.Math.b2Vec2(item.x / _this.p2m, item.y / _this.p2m);
        });
        this.polygonShape = Box2D.Collision.Shapes.b2PolygonShape.AsArray(vec);
        this.fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        this.fixtureDef.shape = this.polygonShape;
        this.fixtureDef.density = 1;
        this.fixtureDef.friction = 0.3;
        this.fixtureDef.restitution = 0.2;
        this.body.CreateFixture(this.fixtureDef);
        var poly2 = Box2D.Collision.Shapes.b2PolygonShape.AsBox(this.w / this.p2m, this.h / this.p2m);
        var fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.shape = poly2;
        fixtureDef.density = 1;
        fixtureDef.friction = 0.3;
        fixtureDef.restitution = 0.2;
        this.body.CreateFixture(fixtureDef);
        this.shape = new egret.Shape();
        this.addChild(this.shape);
        var g = this.shape.graphics;
        g.clear();
        g.lineStyle(1, 0xff0000);
        g.beginFill(0xff6666);
        g.moveTo(this.vertices[0].x, this.vertices[0].y);
        g.lineTo(this.vertices[1].x, this.vertices[1].y);
        g.lineTo(this.vertices[2].x, this.vertices[2].y);
        g.lineTo(this.vertices[3].x, this.vertices[3].y);
        g.lineTo(this.vertices[0].x, this.vertices[0].y);
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
        this.shape.x = pos.x * this.p2m;
        this.shape.y = pos.y * this.p2m;
        this.shape.rotation = a * this.p2m;
        this.box.x = pos.x * this.p2m;
        this.box.y = pos.y * this.p2m;
        this.box.rotation = a * this.p2m;
    };
    Box.prototype.killBody = function () {
        this.world.DestroyBody(this.body);
    };
    return Box;
}(egret.Sprite));
__reflect(Box.prototype, "Box");
//# sourceMappingURL=Box.js.map