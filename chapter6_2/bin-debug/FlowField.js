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
var FlowField = (function (_super) {
    __extends(FlowField, _super);
    function FlowField(width, height) {
        var _this = _super.call(this) || this;
        _this.resolution = 20;
        _this.cols = Math.floor(width / _this.resolution);
        _this.rows = Math.floor(height / _this.resolution);
        _this.field = [];
        _this.noise = new Noise();
        _this.fillField();
        _this.display();
        return _this;
    }
    FlowField.prototype.fillField = function () {
        var xoff = 0;
        for (var i = 0; i < this.rows; i++) {
            var arr = [];
            var yoff = 0;
            for (var j = 0; j < this.cols; j++) {
                var num = this.noise.perlinNoise_2D(xoff, yoff);
                num = 2 * (num + 0.3) * Math.PI / 0.7;
                var v = new Vector2D(Math.cos(num), Math.sin(num));
                arr.push(v);
                yoff += 0.2;
            }
            xoff += 0.2;
            this.field.push(arr);
        }
    };
    FlowField.prototype.lookup = function (lookup) {
        var column = Math.floor(lookup.x / this.resolution);
        column = column > 0 ? (column >= this.cols ? (this.cols - 1) : column) : 0;
        var row = Math.floor(lookup.y / this.resolution);
        row = row > 0 ? (row >= this.rows ? (this.rows - 1) : row) : 0;
        return this.field[row][column].copy();
    };
    FlowField.prototype.display = function () {
        for (var i = 0; i < this.field.length; i++) {
            for (var j = 0; j < this.field[i].length; j++) {
                var v = this.field[i][j];
                var angle = v.heading2D();
                this.drawShape(i, j, angle);
            }
        }
    };
    FlowField.prototype.drawShape = function (i, j, angle) {
        var shape = new egret.Shape();
        var g = shape.graphics;
        g.beginFill(0x5abcf4);
        g.moveTo(8, 0);
        g.lineTo(-8, -4);
        g.lineTo(-8, 4);
        g.lineTo(8, 0);
        shape.x = j * this.resolution;
        shape.y = i * this.resolution;
        shape.rotation = angle * 180 / Math.PI;
        this.addChild(shape);
    };
    return FlowField;
}(egret.Sprite));
__reflect(FlowField.prototype, "FlowField");
//# sourceMappingURL=FlowField.js.map