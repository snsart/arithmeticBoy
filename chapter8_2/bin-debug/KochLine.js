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
var KochLine = (function (_super) {
    __extends(KochLine, _super);
    function KochLine(a, b) {
        var _this = _super.call(this) || this;
        _this.start = a.copy();
        _this.end = b.copy();
        return _this;
    }
    KochLine.prototype.kochA = function () {
        return this.start.copy();
    };
    KochLine.prototype.kochB = function () {
        var v = Vector2D.sub(this.end, this.start);
        v.div(3);
        v.add(this.start);
        return v;
    };
    KochLine.prototype.kochC = function () {
        var a = this.start.copy();
        var v = Vector2D.sub(this.end, this.start);
        v.div(3);
        a.add(v);
        v.rotate(Math.PI / 3);
        a.add(v);
        return a;
    };
    KochLine.prototype.kochD = function () {
        var v = Vector2D.sub(this.end, this.start);
        v.mult(2 / 3);
        v.add(this.start);
        return v;
    };
    KochLine.prototype.kochE = function () {
        return this.end.copy();
    };
    KochLine.prototype.display = function () {
        var g = this.graphics;
        g.clear();
        g.lineStyle(2, 0xff0000);
        g.moveTo(this.start.x, this.start.y);
        g.lineTo(this.end.x, this.end.y);
    };
    return KochLine;
}(egret.Shape));
__reflect(KochLine.prototype, "KochLine");
//# sourceMappingURL=KochLine.js.map