import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';

function headerComponent() {
  const { header } = cached;

  const title = dom({ text: 'battleship', attributes: [{ id: 'title' }] });
  cached.title = title;

  function init() {
    header.appendChild(title);
  }

  return {
    init,
  };
}

const myHeader = headerComponent();

export default myHeader;
