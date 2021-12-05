import dom from '../domCreator/domCreator';

export default function makeHidden(obj, parent, player = false) {
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

// how to use examples:
// makeHidden(mb1, playerboard, true);
// makeHidden(mb2, botboard);
