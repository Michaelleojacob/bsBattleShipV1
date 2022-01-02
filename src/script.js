//! < do not get rid of this line lol > !\\
import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import '../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../node_modules/@fortawesome/fontawesome-free/js/regular';
import '../node_modules/@fortawesome/fontawesome-free/js/brands';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
//! </ do not get rid of this line lol > !\\
// ?  < app testing > !\\
// import app from './app/app';

// app();
// ?  </ app testing > !\\
//* testing manual modal

//* testing manual modal
// import Player from './player/player';
// import myManualModal from './manualGameLoop/mModal';

// const user = Player('user');

// const userModal = myManualModal(user);
// userModal.init();

// ? making the header, socials, and tooltip areas
import myHeader from './header/headercomponent';
import renderSocials from './socials/socials';

myHeader.init();
renderSocials.init();
