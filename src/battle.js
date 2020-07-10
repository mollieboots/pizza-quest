import { Player } from "./player.js";
import { Monster } from "./monsters.js";
import { Game } from "./game.js";

export function doAttack(player, monster) {
  if (player.checkHealth() == true && monster.checkHealth() == true) {
    player.doDamage(monster);
    monster.takeDamage();
  } else if (player.checkHealth() == false) {
  } else if (player.checkHealth() == true && monster.checkHealth() == false) {
  }
  if (monster.checkHealth() == true && player.checkHealth() == true) {
    monster.doDamage(player);
    player.takeDamage();
  }
}
