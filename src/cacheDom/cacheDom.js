function cacheDom() {
  const container = document.querySelector('#container');

  return {
    container,
    header: container.querySelector('#header'),
    socials: container.querySelector('#socials'),
    tooltip: container.querySelector('#tooltip'),
    gameArea: container.querySelector('#gameArea'),
  };
}

const cached = cacheDom();
export default cached;
