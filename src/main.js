import { Player } from './player.js';
import { Monster } from './monsters.js';
import { Game } from './../src/game.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

let monsters = [];
let gremlin = new Monster("Gremlin", 7, 10, 1, 2, 1);
let bugbear = new Monster("Bugbear", 10, 20, 2, 11, 2);
let ogre = new Monster("Ogre", 12, 25, 4, 8, 3);
let roadrage = new Monster("Roadrage", 15, 30, 6, 15, 4);

monsters.push(gremlin, bugbear, ogre, roadrage);

let newGame = new Game();

$(document).ready(function () {
    $('#player-input').submit(function (event) {
        event.preventDefault();
        let name = $('#name').val();
        let characterClass = $('#characterClass').val();
        let player = new Player(name, characterClass);
        player.assignCharacterClass();
        console.log(player);
        $('#player-input').hide();
        $('#player').show();
        $('#gameplay').show();
        $("#player-name").text(name);
        $('#player-class').text(characterClass);
        $("#player-health").text(player.health);
        $("#player-pizza-health").text(player.pizzaHealth);
    });

    $('#attack').submit(function (event) {
        event.preventDefault();
        if (player.checkHealth() == true && monster.checkHealth() == true) {
            player.attack(monster);
            monster.takeDamage(damage)
        } else if (player.checkHealth() == false) {
            //is this game over?
        } else if (player.checkHealth() == true && monster.checkHealth() == false) {
            //this is ouyour wiinyou win??
        }
    });

    $('#throw-pizza').submit(function (event) {
        event.preventDefault();
        player.throwPizza(monster);
    });

    $('#run-away').submit(function (event) {
        event.preventDefault();
        player.runAway(monster)
    });
});

