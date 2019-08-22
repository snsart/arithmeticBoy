var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DNA = (function () {
    function DNA() {
        this._genes = [];
        for (var i = 0; i < 10; i++) {
            var codeIndex = Math.floor(Math.random() * (128 - 32) + 32);
            var c = String.fromCharCode(codeIndex);
            this._genes.push(c);
        }
    }
    Object.defineProperty(DNA.prototype, "fitness", {
        get: function () {
            var target = "helloworld";
            var score = 0;
            for (var i = 0; i < this._genes.length; i++) {
                if (this._genes[i] == target.charAt(i)) {
                    score++;
                }
            }
            this._fitness = score / target.length;
            return this._fitness;
        },
        enumerable: true,
        configurable: true
    });
    DNA.prototype.crossover = function (partner) {
        var child = new DNA();
        var midpoint = Math.floor(Math.random() * 10);
        for (var i = 0; i < this._genes.length; i++) {
            if (i > midpoint) {
                child._genes[i] = this._genes[i];
            }
            else {
                child._genes[i] = partner._genes[i];
            }
        }
        return child;
    };
    DNA.prototype.mutate = function (mutationRate) {
        for (var i = 0; i < this._genes.length; i++) {
            if (Math.random() < mutationRate) {
                var codeIndex = Math.floor(Math.random() * (128 - 32) + 32);
                var c = String.fromCharCode(codeIndex);
                this._genes[i] = c;
            }
        }
    };
    DNA.prototype.getPharse = function () {
        return this._genes.join("");
    };
    return DNA;
}());
__reflect(DNA.prototype, "DNA");
//# sourceMappingURL=DNA.js.map