import { Player } from './../src/player.js';
import { Monster } from './../src/monsters.js';

export function Game(level, turns, result, player, monster) {
    this.level = 1;
    this.turns = 0;
    this.result = result;
    this.player = player;
    this.monster = monster;
}

Game.prototype.checkLevel = function (level, monsters) {
    for (let i = 0; i <= monsters.length; i++) {
        if (monsters[i].level == level) {
            return monsters[i];
        };
    };
};

Game.prototype.diceRoll = function (max) {
    return Math.floor(Math.random() * Math.floor(max - 1) + 1);
}

