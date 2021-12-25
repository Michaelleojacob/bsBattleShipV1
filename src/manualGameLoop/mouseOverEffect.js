import createModalDom from './domModal';
import arrayBasedOnSize from './getArrayBasedOnSize';

export default function createMouseOverEffect(boardObject) {
  //* dom
  const modalDom = createModalDom();
  const modalDomObject = modalDom.getModalDomPieces();
  const { modalGrid } = modalDomObject;
  //* dom

  modalGrid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('cell')) {
      const target = e.target.classList[0];
      const shiplength = 5;
      const arr = arrayBasedOnSize(target, shiplength);
      if (arr === 'error') return 'error';
      let addClass;
      if (arr.length === shiplength) addClass = 'highlighted';
      if (arr.length !== shiplength) addClass = 'danger';
      arr.forEach((item) => {
        if (boardObject[item] === 'empty') {
          modalGrid.querySelector(`.${item}`).classList.add('highlighted');
        }
        if (boardObject[item] !== 'empty') {
          modalGrid.querySelector(`.${item}`).classList.add('danger');
        }
        modalGrid.querySelector(`.${item}`).classList.add(addClass);
      });
    }
    return false;
  });
  modalGrid.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('highlighted') || e.target.classList.contains('danger')) {
      const foo = Array.from(modalGrid.childNodes);
      foo.forEach((item) => {
        item.classList.remove('highlighted', 'danger');
      });
    }
  });
}
