import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

function headerComponent() {
  const { header } = cached;

  const title = dom({ text: 'battleship', attributes: [{ id: 'title' }] });
  cached.title = title;

  function init() {
    removeAllChildNodes(header);
    header.appendChild(title);
  }

  return {
    init,
  };
}

const myHeader = headerComponent();

export default myHeader;
