// const shipsObj = {
//   carrier: Ship('carrier', 5),
//   battleship: Ship('battleship', 3),
//   destroyer: Ship('destroyer', 3),
//   submarine: Ship('submarine', 3),
//   patrol: Ship('patrol', 2),
// };

//   function receiveAttack(cell) {
//     const shotFired = board[cell];

//     //* this approach assumes the ship is a value on board
//     //* board['A0'] = { ...carrier }
//     //* board['A0].hit(1) // board.carrier.hit(1)
//     console.log(shotFired);
//     shotFired.hit(1);
//     console.log(shotFired.status);

//     //* this approach assumes shipObj exists (above)
//     //* where as the above example does NOT require the shipObj
//     // const ship = shipsObj[shotFired];
//     // console.log(ship);
//     // ship.hit(2);

//     //* this approach uses eval() which is gross
//     // console.log(ship.status);
//     // const ship = eval(shotFired);
//     // ship.hit(1);
//     // console.log(ship.status);
