//* early version of Player();
//* this just makes a 10x10 board on the screen and adds the ships.
//* this version is visual, it actually makes the board on the page!
//* scroll down for the .style.css code

//! smaller version
// import './style.css';
// import Player from './player/player';

// const me = Player();
// function makeDomBoard(obj) {
//   const objKeys = Object.keys(obj);
//   const con = document.querySelector('#container');
//   objKeys.forEach((item) => {
//     const element = document.createElement('div');
//     element.classList.add(item, obj[item], 'cell');
//     con.appendChild(element);
//   });
// }
// console.log(me.getPlayerBoard);
// makeDomBoard(me.getPlayerBoard);
//! </smaller version>

// import './style.css';

// import Player from './player/player';

// const me = Player();
// function makeDomBoard(obj) {
//   const objKeys = Object.keys(obj);
//   const con = document.querySelector('#container');
//   objKeys.forEach((item) => {
//     const element = document.createElement('div');
//     element.classList.add(item, obj[item], 'cell');
//     con.appendChild(element);
//   });
// }
// makeDomBoard(me.getPlayerBoard);

// const thing = {
//   A0: 'empty',
//   B0: 'empty',
//   C0: 'empty',
//   D0: 'buffer',
//   E0: 'buffer',
//   F0: 'buffer',
//   G0: 'buffer',
//   H0: 'buffer',
//   I0: 'buffer',
//   J0: 'buffer',
//   A1: 'empty',
//   B1: 'empty',
//   C1: 'empty',
//   D1: 'buffer',
//   E1: 'destroyer',
//   F1: 'destroyer',
//   G1: 'destroyer',
//   H1: 'buffer',
//   I1: 'buffer',
//   J1: 'submarine',
//   A2: 'empty',
//   B2: 'empty',
//   C2: 'empty',
//   D2: 'buffer',
//   E2: 'buffer',
//   F2: 'buffer',
//   G2: 'buffer',
//   H2: 'buffer',
//   I2: 'buffer',
//   J2: 'submarine',
//   A3: 'buffer',
//   B3: 'buffer',
//   C3: 'empty',
//   D3: 'empty',
//   E3: 'buffer',
//   F3: 'patrol',
//   G3: 'patrol',
//   H3: 'buffer',
//   I3: 'buffer',
//   J3: 'submarine',
//   A4: 'carrier',
//   B4: 'buffer',
//   C4: 'empty',
//   D4: 'empty',
//   E4: 'buffer',
//   F4: 'buffer',
//   G4: 'buffer',
//   H4: 'buffer',
//   I4: 'buffer',
//   J4: 'buffer',
//   A5: 'carrier',
//   B5: 'buffer',
//   C5: 'empty',
//   D5: 'empty',
//   E5: 'empty',
//   F5: 'empty',
//   G5: 'empty',
//   H5: 'empty',
//   I5: 'empty',
//   J5: 'empty',
//   A6: 'carrier',
//   B6: 'buffer',
//   C6: 'buffer',
//   D6: 'buffer',
//   E6: 'buffer',
//   F6: 'buffer',
//   G6: 'buffer',
//   H6: 'empty',
//   I6: 'empty',
//   J6: 'empty',
//   A7: 'carrier',
//   B7: 'buffer',
//   C7: 'battleship',
//   D7: 'battleship',
//   E7: 'battleship',
//   F7: 'battleship',
//   G7: 'buffer',
//   H7: 'empty',
//   I7: 'empty',
//   J7: 'empty',
//   A8: 'carrier',
//   B8: 'buffer',
//   C8: 'buffer',
//   D8: 'buffer',
//   E8: 'buffer',
//   F8: 'buffer',
//   G8: 'buffer',
//   H8: 'empty',
//   I8: 'empty',
//   J8: 'empty',
//   A9: 'buffer',
//   B9: 'buffer',
//   C9: 'empty',
//   D9: 'empty',
//   E9: 'empty',
//   F9: 'empty',
//   G9: 'empty',
//   H9: 'empty',
//   I9: 'empty',
//   J9: 'empty',
// };
