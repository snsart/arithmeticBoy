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
var Path = (function (_super) {
    __extends(Path, _super);
    function Path() {
        var _this = _super.call(this) || this;
        _this.radius = 20;
        _this.points = [];
        return _this;
    }
    Path.prototype.addPoint = function (x, y) {
        var point = new Vector2D(x, y);
        this.points.push(point);
    };
    Path.prototype.display = function () {
        var g = this.graphics;
        g.lineStyle(this.radius * 2, 0xbbbbbb);
        var start = this.points[0];
        g.moveTo(start.x, start.y);
        for (var i = 1, len = this.points.length; i < len; i++) {
            g.lineTo(this.points[i].x, this.points[i].y);
        }
        g.lineStyle(1, 0x000000);
        for (var i = this.points.length - 1; i >= 0; i--) {
            g.lineTo(this.points[i].x, this.points[i].y);
        }
    };
    return Path;
}(egret.Sprite));
__reflect(Path.prototype, "Path");
//# sourceMappingURL=Path.js.map