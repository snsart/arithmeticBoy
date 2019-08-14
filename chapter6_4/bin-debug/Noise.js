var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Noise = (function () {
    function Noise() {
    }
    Noise.prototype.noise = function (x, y) {
        var n = x + y * 57;
        n = (n << 13) ^ n;
        return (1.0 - ((n * (n * n * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0);
    };
    Noise.prototype.smoothNoise_1 = function (x, y) {
        var corners = (this.noise(x - 1, y - 1) + this.noise(x + 1, y - 1) + this.noise(x - 1, y + 1) + this.noise(x + 1, y + 1)) / 16, sides = (this.noise(x - 1, y) + this.noise(x + 1, y) + this.noise(x, y - 1) + this.noise(x, y + 1)) / 8, center = this.noise(x, y) / 4;
        return corners + sides + center;
    };
    Noise.prototype.interpolatedNoise_1 = function (x, y) {
        var integer_X = Math.floor(x), fractional_X = x - integer_X, integer_Y = Math.floor(y), fractional_Y = y - integer_Y, v1 = this.smoothNoise_1(integer_X, integer_Y), v2 = this.smoothNoise_1(integer_X + 1, integer_Y), v3 = this.smoothNoise_1(integer_X, integer_Y + 1), v4 = this.smoothNoise_1(integer_X + 1, integer_Y + 1), i1 = this.interpolate(v1, v2, fractional_X), i2 = this.interpolate(v3, v4, fractional_X);
        return this.interpolate(i1, i2, fractional_Y);
    };
    Noise.prototype.perlinNoise_2D = function (x, y) {
        var total = 0, p = 0.25, n = 4;
        for (var i = 0; i < n; i++) {
            var frequency = Math.pow(2, i);
            var amplitude = Math.pow(p, i);
            total = total + this.interpolatedNoise_1(x * frequency, y * frequency) * amplitude;
        }
        return total;
    };
    Noise.prototype.interpolate = function (a, b, x) {
        var ft = x * 3.1415927;
        var f = (1 - Math.cos(ft)) * 0.5;
        return a * (1 - f) + b * f;
    };
    return Noise;
}());
__reflect(Noise.prototype, "Noise");
//# sourceMappingURL=Noise.js.map