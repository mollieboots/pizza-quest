import { Player } from './../src/player.js';
import { Monster } from './../src/monsters.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

let monsters = [];
let gremlin = new Monster("Gremlin", 7, 10, 1, 2, 1);
let bugbear = new Monster("Bugbear", 10, 20, 2, 11, 2);
let ogre = new Monster("Ogre", 12, 130, 4, 8, 3);
let roadrage = new Monster("Roadrage", 15, 15, 6, 15, 4);

monsters.push(gremlin,bugbear,ogre,roadrage);

let newGame = new Game();

$(document).ready(function() {
    $('#player-input').submit(function(event) {
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

    $('#attack').submit(function(event) {

    });
    
    $('#throw-pizza').submit(function(event) {

    });

    $('#run-away').submit(function(event) {

    });
});

