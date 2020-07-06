import { Player } from './../src/player.js';
import { Monster } from './../src/monsters.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

let monsters = [];
let gremlin = new Monster("Gremlin", 7, 10, 1, 2, 1);
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
        $("#player-name").text(name);
        $('#player-class').text(characterClass);
        $("#player-health").text(player.health);
        $("#player-pizza-health").text(player.pizzaHealth);
    });
});

