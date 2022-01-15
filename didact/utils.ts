export const isEvent = (key) => key.startsWith('on');
export const isProperty = (key) => key !== 'children' && !isEvent(key);
export const isNew = (prev, next) => (key) => prev[key] !== next[key];
export const isGone = (prev, next) => (key) => !(key in next);


export const getEventTypeByTagName = (tagName, eventType) => {
  switch (tagName) {
    case "INPUT":
      switch (eventType) {
        case 'onChange':
          return 'onInput'
        default:
          return eventType
      }      
  
    default:
      return eventType
  }
}