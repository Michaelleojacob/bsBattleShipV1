import createModalDom from './domModal';

export default function mouseOverEffect() {
  //* dom
  const modalDom = createModalDom();
  const modalDomObject = modalDom.getModalDomPieces();
  const { modalGrid, rotate } = modalDomObject;
  //* dom

  modalGrid.addEventListener('mouseover', (e) => {
    const currentPlayerBoard = playerObject.getboard;
    if (e.target.classList.contains('cell')) {
      const target = e.target.classList[0];
      const shiplength = 5;
      const arr = handleMModalClick(target, rotate, shiplength);
      if (arr === 'error') return 'error';
      let addClass;
      if (arr.length === shiplength) addClass = 'highlighted';
      if (arr.length !== shiplength) addClass = 'danger';
      arr.forEach((item) => {
        if (currentPlayerBoard[item] === 'empty') {
          modalGrid.querySelector(`.${item}`).classList.add('highlighted');
        }
        if (currentPlayerBoard[item] !== 'empty') {
          modalGrid.querySelector(`.${item}`).classList.add('danger');
        }
        modalGrid.querySelector(`.${item}`).classList.add(addClass);
      });
    }
    return false;
  });
  //* mouseover logic
  //* mouseout logic
  modalGrid.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('highlighted') || e.target.classList.contains('danger')) {
      const foo = Array.from(modalGrid.childNodes);
      foo.forEach((item) => {
        item.classList.remove('highlighted', 'danger');
      });
    }
  });
  //* mouseout logic
}
