import { Monster } from "./monsters.js";

// console.log(monster.health);

export function Player(name, characterClass, active) {
  this.name = name;
  this.characterClass = characterClass;
  this.active = active;
  this.health = 20;
  this.horsepower = 4;
  this.charisma = 0;
  this.pizzaHealth = 20;
}

let monster = new Monster("Gremlin", 7, false, 100, 1, 2, 1);

Player.prototype.diceRoll = function (max) {
  return Math.floor(Math.random() * Math.floor(max - 1) + 1);
};

Player.prototype.takeDamage = function (damage) {
  this.health -= damage;
  return this.health;
};

Player.prototype.takePizzaDamage = function () {
  this.pizzaHealth -= 5;
  return this.pizzaHealth;
};

Player.prototype.assignCharacterClass = function () {
  if (this.characterClass === "Mechanic") {
    this.health = 25;
  } else if (this.characterClass === "Cheerleader") {
    this.charisma = 2;
  } else if (this.characterClass === "Jock") {
    this.horsepower = 6;
  }
};

Player.prototype.doDamage = function (monster) {
  let damage = 0;
  console.log(this);
  if (monster.ac <= this.diceRoll(20) + this.horsepower) {
    console.log("YOU DID NOT MISS");
    damage += this.diceRoll(6);
  } else {
    console.log("You missed!!");
    return "You missed!";
  }
  this.active != this.active;
  return damage;
};

Player.prototype.throwPizza = function (monster) {
  this.takePizzaDamage();
  if (monster.charisma >= this.diceRoll(20) + this.charisma) {
    return "Oops. You missed AND you wasted your pizza. Bummer.";
  } else {
    return "You threw the pizza and got away! Unfortunately your pizza integrity is now compromised.";
  }
};

Player.prototype.runAway = function (monster) {
  if (this.diceRoll(20) >= monster.health) {
    return "You got away safely!";
  } else {
    return "Unable to escape!!";
  }
};

Player.prototype.checkHealth = function () {
  if (this.health > 0) {
    return true;
  } else {
    return false;
  }
};
