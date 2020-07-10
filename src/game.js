import { Player } from "./../src/player.js";
import { Monster } from "./../src/monsters.js";

export function Game(level, active, result, player, monster) {
  this.level = 1;
  this.active = active;
  this.result = result;
  this.player = player;
  this.monster = monster;
}

Game.prototype.checkLevel = function (level, monsters) {
  for (let i = 0; i <= monsters.length; i++) {
    if (monsters[i].level == level) {
      return monsters[i];
    }
  }
};

Game.prototype.increaseLevel = function () {
  this.level += 1;
  return this.level;
};

Game.prototype.diceRoll = function (max) {
  return Math.floor(Math.random() * Math.floor(max - 1) + 1);
};

Game.prototype.active = function (player, monster) {
  if (player.active == true) {
    monster.active == false;
  } else {
    monster.active == true;
  }
  return;
};

// Player.prototype.isActive = function () {

//     if(player1 != player2 && player1 == 1){
//     activePlayer = player1;
//     }else{
//     activePlayer = player2;
//     }
//     return activePlayer;
// };
// function Player(score, activePlayer) {
//     this.score = score;
//     this.activePlayer = activePlayer;
// }
// $("document").ready(function() {
//     let player1 = new Player(0, true);
//     let player2 = new Player(0, false);
