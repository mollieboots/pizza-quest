import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {roulette} from './roulette';
import $ from 'jquery';

$(document).ready(function () {
    var win = Math.ceil(Math.random() * 6);
    $('#win').text(win);

    $('#roulette-form').submit(function (event) {
        event.preventDefault();  
        $('#solution').append("<li>" + "triggers the gun" + "</li>");
        // var output = roulette(goal);
        // output.forEach(function (element) {
        //     $('#solution').append("<li>" + element + "</li>");
        // });
    });
});