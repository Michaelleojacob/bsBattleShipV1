import myHeader from '../header/headercomponent';
import renderSocials from '../socials/socials';
import tooltipText from '../tooltip/tooltip';
import startComponent from '../gameLoop/gameloop';

export default function app() {
  myHeader.init();
  renderSocials.init();
  tooltipText.init();
  startComponent.init();
  //* for testing
  document.querySelector('#manual').click();
  //* for testing
}
