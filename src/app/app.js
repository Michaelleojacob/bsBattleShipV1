import myHeader from '../header/headercomponent';
import myFooter from '../footer/footer';
import Player from '../player/player';
import renderBoard from '../domComponents/makeboards';
import cached from '../cacheDom/cacheDom';
import gameStartModal from '../startGameModal/startGameModal';

export default function app() {
  const user = Player();
  const bot = Player();

  const { playerGridArea, botGridArea } = cached;
  renderBoard(user.getboard, playerGridArea, true);
  renderBoard(bot.getboard, botGridArea, false);

  myHeader.init();
  myFooter.init();

  const modal = gameStartModal();
  modal.displayModal();
}
