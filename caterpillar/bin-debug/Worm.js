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
var Worm = (function (_super) {
    __extends(Worm, _super);
    function Worm() {
        var _this = _super.call(this) || this;
        _this.mass = 5;
        _this.segments = [];
        _this.setup();
        return _this;
    }
    Worm.prototype.setup = function () {
        this.location = new Vector2D(1024, 768);
        this.target = new Vector2D(0, 400);
        this.velocity = new Vector2D(0, 0);
        this.acceleration = new Vector2D(0, 0);
        this.createSegments();
    };
    Worm.prototype.createSegments = function () {
        for (var i = 0; i < 10; i++) {
            var segment = new Segment();
            segment.angle = i * Math.PI / 5;
            this.segments.push(segment);
            this.addChild(segment);
        }
    };
    Worm.prototype.applyForce = function (force) {
        var f = Vector2D.div(force, this.mass);
        this.acceleration.add(f);
    };
    Worm.prototype.update = function () {
        var dir = Vector2D.sub(this.target, this.location);
        var force = dir.normalize();
        var angle = force.heading2D();
        var totalForce = new Vector2D(0, 0);
        for (var i = 0; i < this.segments.length; i++) {
            var segment = this.segments[i];
            segment.heading = angle;
            segment.update();
            if (!segment.toHead()) {
                force.mult(0.01);
                totalForce.add(force);
                force.normalize();
            }
        }
        this.applyForce(totalForce);
        var fraction = this.velocity.copy();
        fraction.normalize();
        fraction.mult(-0.04);
        this.applyForce(fraction);
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    };
    Worm.prototype.display = function () {
        var dir = Vector2D.sub(this.target, this.location);
        var force = dir.normalize();
        var angle = force.heading2D();
        this.segments[0].x = this.location.x;
        this.segments[0].y = this.location.y;
        this.segments[0].display();
        for (var i = 1; i < this.segments.length; i++) {
            this.segments[i].x = this.segments[i - 1].x - 10 * Math.cos(angle);
            this.segments[i].y = this.segments[i - 1].y - 10 * Math.sin(angle);
            this.segments[i].display();
        }
    };
    Worm.prototype.checkEdge = function (width, height) {
        if (this.location.x > width) {
            this.location.x = 0;
        }
        else if (this.location.x < 0) {
            this.location.x = width;
        }
        if (this.location.y > height) {
            this.location.y = 0;
        }
        else if (this.location.y < 0) {
            this.location.y = height;
        }
    };
    return Worm;
}(egret.Sprite));
__reflect(Worm.prototype, "Worm");
//# sourceMappingURL=Worm.js.map