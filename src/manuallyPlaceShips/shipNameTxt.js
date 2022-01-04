import dom from '../domCreator/domCreator';
import ps from '../pubsub/pubsub';

export default function renderShipName() {
  const shipNameWrap = dom({ attributes: [{ id: 'shipNameWrap' }] });
  const staticShipName = dom({
    tag: 'span',
    text: 'placing: ',
    attributes: [{ id: 'staticShipName' }],
  });
  const dynamicShipName = dom({ tag: 'span', text: '', attributes: [{ id: 'dynamicShipName' }] });
  shipNameWrap.appendChild(staticShipName);
  shipNameWrap.appendChild(dynamicShipName);

  function updateShipName(name) {
    dynamicShipName.textContent = name;
  }
  ps.subscribe('updateShipName', updateShipName);
  return {
    shipNameWrap,
  };
}
