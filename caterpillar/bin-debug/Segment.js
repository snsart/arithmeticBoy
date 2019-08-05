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
var Segment = (function (_super) {
    __extends(Segment, _super);
    function Segment() {
        var _this = _super.call(this) || this;
        _this.amplitude = 15;
        _this.angle = 0;
        _this.angleVel = 0.04;
        _this.location = new Vector2D(0, 0);
        _this.heading = Math.PI;
        _this.bodyShape = new SegmentShape();
        _this.addChild(_this.bodyShape);
        return _this;
    }
    Segment.prototype.toHead = function () {
        var angle = this.angle % (Math.PI * 2);
        if (angle > 0 && angle < Math.PI) {
            return false;
        }
        return true;
    };
    Segment.prototype.update = function () {
        var l = this.amplitude * Math.cos(this.angle);
        this.angle += this.angleVel;
        this.location.x = l * Math.cos(this.heading);
        this.location.y = l * Math.sin(this.heading);
    };
    Segment.prototype.display = function () {
        this.bodyShape.x = this.location.x;
        this.bodyShape.y = this.location.y;
        this.bodyShape.rotation = this.heading * 180 / Math.PI;
    };
    return Segment;
}(egret.Sprite));
__reflect(Segment.prototype, "Segment");
//# sourceMappingURL=Segment.js.map