import { Game } from "./game.js";
import { Player } from "./player.js";

export function Monster(name, ac, active, health, horsepower, charisma, level) {
  this.name = name;
  this.ac = ac;
  this.active = active;
  this.health = health;
  this.horsepower = horsepower;
  this.charisma = charisma;
  this.level = level;
}

let player = new Player("Jan", "Cheerleader", true);

Monster.prototype.diceRoll = function (max) {
  return Math.floor(Math.random() * Math.floor(max - 1) + 1);
};

Monster.prototype.takeDamage = function () {
  let damage;
  this.health -= damage;
  return this.health;
};

Monster.prototype.checkHealth = function () {
  if (this.health > 0) {
    return true;
  } else {
    return false;
    // game.increaseLevel();
  }
};

Monster.prototype.doDamage = function (player) {
  let damage = 0;
  if (player.ac <= this.diceRoll(20) + this.horsepower) {
    damage += this.diceRoll(6);
    console.log(damage);
    this.active != this.active;
    return damage;
  } else {
    console.log("The monster missed!!");
    return "The monster missed!";
  }
};
