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
var Mover = (function (_super) {
    __extends(Mover, _super);
    function Mover(mass, x, y) {
        var _this = _super.call(this) || this;
        _this.mass = mass;
        _this.location = new Vector2D(x, y);
        _this.velocity = new Vector2D(0, 0);
        _this.acceleration = new Vector2D(0, 0);
        return _this;
    }
    Mover.prototype.applyForce = function (force) {
        var f = Vector2D.div(force, this.mass);
        this.acceleration.add(f);
    };
    Mover.prototype.update = function () {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    };
    Mover.prototype.display = function () {
        var g = this.graphics;
        g.clear();
        g.beginFill(0xff0000);
        g.drawCircle(this.location.x, this.location.y, this.mass * 5);
    };
    Mover.prototype.checkEdge = function (width, height) {
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
    return Mover;
}(egret.Sprite));
__reflect(Mover.prototype, "Mover");
//# sourceMappingURL=Mover.js.map