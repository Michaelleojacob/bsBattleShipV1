//! < do not get rid of this line lol > !\\
import './style.css';
//! </ do not get rid of this line lol > !\\
// ?  < app testing > !\\
// import app from './app/app';

// app();
// ?  </ app testing > !\\
//* testing manual modal

//* testing manual modal
import Player from './player/player';
import modal from './manualGameLoop/mModal';

const user = Player();
modal.displayModal();
modal.renderModalBoard(user.getboard);
