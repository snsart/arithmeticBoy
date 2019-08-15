var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Turtle = (function () {
    function Turtle(main, sentence, posY) {
        this._sentence = sentence;
        this._main = main;
        this._posY = posY;
    }
    Turtle.prototype.setToDo = function (sentence) {
        this._sentence = sentence;
    };
    Turtle.prototype.changePosY = function (dy) {
        this._posY += dy;
    };
    Turtle.prototype.render = function () {
        var last;
        for (var i = 0; i < this._sentence.length; i++) {
            var c = this._sentence.charAt(i);
            if (c == "A") {
                var ball = new egret.Shape();
                var g = ball.graphics;
                g.beginFill(0xff0000);
                g.drawCircle((i + 1) * 20, this._posY, 10);
                this._main.addChild(ball);
                last = ball;
            }
            if (c == "B") {
                var ball = new egret.Shape();
                var g = ball.graphics;
                g.beginFill(0xffff00);
                g.drawCircle((i + 1) * 20, this._posY, 10);
                this._main.addChild(ball);
                last = ball;
            }
            if (c == "-") {
                this._main.removeChild(last);
            }
        }
    };
    return Turtle;
}());
__reflect(Turtle.prototype, "Turtle");
//# sourceMappingURL=Turtle.js.map