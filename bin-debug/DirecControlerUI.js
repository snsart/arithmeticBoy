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
var DirecControlerUI = (function (_super) {
    __extends(DirecControlerUI, _super);
    function DirecControlerUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    Object.defineProperty(DirecControlerUI.prototype, "leftBtn", {
        get: function () {
            return this._leftBtn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirecControlerUI.prototype, "rightBtn", {
        get: function () {
            return this._leftBtn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirecControlerUI.prototype, "upBtn", {
        get: function () {
            return this._leftBtn;
        },
        enumerable: true,
        configurable: true
    });
    DirecControlerUI.prototype.createView = function () {
        this._leftBtn = new egret.Sprite();
        this._rightBtn = new egret.Sprite();
        this._upBtn = new egret.Sprite();
        var leftSkin = new egret.Bitmap(RES.getRes("arrow"));
        var rightSkin = new egret.Bitmap(RES.getRes("arrow"));
        var upSkin = new egret.Bitmap(RES.getRes("arrow"));
        this._leftBtn.addChild(leftSkin);
        this._rightBtn.addChild(rightSkin);
        this._upBtn.addChild(upSkin);
        this._leftBtn.x = 50;
        this._leftBtn.y = 0;
        this._leftBtn.anchorOffsetX = this.leftBtn.width / 2;
        this._leftBtn.anchorOffsetY = this.leftBtn.height / 2;
        this._leftBtn.scaleX *= -1;
        this._rightBtn.x = 160;
        this._rightBtn.y = 0;
        this._rightBtn.anchorOffsetX = this.rightBtn.width / 2;
        this._rightBtn.anchorOffsetY = this.rightBtn.height / 2;
        this._upBtn.x = 780;
        this._upBtn.y = 0;
        this._upBtn.anchorOffsetX = this.upBtn.width / 2;
        this._upBtn.anchorOffsetY = this.upBtn.height / 2;
        this._upBtn.rotation = 270;
        this.addChild(this._leftBtn);
        this.addChild(this._rightBtn);
        this.addChild(this._upBtn);
    };
    return DirecControlerUI;
}(egret.Sprite));
__reflect(DirecControlerUI.prototype, "DirecControlerUI");
//# sourceMappingURL=DirecControlerUI.js.map