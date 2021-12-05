//* v1 of makeboards is in effect.
//* I can create, and append the boards to the screen
//* the player user has their ships displayed,
//* while the bot does not

// import './style.css';
// import cached from './cacheDom/cacheDom';
// import dom from './domCreator/domCreator';
// import mb1 from './mockboards/board1';
// import mb2 from './mockboards/board2';

// const { playerboard, botboard } = cached;

// function makeHidden(obj, parent, player = false) {
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

// makeHidden(mb1, playerboard, true);

// makeHidden(mb2, botboard);

//! css

// #playerboard,
// #botboard {
//   display: grid;
//   width: 200px;
//   height: 200px;
//   border: 1px solid black;
//   grid-template-columns: repeat(10, 1fr);
//   grid-template-columns: repeat(10, 1fr);
//   margin-bottom: 10px;
// }

// .cell {
//   border: 1px solid black;
// }

// .pbuffer {
//   background: rgb(176, 170, 238);
// }

// .pcarrier,
// .pbattleship,
// .pdestroyer,
// .psubmarine,
// .ppatrol {
//   background: gray;
// }
