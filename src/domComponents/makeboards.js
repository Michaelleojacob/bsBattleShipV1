import dom from '../domCreator/domCreator';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

export default function renderBoard(getboard, getName, parent) {
  removeAllChildNodes(parent);
  const entries = Object.entries(getboard);
  entries.forEach(([key, value]) => {
    if (getName === 'user') {
      const element = dom({ classes: [key, `p${value}`, 'cell'] });
      parent.appendChild(element);
    }
    if (!getName === 'user') {
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
