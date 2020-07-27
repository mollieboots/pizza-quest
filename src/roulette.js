import $ from 'jquery';

export function roulette(input) {
    var random = Math.ceil(Math.random() * 6);
if (input === random) {
    $('#solution').append("<li>" + "you lose" + "</li>");   
  } else{
      $('#solution').append("<li>" + "phew" + "</li>"); 
  }

}