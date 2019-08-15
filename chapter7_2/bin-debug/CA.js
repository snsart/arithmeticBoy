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
    function CA(cols, rows) {
        var _this = _super.call(this) || this;
        _this.generation = 0;
        _this.cols = cols;
        _this.rows = rows;
        _this.setup();
        _this.drawBoard();
        return _this;
    }
    CA.prototype.setup = function () {
        this.rects = [];
        this.boards = [];
        this.states1 = [];
        this.states2 = [];
        for (var i = 0; i < this.rows; i++) {
            var arr = [];
            for (var j = 0; j < this.cols; j++) {
                arr.push(Math.round(Math.random()));
            }
            this.states1.push(arr.concat());
            this.states2.push(arr.concat());
            this.boards.push(arr.concat());
        }
    };
    CA.prototype.drawBoard = function () {
        var w = 10;
        for (var i = 0; i < this.rows; i++) {
            var arr = [];
            for (var j = 0; j < this.cols; j++) {
                var rect = new egret.Shape();
                var g = rect.graphics;
                if (this.boards[i][j] == 0) {
                    g.beginFill(0x000000);
                }
                else {
                    g.beginFill(0xffffff);
                }
                g.drawRect((j + 1) * w, (i + 1) * w, w, w);
                arr.push(rect);
                this.addChild(rect);
            }
            this.rects.push(arr);
        }
    };
    CA.prototype.generate = function () {
        var currentState = this.generation % 2 == 0 ? this.states1 : this.states2;
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                currentState[i][j] = this.rules(i, j, this.getNeighNum(i, j));
            }
        }
        this.boards = currentState;
        this.generation++;
    };
    CA.prototype.getNeighNum = function (i, j) {
        var neighNum = 0;
        var startRow = i == 0 ? 0 : i - 1;
        var endRow = i == this.rows - 1 ? this.rows - 1 : i + 1;
        var startCol = j == 0 ? 0 : j - 1;
        var endCol = j == this.cols - 1 ? this.cols - 1 : j + 1;
        for (var row = startRow; row <= endRow; row++) {
            for (var col = startCol; col <= endCol; col++) {
                neighNum += this.boards[row][col];
            }
        }
        neighNum -= this.boards[i][j];
        return neighNum;
    };
    CA.prototype.rules = function (i, j, neighNum) {
        var currentState = this.boards[i][j];
        if (currentState == 1 && neighNum < 0) {
            return 0;
        }
        else if (currentState == 1 && neighNum > 3) {
            return 0;
        }
        else if (currentState == 0 && neighNum == 3) {
            return 1;
        }
        else {
            return currentState;
        }
    };
    CA.prototype.display = function () {
        var w = 10;
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                var rect = this.rects[i][j];
                var g = rect.graphics;
                g.clear();
                if (this.boards[i][j] == 0) {
                    g.beginFill(0x000000);
                }
                else {
                    g.beginFill(0xffffff);
                }
                g.drawRect((j + 1) * w, (i + 1) * w, w, w);
            }
        }
    };
    return CA;
}(egret.Sprite));
__reflect(CA.prototype, "CA");
//# sourceMappingURL=CA.js.map