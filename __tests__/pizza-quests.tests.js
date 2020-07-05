import { Player } from './../src/player.js';
import { Monster } from './../src/monsters.js';

describe('Player', () => {

    test('should instantiate Player with health at 20', () => {
        let player = new Player("Jan", "Cheerleader")
        expect(player.health).toEqual(20);
    })
    test('should instantiate Player with charisma at 0', () => {
        let player = new Player("Jan", "Mechanic")
        expect(player.charisma).toEqual(0);
    });
    test('should instantiate Player with pizzaHealth at 20', () => {
        let player = new Player("Jan", "Cheerleader")
        expect(player.pizzaHealth).toEqual(20);
    });
    test('should instantiate Player with horsepower at 4', () => {
        let player = new Player("Jan", "Cheerleader")
        expect(player.horsepower).toEqual(4);
    });
    test('should instantiate Player with name  Jan', () => {
        let player = new Player("Jan", "Cheerleader")
        expect(player.name).toEqual('Jan');
    });
    test('should instantiate Player with characterClass Cheerleader', () => {
        let player = new Player("Jan", "Cheerleader")
        expect(player.characterClass).toEqual('Cheerleader');
    });
});

describe('Monster', () => {

    test('should instantiate Monster with Gremlin stats', () => {
        let monster = new Monster("Gremlin")
        monster.monsterClass();
        expect(monster.name).toEqual('Gremlin');
        expect(monster.health).toEqual(10)
        expect(monster.ac).toEqual(7)
        expect(monster.horsepower).toEqual(1)
        expect(monster.charisma).toEqual(13)
    });
    test('should instantiate Monster with Bugbear stats', () => {
        let monster = new Monster("Bugbear")
        monster.monsterClass();
        expect(monster.name).toEqual('Bugbear');
        expect(monster.health).toEqual(20)
        expect(monster.ac).toEqual(10)
        expect(monster.horsepower).toEqual(2)
        expect(monster.charisma).toEqual(11)
    });
    test('should instantiate Monster with Ogre stats', () => {
        let monster = new Monster("Ogre")
        monster.monsterClass();
        expect(monster.name).toEqual('Ogre');
        expect(monster.health).toEqual(30)
        expect(monster.ac).toEqual(12)
        expect(monster.horsepower).toEqual(4)
        expect(monster.charisma).toEqual(8)
    });
    test('should instantiate Monster with Roadrage stats', () => {
        let monster = new Monster("Roadrage")
        monster.monsterClass();
        expect(monster.name).toEqual('Roadrage');
        expect(monster.health).toEqual(15)
        expect(monster.ac).toEqual(15)
        expect(monster.horsepower).toEqual(6)
        expect(monster.charisma).toEqual(15)
    });
});





