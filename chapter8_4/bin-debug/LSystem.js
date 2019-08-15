var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LSystem = (function () {
    function LSystem(axiom, ruleset) {
        this._axiom = axiom;
        this._current = axiom;
        this._ruleset = ruleset;
    }
    LSystem.prototype.getSentence = function () {
        return this._current;
    };
    LSystem.prototype.generate = function () {
        var next = "";
        for (var i = 0; i < this._current.length; i++) {
            var c = this._current.charAt(i);
            for (var j = 0; j < this._ruleset.length; j++) {
                var rule = this._ruleset[j];
                if (c == rule.pre) {
                    next += rule.successor;
                }
            }
        }
        this._current = next;
    };
    return LSystem;
}());
__reflect(LSystem.prototype, "LSystem");
//# sourceMappingURL=LSystem.js.map