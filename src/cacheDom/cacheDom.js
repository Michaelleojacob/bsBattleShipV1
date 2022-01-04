function cacheDom() {
  const container = document.querySelector('#container');
  const modal = container.querySelector('#modal');
  const headerAndSocialsWrap = container.querySelector('#headerAndSocialsWrap');
  const tooltipAndGameAreaWrap = container.querySelector('#tooltipAndGameAreaWrap');

  return {
    container,
    modal,
    headerAndSocialsWrap,
    tooltipAndGameAreaWrap,
    header: headerAndSocialsWrap.querySelector('#header'),
    socials: headerAndSocialsWrap.querySelector('#socials'),
    tooltip: tooltipAndGameAreaWrap.querySelector('#tooltip'),
    gameArea: tooltipAndGameAreaWrap.querySelector('#gameArea'),
  };
}

const cached = cacheDom();
export default cached;
