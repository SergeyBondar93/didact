import {
  isEvent, isGone, isNew, isProperty,
} from './utils';

const kebabize = str => {
  return str.split('').map((letter, idx) => {
    return letter.toUpperCase() === letter
     ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
     : letter;
  }).join('');
}

export function updateDom(dom, prevProps, nextProps) {
  // Remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(
      (key) => !(key in nextProps)
        || isNew(prevProps, nextProps)(key),
    )
    .forEach((name) => {
      const eventType = name
        .toLowerCase()
        .substring(2);
      dom.removeEventListener(
        eventType,
        prevProps[name],
      );
    });

  // Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = '';
    });

  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      if (name === 'style') {
        dom[name] = Object.entries(nextProps[name]).map(([cssPropName, cssValue]) => {
          return `${kebabize(cssPropName)}: ${cssValue}`  
        }).join(';');
      } else {
        dom[name] = nextProps[name];
      }
    });

  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      const eventType = name
        .toLowerCase()
        .substring(2);
      dom.addEventListener(
        eventType,
        nextProps[name],
      );
    });
}
