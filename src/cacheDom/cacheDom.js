function cacheDom() {
  const container = document.querySelector('#container');
  const nonModalContent = container.querySelector('#nonModalContent');
  const header = nonModalContent.querySelector('#header');
  const boards = nonModalContent.querySelector('#boards');
  const playerGridArea = boards.querySelector('#playerGridArea');
  const botGridArea = boards.querySelector('#botGridArea');
  const footer = nonModalContent.querySelector('#footer');

  return {
    container,
    nonModalContent,
    header,
    boards,
    playerGridArea,
    botGridArea,
    footer,
  };
}

const cached = cacheDom();
export default cached;
