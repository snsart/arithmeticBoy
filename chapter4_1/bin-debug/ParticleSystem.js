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
var ParticleSystem = (function (_super) {
    __extends(ParticleSystem, _super);
    function ParticleSystem(location) {
        var _this = _super.call(this) || this;
        _this.origin = location.copy();
        _this.particles = new Array();
        return _this;
    }
    ParticleSystem.prototype.addParticle = function () {
        var p = new Particle(this.origin);
        this.particles.push(p);
        this.addChild(p);
    };
    ParticleSystem.prototype.applyForce = function (f) {
        for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
            var p = _a[_i];
            p.applyForce(f);
        }
    };
    ParticleSystem.prototype.applyRepeller = function (r) {
        for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
            var p = _a[_i];
            var force = r.repel(p);
            p.applyForce(force);
        }
    };
    ParticleSystem.prototype.run = function () {
        for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
            var p = _a[_i];
            p.run();
            if (p.isDead()) {
                this.particles.splice(this.particles.indexOf(p), 1);
                this.removeChild(p);
            }
        }
    };
    return ParticleSystem;
}(egret.Sprite));
__reflect(ParticleSystem.prototype, "ParticleSystem");
//# sourceMappingURL=ParticleSystem.js.map