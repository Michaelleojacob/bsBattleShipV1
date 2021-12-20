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

const user = Player('user');
modal.init(user);
// modal.displayModal();
// modal.allowClickToPlace();
// modal.mouseOverEffect();
// modal.renderModalBoard(user.getboard);
