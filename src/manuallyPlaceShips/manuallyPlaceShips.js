import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import Player from '../player/player';
import renderPlayerGrid from '../domComponents/renderPlayerGrid';
import makeRotateComponent from '../domComponents/rotateComponent';
import startGame from './startGame';
import placeShipsSetup from './Events';
import ps from '../pubsub/pubsub';
import renderShipName from './shipNameTxt';

function manuallyPlaceShips() {
  ps.publish('wipeGameArea');

  const { gameArea } = cached;

  const rotate = makeRotateComponent();
  gameArea.appendChild(rotate.rotateWrap);

  const shipName = renderShipName();
  gameArea.appendChild(shipName.shipNameWrap);

  const playerGridArea = dom({ attributes: [{ id: 'playerGridArea' }] });
  gameArea.appendChild(playerGridArea);

  const user = Player();

  console.log(`from manuallyPlaceShips:`);
  console.log(user.getboard);

  //* for testing:
  // user.randomlyPlaceAllShips();
  //* for testing

  const updatePlayerGridManualPlacement = () => renderPlayerGrid(user.getboard, playerGridArea);
  ps.subscribe('updatePlayerGridManualPlacement', updatePlayerGridManualPlacement);
  ps.publish('updatePlayerGridManualPlacement');

  ps.publish('updateTooltip', { newText: 'click to place your ships', color: '' });

  function enableEvents() {
    const currentShip = user.getCurrentShipForManualGameLoop();
    ps.publish('updateShipName', currentShip.name);

    if (currentShip === true) {
      const newgame = startGame(user);
      newgame.init();
    }

    placeShipsSetup(playerGridArea, rotate.getVert, currentShip, user);
  }
  ps.subscribe('shipPlaced', enableEvents);
  enableEvents();
}

export default manuallyPlaceShips;
