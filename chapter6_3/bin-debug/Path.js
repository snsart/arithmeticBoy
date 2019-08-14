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
        _this.start = new Vector2D(100, 300);
        _this.end = new Vector2D(900, 500);
        _this.radius = 20;
        _this.display();
        return _this;
    }
    Path.prototype.display = function () {
        var g = this.graphics;
        g.lineStyle(this.radius * 2, 0xbbbbbb);
        g.moveTo(this.start.x, this.start.y);
        g.lineTo(this.end.x, this.end.y);
        g.lineStyle(1, 0x000000);
        g.lineTo(this.start.x, this.start.y);
    };
    return Path;
}(egret.Sprite));
__reflect(Path.prototype, "Path");
//# sourceMappingURL=Path.js.map