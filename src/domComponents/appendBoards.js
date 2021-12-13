import boardObj from '../gameboardFac/boardObj';
import dom from '../domCreator/domCreator';
import cached from '../cacheDom/cacheDom';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

function clearBoards() {
  const { playerGridArea, botGridArea } = cached;
  removeAllChildNodes(playerGridArea);
  removeAllChildNodes(botGridArea);
}

function makeTenByTenGrid() {
  const count = { ...boardObj };
  const { playerGridArea, botGridArea } = cached;

  function makeGrid(parent) {
    Object.keys(count).forEach((item) => {
      const element = dom({ classes: [item, 'cell'] });
      parent.appendChild(element);
    });
  }

  function makeBoth() {
    clearBoards();
    makeGrid(playerGridArea);
    makeGrid(botGridArea);
  }

  return {
    init: makeBoth,
  };
}

const makeGridsTenByTen = makeTenByTenGrid();

export default makeGridsTenByTen;

// use =>
// import makeGridsTenByTen
// makeGridsTenByTen.init();
