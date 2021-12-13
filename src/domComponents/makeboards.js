import dom from '../domCreator/domCreator';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

export default function makeHiddenBoard(obj, parent, player = false) {
  removeAllChildNodes(parent);
  const entries = Object.entries(obj);
  entries.forEach(([key, value]) => {
    if (player) {
      const element = dom({ classes: [key, `p${value}`, 'cell'] });
      parent.appendChild(element);
    }
    if (!player) {
      if (value === 'hit' || value === 'miss') {
        const element = dom({ classes: [key, `${value}`, 'cell'] });
        parent.appendChild(element);
      } else {
        const element = dom({ classes: [key, 'cell'] });
        parent.appendChild(element);
      }
    }
  });
}
