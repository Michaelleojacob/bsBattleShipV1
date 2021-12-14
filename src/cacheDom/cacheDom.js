function cacheDom() {
  const container = document.querySelector('#container');
  const header = container.querySelector('#header');
  const boards = container.querySelector('#boards');
  const footer = container.querySelector('#footer');
  return {
    container,
    header,
    boards,
    footer,
  };
}

const cached = cacheDom();
export default cached;
