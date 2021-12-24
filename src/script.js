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
import myManualModal from './manualGameLoop/mModal';

const user = Player('user');

const userModal = myManualModal(user);
userModal.init();
// modal.displayModal();
// modal.allowClickToPlace();
// modal.mouseOverEffect();
// modal.renderModalBoard(user.getboard);
