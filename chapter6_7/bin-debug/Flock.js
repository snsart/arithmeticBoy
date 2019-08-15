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
var Flock = (function (_super) {
    __extends(Flock, _super);
    function Flock() {
        var _this = _super.call(this) || this;
        _this.setup();
        return _this;
    }
    Flock.prototype.setup = function () {
        this.vehicles = [];
    };
    Flock.prototype.run = function () {
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var p = _a[_i];
            p.run(this.vehicles);
        }
    };
    Flock.prototype.addVehicle = function (v) {
        this.vehicles.push(v);
    };
    return Flock;
}(egret.Sprite));
__reflect(Flock.prototype, "Flock");
//# sourceMappingURL=Flock.js.map