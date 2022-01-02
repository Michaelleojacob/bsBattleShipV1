import Player from '../player/player';
import renderBoard from '../domComponents/makeboards';
import cached from '../cacheDom/cacheDom';
import ps from '../pubsub/pubsub';

export default function app() {
  const user = Player('user');
  const bot = Player('bot');

  const { playerGridArea, botGridArea } = cached;
  const renderUserBoard = () => renderBoard(user.getboard, user.getName, playerGridArea);
  ps.subscribe('renderUserBoard', renderUserBoard);

  const renderBotBoard = () => renderBoard(bot.getboard, bot.getName, botGridArea);
  ps.subscribe('renderBotBoard', renderBotBoard);
}
