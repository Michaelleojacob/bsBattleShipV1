function cacheDom() {
  const container = document.querySelector('#container');
  const header = container.querySelector('#header');
  const boards = container.querySelector('#boards');
  const playerGridArea = boards.querySelector('#playerGridArea');
  const botGridArea = boards.querySelector('#botGridArea');
  const footer = container.querySelector('#footer');

  return {
    container,
    header,
    boards,
    playerGridArea,
    botGridArea,
    footer,
  };
}

const cached = cacheDom();
export default cached;
