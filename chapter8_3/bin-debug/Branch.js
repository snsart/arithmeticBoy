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
var Branch = (function (_super) {
    __extends(Branch, _super);
    function Branch(angle, len, thickness, startPoint) {
        var _this = _super.call(this) || this;
        _this._angle = angle;
        _this._len = len;
        _this._startPoint = startPoint.copy();
        _this._thickness = thickness;
        _this.setEndPoint();
        return _this;
    }
    Branch.prototype.setEndPoint = function () {
        var end = this._startPoint.copy();
        var dx = this.len * Math.cos(this._angle);
        var dy = this.len * Math.sin(this._angle);
        end.add(new Vector2D(dx, dy));
        this._endPoint = end;
    };
    Branch.prototype.getEndPoint = function () {
        return this._endPoint;
    };
    Object.defineProperty(Branch.prototype, "len", {
        get: function () {
            return this._len;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "thickness", {
        get: function () {
            return this._thickness;
        },
        enumerable: true,
        configurable: true
    });
    Branch.prototype.display = function () {
        var g = this.graphics;
        g.clear();
        g.lineStyle(this._thickness, 0x159800);
        g.moveTo(this._startPoint.x, this._startPoint.y);
        g.lineTo(this._endPoint.x, this._endPoint.y);
    };
    return Branch;
}(egret.Shape));
__reflect(Branch.prototype, "Branch");
//# sourceMappingURL=Branch.js.map