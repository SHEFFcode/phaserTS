var Game;
(function (Game) {
    var ExtreameWalkingSimulator = (function () {
        function ExtreameWalkingSimulator() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }
        ExtreameWalkingSimulator.prototype.preload = function () {
        };
        ExtreameWalkingSimulator.prototype.create = function () {
        };
        return ExtreameWalkingSimulator;
    }());
    Game.ExtreameWalkingSimulator = ExtreameWalkingSimulator;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.ExtreameWalkingSimulator();
};
//# sourceMappingURL=app.js.map