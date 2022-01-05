// import ps from '../pubsub/pubsub';
import dom from '../domCreator/domCreator';
import cached from '../cacheDom/cacheDom';
import ps from '../pubsub/pubsub';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

export default function endGameLoop(didUserWin) {
  let msg;
  switch (didUserWin) {
    case true:
      msg = 'You are victorious';
      break;
    case false:
      msg = 'You lost to a bot, better luck next time!';
      break;
    default:
      break;
  }

  const undobtn = dom({ attributes: [{ id: 'undobtn' }] });
  const undoIcon = dom({ classes: ['fas', 'fa-undo'] });
  undobtn.appendChild(undoIcon);

  const endTextWrap = dom({ attributes: [{ id: 'endTextWrap' }] });
  const winnerText = dom({ text: msg, attributes: [{ id: 'winnerText' }] });
  const staticText = dom({ text: 'would you like to play again?' });

  // const modal = dom({ attributes: [{ id: 'myModal' }], classes: ['modal'] });
  const modalContent = dom({ attributes: [{ id: 'modalContent' }] });

  const { modal, headerAndSocialsWrap, tooltipAndGameAreaWrap } = cached;
  modalContent.appendChild(endTextWrap);
  endTextWrap.appendChild(winnerText);
  endTextWrap.appendChild(staticText);
  modalContent.appendChild(undobtn);

  function undoWasClicked() {
    modal.setAttribute('style', 'display:none');
    headerAndSocialsWrap.setAttribute('style', 'opacity:1');
    tooltipAndGameAreaWrap.setAttribute('style', 'opacity:1');
    ps.removeAllExceptOneSub('startBattleShip');
    ps.publish('startBattleShip');
  }

  // ps sub these so I can undo this
  headerAndSocialsWrap.setAttribute('style', 'opacity:0.4');
  tooltipAndGameAreaWrap.setAttribute('style', 'opacity:0.4');

  function init() {
    removeAllChildNodes(modal);
    modal.setAttribute('style', 'display:flex');
    modal.appendChild(modalContent);
    // container.appendChild(modal);
    undobtn.addEventListener('click', undoWasClicked);
  }
  return { init };
}
