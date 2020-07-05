import { Player } from './../src/player.js';
import { Monster } from './../src/monsters.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
    $('#game-start').submit(function(event) {
        event.preventDefault();
        let name = $('#name').val();
        let characterClass = $('#characterClass').val();
        let player = new Player(name, characterClass);
        player.characterClass();
        console.log(player);
        $('#player-input').hide();
    })
  
  
}); ;

