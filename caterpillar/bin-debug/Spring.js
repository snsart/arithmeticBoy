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
    function Spring(x, y, len) {
        var _this = _super.call(this) || this;
        _this.k = 0.02;
        _this.anchor = new Vector2D(x, y);
        _this.len = len;
        return _this;
    }
    Spring.prototype.connect = function (mover) {
        this.mover = mover;
        var force = Vector2D.sub(mover.location, this.anchor);
        var d = force.mag();
        var stretch = d - this.len;
        force.normalize();
        force.mult(-1 * this.k * stretch);
        this.mover.applyForce(force);
    };
    Spring.prototype.display = function () {
        var g = this.graphics;
        g.clear();
        g.lineStyle(2, 0xff0000);
        g.moveTo(this.anchor.x, this.anchor.y);
        g.lineTo(this.mover.location.x, this.mover.location.y);
        console.log(this.anchor, this.mover.location);
    };
    return Spring;
}(egret.Sprite));
__reflect(Spring.prototype, "Spring");
//# sourceMappingURL=Spring.js.map