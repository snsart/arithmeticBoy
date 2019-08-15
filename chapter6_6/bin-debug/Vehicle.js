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
var Vehicle = (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle(mass, x, y) {
        var _this = _super.call(this) || this;
        _this.mass = mass;
        _this.location = new Vector2D(x, y);
        _this.velocity = new Vector2D(0, 0);
        _this.acceleration = new Vector2D(0, 0);
        _this.maxspeed = 10;
        _this.maxforce = 0.2;
        _this.shape = new egret.Shape();
        var g = _this.shape.graphics;
        g.clear();
        g.beginFill(0xff0000);
        g.moveTo(0, 0);
        g.lineTo(-30, -15);
        g.lineTo(-30, 15);
        g.lineTo(0, 0);
        _this.addChild(_this.shape);
        _this.shape.x = _this.location.x;
        _this.shape.y = _this.location.y;
        return _this;
    }
    /*寻找
    *转向力=所需速度-当前速度
    *设计不同的行为就是通过设计不同的所需速度来实现的;
    */
    Vehicle.prototype.seek = function (target) {
        var desired = Vector2D.sub(target, this.location);
        desired.normalize();
        desired.mult(this.maxspeed);
        var steer = Vector2D.sub(desired, this.velocity);
        steer.limit(this.maxforce);
        return steer;
    };
    /*和其它小车分离*/
    Vehicle.prototype.separate = function (vehicles) {
        var desiredseparation = 50;
        var sum = new Vector2D(0, 0);
        var count = 0;
        for (var _i = 0, vehicles_1 = vehicles; _i < vehicles_1.length; _i++) {
            var other = vehicles_1[_i];
            var d = Vector2D.dist(this.location, other.location);
            if (d > 0 && d < desiredseparation) {
                var diff = Vector2D.sub(this.location, other.location);
                diff.normalize();
                sum.add(diff);
                count++;
            }
        }
        if (count > 0) {
            sum.div(count);
            sum.setMag(this.maxspeed);
            var steer = Vector2D.sub(sum, this.velocity);
            steer.limit(this.maxforce);
            return steer;
        }
        return new Vector2D(0, 0);
    };
    /*结合多个行为*/
    Vehicle.prototype.applyBehaviors = function (vehicles, seekTarget) {
        var separate = this.separate(vehicles);
        var seek = this.seek(seekTarget);
        separate.mult(1.5);
        seek.mult(0.5);
        this.applyForce(separate);
        this.applyForce(seek);
    };
    /*求解法线交点*/
    Vehicle.prototype.getNormalPoint = function (p, a, b) {
        var ap = Vector2D.sub(p, a);
        var ab = Vector2D.sub(b, a);
        ab.normalize();
        ab.mult(ap.dot(ab));
        var normalPoint = Vector2D.add(a, ab);
        return normalPoint;
    };
    Vehicle.prototype.applyForce = function (force) {
        console.log(this.mass);
        var f = Vector2D.div(force, this.mass);
        this.acceleration.add(f);
    };
    Vehicle.prototype.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    };
    Vehicle.prototype.display = function () {
        this.shape.x = this.location.x;
        this.shape.y = this.location.y;
        var angle = this.velocity.heading2D() * 180 / Math.PI;
        this.shape.rotation = angle;
    };
    Vehicle.prototype.checkEdge = function (width, height) {
        if (this.location.x > width) {
            this.location.x = 0;
        }
        else if (this.location.x < 0) {
            this.location.x = width;
        }
        if (this.location.y > height) {
            this.location.y = 0;
        }
        else if (this.location.y < 0) {
            this.location.y = height;
        }
    };
    return Vehicle;
}(egret.Sprite));
__reflect(Vehicle.prototype, "Vehicle");
//# sourceMappingURL=Vehicle.js.map