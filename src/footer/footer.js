import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';

function footerComponent() {
  const { footer } = cached;

  const message = dom({
    text: 'copyright @ michaelleojacob@gmail.com',
    attributes: [{ id: 'CC' }],
  });

  function init() {
    footer.appendChild(message);
  }

  return {
    init,
  };
}

const myFooter = footerComponent();

export default myFooter;
