import dom from '../domCreator/domCreator';
import cached from '../cacheDom/cacheDom';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

export default function headerComponent() {
  const { headerAndSocialsWrap } = cached;

  const header = dom({ attributes: [{ id: 'header' }] });
  const title = dom({ text: 'battleship', attributes: [{ id: 'title' }] });

  header.appendChild(title);

  function init() {
    removeAllChildNodes(header);
    headerAndSocialsWrap.appendChild(header);
    headerAndSocialsWrap.appendChild(title);
  }

  return {
    init,
  };
}
