import { Player } from './../src/player.js';

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
    test('should instantiate Player with name  Jan', () =>{
        let player = new Player("Jan", "Cheerleader")
        expect(player.name).toEqual('Jan');
    });
    test('should instantiate Player with characterClass Cheerleader', () =>{
        let player = new Player("Jan", "Cheerleader")
        expect(player.characterClass).toEqual('Cheerleader');
    });
});



