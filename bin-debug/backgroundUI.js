var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BackgroundUI = (function (_super) {
    __extends(BackgroundUI, _super);
    function BackgroundUI() {
        var _this = _super.call(this) || this;
        _this._moveDir = "none";
        _this.createImage();
        return _this;
    }
    Object.defineProperty(BackgroundUI.prototype, "moveDir", {
        get: function () {
            return this._moveDir;
        },
        set: function (value) {
            this._moveDir = value;
        },
        enumerable: true,
        configurable: true
    });
    BackgroundUI.prototype.createImage = function () {
        var bg = new egret.Bitmap(RES.getRes("background1"));
        this.addChild(bg);
    };
    BackgroundUI.prototype.scroll = function (dir) {
        this.moveDir = dir;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onScroll, this);
    };
    BackgroundUI.prototype.stopScroll = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onScroll, this);
    };
    BackgroundUI.prototype.onScroll = function (e) {
        if (this._moveDir == "left") {
            if (this.x < 0) {
                this.x += 5;
            }
        }
        if (this._moveDir == "right") {
            if (this.x > -1920) {
                this.x -= 5;
            }
        }
    };
    return BackgroundUI;
}(egret.Sprite));
__reflect(BackgroundUI.prototype, "BackgroundUI");
//# sourceMappingURL=BackgroundUI.js.map