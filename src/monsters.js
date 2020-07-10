export function Monster(name, ac, health, horsepower, charisma, level) {
  this.name = name;
  this.ac = ac;
  this.health = health;
  this.horsepower = horsepower;
  this.charisma = charisma;
  this.level = level;
}

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
