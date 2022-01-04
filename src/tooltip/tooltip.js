import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import ps from '../pubsub/pubsub';

function renderToolTip() {
  const { tooltip } = cached;

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
    tooltip.appendChild(tooltipText);
  }
  return {
    init,
  };
}

const tooltipText = renderToolTip();
export default tooltipText;

// how to use ps to update:
// ps.publish('updateTooltip', { newText: 'thing1', color: 'red' });
// ps.publish('updateTooltip', { newText: 'hello', color: 'pink' });
