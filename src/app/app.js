import myHeader from '../header/headercomponent';
import renderSocials from '../socials/socials';
import tooltipText from '../tooltip/tooltip';
import startComponent from '../gameLoop/gameloop';

export default function app() {
  function nonGameAreaContent() {
    myHeader.init();
    renderSocials.init();
  }
  function playBattleship() {
    tooltipText.init();
    startComponent.init();
  }

  return {
    nonGameAreaContent,
    playBattleship,
  };
}
