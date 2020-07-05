import { Player } from './../src/player.js';
import { Monster } from './../src/monsters.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
    $('#player-input').submit(function(event) {
        event.preventDefault();
        let name = $('#name').val();
        let characterClass = $('#characterClass').val();
        let player = new Player(name, characterClass);
        player.assignCharacterClass();
        console.log(player);
        $('#player-input').hide();
        $("#player").append(name)
        $("#player-health").append(player.health)
        $("#pizza-health").append(player.pizzaHealth)
    })
  
  
}); ;

