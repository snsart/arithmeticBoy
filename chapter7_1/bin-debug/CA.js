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
var CA = (function (_super) {
    __extends(CA, _super);
    function CA(width) {
        var _this = _super.call(this) || this;
        _this.generation = 0;
        _this.cells = [];
        _this.ruleset = [0, 1, 0, 1, 1, 0, 1, 0];
        for (var i = 0; i < width; i++) {
            _this.cells.push(0);
        }
        _this.cells[_this.cells.length / 2] = 1;
        _this.rects = [];
        for (var i = 0; i < width; i++) {
            var rect = new egret.Shape();
            _this.rects.push(rect);
            _this.addChild(rect);
        }
        return _this;
    }
    CA.prototype.generate = function () {
        var nextgen = [0];
        for (var i = 1; i < this.cells.length - 1; i++) {
            var left = this.cells[i - 1];
            var me = this.cells[i];
            var right = this.cells[i + 1];
            nextgen.push(this.rules(left, me, right));
        }
        nextgen.push(0);
        this.cells = nextgen;
        this.generation++;
    };
    CA.prototype.rules = function (a, b, c) {
        var s = "" + a + b + c;
        var index = parseInt(s, 2);
        console.log(index);
        return this.ruleset[index];
    };
    CA.prototype.display = function () {
        var w = 3;
        for (var i = 0; i < this.cells.length; i++) {
            var rect = new egret.Shape();
            var g = rect.graphics;
            if (this.cells[i] == 0) {
                g.beginFill(0xffffff);
            }
            else {
                g.beginFill(0x000000);
            }
            g.drawRect(i * w, this.generation * w, w, w);
            this.addChild(rect);
        }
    };
    CA.prototype.display2 = function () {
        var w = 10;
        for (var i = 0; i < this.rects.length; i++) {
            var rect = this.rects[i];
            var g = rect.graphics;
            g.clear();
            g.beginFill(0x000000);
            var height = 1;
            if (this.cells[i] == 0) {
                height = 1;
            }
            else {
                height = 500;
            }
            g.drawRect(i * w, 0, w, height);
        }
    };
    return CA;
}(egret.Sprite));
__reflect(CA.prototype, "CA");
//# sourceMappingURL=CA.js.map