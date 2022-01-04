import dom from '../domCreator/domCreator';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

//! make sure to un comment this one
// export default function renderBotGrid(boardObj, parent) {
//   removeAllChildNodes(parent);
//   const entries = Object.entries(boardObj);
//   entries.forEach(([key, value]) => {
//     if (value === 'hit' || value === 'miss') {
//       const element = dom({ classes: [key, `${value}`, 'cell'] });
//       parent.appendChild(element);
//     } else {
//       const element = dom({ classes: [key, 'cell'] });
//       parent.appendChild(element);
//     }
//   });
// }

//! delete this one!
export default function renderBotGrid(boardObj, parent) {
  removeAllChildNodes(parent);
  const entries = Object.entries(boardObj);
  entries.forEach(([key, value]) => {
    const element = dom({ classes: [key, `p${value}`, 'cell'] });
    parent.appendChild(element);
  });
}
