import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';

function renderSocialComponents() {
  const { socials } = cached;

  // const by = dom({ text: 'by', attributes: [{ id: 'by' }] });

  const emailwrap = dom({ attributes: [{ id: 'emailwrap' }] });

  const ccIcon = dom({
    classes: ['far', 'fa-copyright', 'nonclick'],
    attributes: [{ id: 'ccIcon' }],
  });

  const email = dom({ text: 'michaelleojacob@gmail.com', attributes: [{ id: 'email' }] });

  const links = dom({ attributes: [{ id: 'links' }] });

  const github = dom({
    events: [
      { type: 'click', handler: () => window.open('https://github.com/Michaelleojacob', '_blank') },
    ],
    attributes: [{ id: 'github' }],
    classes: ['link'],
    children: [
      dom({
        classes: ['fab', 'fa-github', 'nonclick'],
      }),
    ],
  });
  const linkedin = dom({
    events: [
      {
        type: 'click',
        handler: () => window.open('https://www.linkedin.com/in/michael-leo-jacob/', '_blank'),
      },
    ],
    attributes: [{ id: 'linkedin' }],
    classes: ['link'],
    children: [
      dom({
        classes: ['fab', 'fa-linkedin', 'nonclick'],
      }),
    ],
  });
  const repo = dom({
    events: [
      {
        type: 'click',
        handler: () => window.open('https://github.com/Michaelleojacob/bsBattleShipV1', '_blank'),
      },
    ],
    attributes: [{ id: 'repo' }],
    classes: ['link'],
    children: [
      dom({
        classes: ['fas', 'fa-code', 'nonclick'],
      }),
    ],
  });

  function init() {
    // socials.appendChild(by);
    emailwrap.appendChild(ccIcon);
    emailwrap.appendChild(email);
    socials.appendChild(emailwrap);
    links.appendChild(github);
    links.appendChild(linkedin);
    links.appendChild(repo);
    socials.appendChild(links);
  }
  return {
    init,
  };
}

const renderSocials = renderSocialComponents();
export default renderSocials;
