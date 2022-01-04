import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import ps from '../pubsub/pubsub';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

export default function renderToolTip() {
  const { tooltipAndGameAreaWrap } = cached;

  const tooltip = dom({ attributes: [{ id: 'tooltip' }] });

  const tooltipText = dom({ attributes: [{ id: 'tooltipText' }] });

  function changeText({ newText, color }) {
    tooltipText.textContent = newText;
    tooltipText.removeAttribute('class');
    tooltipText.setAttribute('class', color);
  }

  ps.subscribe('updateTooltip', changeText);

  const clearTooltip = () => changeText('', '');

  ps.subscribe('clearTooltip', clearTooltip);

  function init() {
    removeAllChildNodes(tooltip);
    tooltip.appendChild(tooltipText);
    tooltipAndGameAreaWrap.appendChild(tooltip);
  }
  return {
    init,
  };
}

// how to use ps to update:
// ps.publish('updateTooltip', { newText: 'thing1', color: 'red' });
// ps.publish('updateTooltip', { newText: 'hello', color: 'pink' });
