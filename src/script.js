import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import '../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../node_modules/@fortawesome/fontawesome-free/js/regular';
import '../node_modules/@fortawesome/fontawesome-free/js/brands';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import app from './app/app';
import ps from './pubsub/pubsub';

const game = app();
game.nonGameAreaContent();
game.playBattleship();

//* for testing
// document.querySelector('#manual').click();
document.querySelector('#random').click();
//* for testing

ps.subscribe('runItBack', game.playBattleship);
