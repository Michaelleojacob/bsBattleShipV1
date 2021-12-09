import dom from '../domCreator/domCreator';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

export default function makeHiddenBoard(obj, parent, player = false) {
  removeAllChildNodes(parent);
  const keys = Object.keys(obj);
  keys.forEach((item) => {
    if (player) {
      const element = dom({ classes: [item, `p${obj[item]}`, 'cell'] });
      parent.appendChild(element);
    }
    if (!player) {
      const element = dom({ classes: [item, 'cell'] });
      parent.appendChild(element);
    }
  });
}

//! failsafe, working prior to trying to impliment hit+miss to bot
// export default function makeHiddenBoard(obj, parent, player = false) {
//   removeAllChildNodes(parent);
//   const keys = Object.keys(obj);
//   keys.forEach((item) => {
//     if (player) {
//       const element = dom({ classes: [item, `p${obj[item]}`, 'cell'] });
//       parent.appendChild(element);
//     }
//     if (!player) {
//       const element = dom({ classes: [item, 'cell'] });
//       parent.appendChild(element);
//     }
//   });
// }

// how to use examples:
// makeHidden(mb1, playerboard, true);
// makeHidden(mb2, botboard);
