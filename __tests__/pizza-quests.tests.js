import { Player } from "./../src/player.js";
import { Monster } from "./../src/monsters.js";
import { Game } from "./../src/game.js";
describe("Player", () => {
  test("should instantiate Player with health at 20", () => {
    let player = new Player("Jan", "Cheerleader");
    expect(player.health).toEqual(20);
  });
  test("should instantiate Player with charisma at 0", () => {
    let player = new Player("Jan", "Mechanic");
    expect(player.charisma).toEqual(0);
  });
  test("should instantiate Player with pizzaHealth at 20", () => {
    let player = new Player("Jan", "Cheerleader");
    expect(player.pizzaHealth).toEqual(20);
  });
  test("should instantiate Player with horsepower at 4", () => {
    let player = new Player("Jan", "Cheerleader");
    expect(player.horsepower).toEqual(4);
  });
  test("should instantiate Player with name  Jan", () => {
    let player = new Player("Jan", "Cheerleader");
    expect(player.name).toEqual("Jan");
  });
  test("should instantiate Player with characterClass Cheerleader", () => {
    let player = new Player("Jan", "Cheerleader");
    expect(player.characterClass).toEqual("Cheerleader");
  });
  test("should instantiate Player with characterClass Cheerleader and update player charisma to 2", () => {
    let player = new Player("Jan", "Cheerleader");
    player.assignCharacterClass();
    expect(player.charisma).toEqual(2);
  });
  test("should rolldice and add players horsepower and return a damage value on success", () => {
    let monster = new Monster("Jimbo", 1, 10, 5, 10, 1);
    let player = new Player("Benny", "Mechanic", 25);
    expect(player.attack(monster)).toBeGreaterThanOrEqual(1);
    expect(player.attack(monster)).toBeLessThan(7);
  });
  test("should rolldice and add players horsepower and return a message on a fail", () => {
    let monster = new Monster("Jimbo", 30, 30, 5, 10, 1);
    let player = new Player("Benny", "Mechanic", 25);
    expect(player.attack(monster)).toEqual("You missed!");
  });
  test("should rolldice and add players charisma to and return a message on success", () => {
    let monster = new Monster("Jimbo", 1, 30, 5, 0, 1);
    let player = new Player("Benny", "Cheerleader");
    expect(player.throwPizza(monster)).toEqual(
      "You threw the pizza and got away! Unfortunately your pizza integrity is now compromised."
    );
  });
  test("should rolldice and add players charisma to and return a message on failed", () => {
    let monster = new Monster("Jimbo", 1, 30, 5, 30, 1);
    let player = new Player("Benny", "Cheerleader");
    expect(player.throwPizza(monster)).toEqual(
      "Oops. You missed AND you wasted your pizza. Bummer."
    );
  });
  test("should change monster health", () => {
    let player = new Player("Jan", "Cheerleader");
    let monster = new Monster("Jimbo", 1, 5, 5, 30, 1);
    player.attack(monster);
    expect(monster.health).toBeLessThan(5);
  });
});
// describe('Monster', () => {

//     test('should instantiate Monster with Gremlin stats', () => {
//         let monster = new Monster("Gremlin")
//         monster.monsterClass();
//         expect(monster.name).toEqual('Gremlin');
//         expect(monster.health).toEqual(10)
//         expect(monster.ac).toEqual(7)
//         expect(monster.horsepower).toEqual(1)
//         expect(monster.charisma).toEqual(13)
//     });
//     test('should instantiate Monster with Bugbear stats', () => {
//         let monster = new Monster("Bugbear")
//         monster.monsterClass();
//         expect(monster.name).toEqual('Bugbear');
//         expect(monster.health).toEqual(20)
//         expect(monster.ac).toEqual(10)
//         expect(monster.horsepower).toEqual(2)
//         expect(monster.charisma).toEqual(11)
//     });
//     test('should instantiate Monster with Ogre stats', () => {
//         let monster = new Monster("Ogre")
//         monster.monsterClass();
//         expect(monster.name).toEqual('Ogre');
//         expect(monster.health).toEqual(30)
//         expect(monster.ac).toEqual(12)
//         expect(monster.horsepower).toEqual(4)
//         expect(monster.charisma).toEqual(8)
//     });
//     test('should instantiate Monster with Roadrage stats', () => {
//         let monster = new Monster("Roadrage")
//         monster.monsterClass();
//         expect(monster.name).toEqual('Roadrage');
//         expect(monster.health).toEqual(15)
//         expect(monster.ac).toEqual(15)
//         expect(monster.horsepower).toEqual(6)
//         expect(monster.charisma).toEqual(15)
//     });
// });

//     describe('Game', () => {
//         test('should return random number between given max and 1', () => {
//             let game = new Game();
//             expect(game.diceRoll(20)).toBeGreaterThanOrEqual(1);
//             expect(game.diceRoll(20)).toBeLessThan(21);
//         });
//     });
