import { Player } from "./player.js";
import { Monster } from "./monsters.js";
import { Game } from "./game.js";

let monster = new Monster("Gremlin", 7, false, 100, 1, 2, 1);
let player = new Player("Jan", "Cheerleader", true);

console.log(monster.checkHealth(), player.checkHealth());

export function doAttack(player, monster) {
  if (player.checkHealth() == true && monster.checkHealth() == true) {
    console.log("jello")
    player.doDamage(monster);
    monster.takeDamage();
  }
}

export function monstersTurn(player, monster) {
  if ((player.active = false)) {
    monster.doDamage(player);
    player.takeDamage();
    player.checkHealth();
  }
