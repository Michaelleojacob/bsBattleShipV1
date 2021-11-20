export default function dom(obj) {
  const element = document.createElement(obj.tag || 'div');
  Object.keys(obj).map((prop) => {
    switch (prop) {
      case 'tag':
        break;
      case 'text':
        element.textContent = obj.text;
        break;
      case 'classes':
        if (!Array.isArray(obj.classes)) return console.log('classes must be an array');
        obj.classes.map((c) => element.classList.add(c));
        break;
      case 'attributes':
        if (!Array.isArray(obj.attributes)) return console.log(`attributes must be an array`);
        obj.attributes.map((attr) => element.setAttribute(Object.keys(attr), Object.values(attr)));
        break;
      case 'events':
        if (!Array.isArray(obj.events)) return console.log(`events must be an array`);
        obj.events.map(({ type, handler }) => element.addEventListener(type, handler));
        break;
      case 'children':
        if (!Array.isArray(obj.children)) return console.log(`children must be an array`);
        obj.children.map((child) => element.appendChild(child));
        break;
      default:
    }
    return element;
  });
  return element;
}
