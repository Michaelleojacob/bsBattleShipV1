//! < do not get rid of this line lol > !\\
import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import '../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../node_modules/@fortawesome/fontawesome-free/js/regular';
import '../node_modules/@fortawesome/fontawesome-free/js/brands';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import myHeader from './header/headercomponent';
import renderSocials from './socials/socials';
import tooltipText from './tooltip/tooltip';

myHeader.init();
renderSocials.init();
tooltipText.init();
