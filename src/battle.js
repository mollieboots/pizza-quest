import { Player } from "./player.js";
import { Monster } from "./monsters.js";
import { Game } from "./game.js";

function doAttack(player, monster) {
  if (player.checkHealth() == true && monster.checkHealth() == true) {
    player.attack(monster);
    monster.takeDamage(damage);
  } else if (player.checkHealth() == false) {
  } else if (player.checkHealth() == true && monster.checkHealth() == false) {
  }
}
