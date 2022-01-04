import dom from '../domCreator/domCreator';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

export default function renderPlayerGrid(getboard, parent) {
  removeAllChildNodes(parent);
  const entries = Object.entries(getboard);
  entries.forEach(([key, value]) => {
    const element = dom({ classes: [key, `p${value}`, 'cell'] });
    parent.appendChild(element);
  });
}
