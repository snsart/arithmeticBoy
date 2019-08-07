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
    function Box(x, y) {
        var _this = _super.call(this) || this;
        _this.position = new Vector2D(x, y);
        return _this;
    }
    Box.prototype.display = function () {
        var g = this.graphics;
        g.beginFill(0xff0000);
        g.drawRect(this.position.x, this.position.y, 10, 20);
    };
    return Box;
}(egret.Sprite));
__reflect(Box.prototype, "Box");
//# sourceMappingURL=Box.js.map