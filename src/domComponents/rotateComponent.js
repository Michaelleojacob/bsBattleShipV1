import dom from '../domCreator/domCreator';

export default function makeRotateComponent() {
  const rotateWrap = dom({ attributes: [{ id: 'rotateWrap' }] });
  const rotate = dom({ tag: 'button', text: 'rotate', attributes: [{ id: 'rotateBtn' }] });
  const textWrap = dom({ attributes: [{ id: 'textWrap' }] });
  const staticText = dom({ tag: 'span', text: 'rotation: ' });
  const dynamicText = dom({ tag: 'span', text: '' });
  rotateWrap.appendChild(rotate);
  rotateWrap.appendChild(textWrap);
  textWrap.appendChild(staticText);
  textWrap.appendChild(dynamicText);

  let isVert = true;

  const checkVert = () => isVert;

  function getVert() {
    const state = checkVert();
    return state === true;
  }

  function updatetextBasedOnState() {
    const state = checkVert();
    switch (state) {
      case true:
        dynamicText.textContent = 'vertical';
        break;
      case false:
        dynamicText.textContent = 'horizontal';
        break;
      default:
        break;
    }
  }
  updatetextBasedOnState();

  function switchState() {
    const state = checkVert();
    switch (state) {
      case true:
        isVert = false;
        updatetextBasedOnState();
        break;
      case false:
        isVert = true;
        updatetextBasedOnState();
        break;
      default:
        break;
    }
  }

  const addEventToRotateBtn = () => rotate.addEventListener('click', switchState);
  addEventToRotateBtn();
  const removeEventFromRotateBtn = () => rotate.removeEventListener('click', switchState);

  return {
    rotateWrap,
    getVert,
    removeEventFromRotateBtn,
  };
}
