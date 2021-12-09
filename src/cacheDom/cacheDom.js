function cacheDom() {
  const container = document.querySelector('#container');
  const boards = container.querySelector('#boards');
  const playerGridArea = boards.querySelector('#playerGridArea');
  const botGridArea = boards.querySelector('#botGridArea');
  return {
    container,
    boards,
    playerGridArea,
    botGridArea,
  };
}

const cached = cacheDom();
export default cached;
