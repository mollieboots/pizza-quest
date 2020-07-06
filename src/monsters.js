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
}

Monster.prototype.monsterClass = function () {
    if (this.name === "Gremlin") {
        this.health = 10;
        this.ac = 7;
        this.horsepower = 1;
        this.charisma = 13;
        this.level = 1;
    } else if (this.name === "Bugbear") {
        this.health = 20;
        this.ac = 10;
        this.horsepower = 2;
        this.charisma = 11;
        this.level = 2;
    } else if (this.name === "Ogre") {
        this.health = 30;
        this.ac = 12;
        this.horsepower = 4;
        this.charisma = 8;
        this.level = 3;
    } else if (this.name === "Roadrage") {
        this.health = 15;
        this.ac = 15;
        this.horsepower = 6;
        this.charisma = 15;
        this.level = 4;
    }
}
