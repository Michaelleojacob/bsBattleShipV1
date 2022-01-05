import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import '../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../node_modules/@fortawesome/fontawesome-free/js/regular';
import '../node_modules/@fortawesome/fontawesome-free/js/brands';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import app from './app/app';
import ps from './pubsub/pubsub';

function startBattleShip() {
  const game = app();
  game.nonGameAreaContent();
  game.playBattleship();
}
ps.subscribe('startBattleShip', startBattleShip);
ps.publish('startBattleShip');
