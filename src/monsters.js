export function Monster(name, ac, health, horsepower, charisma, level, active) {
  this.name = name;
  this.ac = ac;
  this.health = health;
  this.horsepower = horsepower;
  this.charisma = charisma;
  this.level = level;
  this.active = active;
}

Monster.prototype.diceRoll = function (max) {
  return Math.floor(Math.random() * Math.floor(max - 1) + 1);
};

Monster.prototype.takeDamage = function () {
  let damage;
  this.health -= damage;
  return this.health;
};

Monster.prototype.checkHealth = function () {
  if (player.health > 0) {
    return true;
  } else {
    return false;
  }
};

Monster.prototype.doDamage = function (player) {
  let damage = 0;
  if (player.ac <= this.diceRoll(20) + this.horsepower) {
    damage += this.diceRoll(6);
    console.log(damage);
    return damage;
  } else {
    console.log("The monster missed!!");
    return "The monster missed!";
  }
  player.active != player.active;
};
