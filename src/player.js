export function Player(name, characterClass, health, horsepower, charisma, pizzaHealth) {
    this.name = name;
    this.characterClass = characterClass;
    this.health = 20;
    this.horsepower = 4;
    this.charisma = 0;
    this.pizzaHealth = 20;
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
    };
};

