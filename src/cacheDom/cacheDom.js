function cacheDom() {
  const container = document.querySelector('#container');
  const boards = container.querySelector('#boards');
  const playerboard = boards.querySelector('#playerboard');
  const botboard = boards.querySelector('#botboard');
  return {
    container,
    boards,
    playerboard,
    botboard,
  };
}

const cached = cacheDom();
export default cached;
