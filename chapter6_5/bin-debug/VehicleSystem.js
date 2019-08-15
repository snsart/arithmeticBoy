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
var VehicleSystem = (function (_super) {
    __extends(VehicleSystem, _super);
    function VehicleSystem() {
        var _this = _super.call(this) || this;
        _this.setup();
        return _this;
    }
    VehicleSystem.prototype.setup = function () {
        this.vehicles = [];
        for (var i = 0; i < 100; i++) {
            var vehicle = new Vehicle(1, Math.random() * 1024, Math.random() * 768);
            this.vehicles.push(vehicle);
            this.addChild(vehicle);
        }
    };
    VehicleSystem.prototype.draw = function () {
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var p = _a[_i];
            p.separate(this.vehicles);
            p.update();
            p.display();
            p.checkEdge(1024, 768);
        }
    };
    return VehicleSystem;
}(egret.Sprite));
__reflect(VehicleSystem.prototype, "VehicleSystem");
//# sourceMappingURL=VehicleSystem.js.map