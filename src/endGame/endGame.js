// import ps from '../pubsub/pubsub';
import dom from '../domCreator/domCreator';
import cached from '../cacheDom/cacheDom';

function endGameLoop(didUserWin) {
  switch (didUserWin) {
    case true:
      break;
    case false:
      break;
    default:
      break;
  }
  // function clearGameAfterAShortDelay() {
  //   ps.publish('wipeGameArea');
  //   ps.publish('clearTooltip');
  //   ps.publish('runItBack');
  // }
  // clearGameAfterAShortDelay();

  const undo = dom({ tag: 'button', classes: ['fas', 'fa-undo'] });

  const modal = dom({ attributes: [{ id: 'myModal' }], classes: ['modal'] });
  const modalContent = dom({ attributes: [{ id: 'modalContent' }] });
  modalContent.appendChild(undo);
  modal.appendChild(modalContent);
  const { container } = cached;
  container.appendChild(modal);
  modal.setAttribute('style', 'display:flex');
}

export default endGameLoop;
