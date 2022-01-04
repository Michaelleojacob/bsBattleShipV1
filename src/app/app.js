import headerComponent from '../header/headercomponent';
import renderSocialComponents from '../socials/socials';
import renderToolTip from '../tooltip/tooltip';
import startGameLoop from '../gameLoop/gameloop';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';
import cached from '../cacheDom/cacheDom';

export default function app() {
  // clear all ~ except modal
  const { headerAndSocialsWrap, tooltipAndGameAreaWrap } = cached;
  removeAllChildNodes(headerAndSocialsWrap);
  removeAllChildNodes(tooltipAndGameAreaWrap);
  // clear all ~ except modal

  function nonGameAreaContent() {
    const header = headerComponent();
    header.init();
    const renderSocials = renderSocialComponents();
    renderSocials.init();
  }
  function playBattleship() {
    const tooltipText = renderToolTip();
    tooltipText.init();
    const startComponent = startGameLoop();
    startComponent.init();
  }

  return {
    nonGameAreaContent,
    playBattleship,
  };
}
