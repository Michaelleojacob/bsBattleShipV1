import dom from '../domCreator/domCreator';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

export default function renderPlayerGrid(boardObj, parent) {
  removeAllChildNodes(parent);
  const entries = Object.entries(boardObj);
  entries.forEach(([key, value]) => {
    const element = dom({ classes: [key, `p${value}`, 'cell'] });
    parent.appendChild(element);
  });
}
