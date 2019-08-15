var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Rule = (function () {
    function Rule(pre, successor) {
        this._pre = pre;
        this._successor = successor;
    }
    Object.defineProperty(Rule.prototype, "pre", {
        get: function () {
            return this._pre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rule.prototype, "successor", {
        get: function () {
            return this._successor;
        },
        enumerable: true,
        configurable: true
    });
    return Rule;
}());
__reflect(Rule.prototype, "Rule");
//# sourceMappingURL=Rule.js.map